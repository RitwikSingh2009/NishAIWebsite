"""Pre-render the wavy Phosphor background (after XorDev's "Phosphor") to PNG frames.

Usage: python3 scripts/render_phosphor.py <out_dir> [width height frames]
Then encode with ffmpeg (see README). Every term is 2π-periodic in t, so the loop is seamless.
"""
import os
import sys
from multiprocessing import Pool

import numpy as np
from PIL import Image

OUT = sys.argv[1]
W, H, FRAMES = (int(v) for v in sys.argv[2:5]) if len(sys.argv) > 4 else (960, 400, 480)
STEPS = 60


def render(frame):
    t = 2 * np.pi * frame / FRAMES
    y, x = np.mgrid[0:H, 0:W].astype(np.float32)
    dirv = np.stack([(x * 2 - W) / H, (H - y * 2) / H, np.full_like(x, 1.5)], -1)
    dirv /= np.linalg.norm(dirv, axis=-1, keepdims=True)
    z = np.zeros((H, W), np.float32)
    glow = np.zeros((H, W), np.float32)
    for _ in range(STEPS):
        p = dirv * z[..., None]
        px, py, pz = p[..., 0], p[..., 1], p[..., 2] - 7.0
        # Turbulence: layered sine waves with cycled components
        a = np.stack([px, py, pz], -1)
        for j in range(1, 9):
            a = a + np.sin(a[..., [1, 2, 0]] * j + t) / j
        wave = np.sin(px * 0.4 + t) * 1.2
        d = 0.05 * np.abs(np.hypot(py - wave, pz) - 1.5) + 0.04 * np.abs(a[..., 2]) + 2e-4
        z += d
        glow += z / d
    i = np.tanh(glow / 3e4)[..., None] ** 1.6
    col = np.array([0.24, 0.27, 0.5]) * (1 - i) + np.array([0.66, 0.33, 0.97]) * i
    alpha = i * 0.7
    img = (1 - alpha) + col * alpha  # composite over white
    Image.fromarray((np.clip(img, 0, 1) * 255).astype(np.uint8)).save(os.path.join(OUT, f"{frame:04d}.png"))


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    with Pool() as pool:
        for n, _ in enumerate(pool.imap_unordered(render, range(FRAMES)), 1):
            if n % 24 == 0:
                print(f"{n}/{FRAMES}", flush=True)

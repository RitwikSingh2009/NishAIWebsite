# Nish AI website (v2)

Next.js static export, deployed to GitHub Pages by `.github/workflows/nextjs.yml` on pushes to `main`. Custom domain is set in `CNAME`.

- Assets: `public/images` (logo, team photos), `public/fonts` (Newsreader), `src/app/icon.svg` (favicon)
- Team data: `src/lib/team.ts`
- Waitlist backend: `supabase/migrations/` + `src/lib/waitlist.ts` (needs `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`)

## Background video

`public/videos/phosphor.*` is pre-rendered from `scripts/render_phosphor.py` (a wavy take on XorDev's "Phosphor" shader):

```sh
python3 scripts/render_phosphor.py /tmp/phosphor-frames 960 400 480   # ~15 min on 6 cores
ffmpeg -framerate 24 -i /tmp/phosphor-frames/%04d.png -c:v libvpx-vp9 -b:v 0 -crf 40 -pix_fmt yuv420p -an public/videos/phosphor.webm
ffmpeg -framerate 24 -i /tmp/phosphor-frames/%04d.png -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p -movflags +faststart -an public/videos/phosphor.mp4
ffmpeg -i /tmp/phosphor-frames/0000.png -q:v 4 public/videos/phosphor.jpg
```

import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden font-sans select-none">
      {/* Background with a slightly lighter Forest Green tint overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 78, 59, 0.4), rgba(6, 78, 59, 0.4)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQty9s2nyV4rQO-KX06gFrtwqF3yt01w800xj8g_1edw&s=10')`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-white mb-4 drop-shadow-2xl">
          Nish AI LLC
        </h1>
        
        <p className="text-lg sm:text-xl text-emerald-50 font-medium tracking-wide max-w-xl mb-8 drop-shadow-lg">
          Autocomplete That Knows Your Inside Jokes
        </p>
        
        <Link 
          href="/services" 
          className="px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold tracking-widest uppercase border border-emerald-400/30 shadow-[0_0_20px_rgba(16,185,129,0.3)] backdrop-blur-sm transition-all transform hover:scale-105 active:scale-95"
        >
          Explore Our Features
        </Link>
      </div>
    </main>
  );
}
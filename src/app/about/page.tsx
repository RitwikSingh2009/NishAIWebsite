import { team } from "@/lib/team";

export default function About() {
  return (
    <main className="px-4 pt-24 pb-24 text-center sm:pt-32">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
        Meet the <span className="font-display font-normal italic text-purple-500">team</span>
      </h1>
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-6 sm:mt-16 lg:grid-cols-4">
        {team.map((member) => (
          <div key={member.id}>
            <img
              src={member.src}
              alt={member.name}
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <p className="mt-4 font-semibold">{member.name}</p>
            <p className="text-sm text-black/60">{member.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

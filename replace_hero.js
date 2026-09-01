const fs = require("fs");

const path = "src/routes/index.tsx";
const content = fs.readFileSync(path, "utf8");

const oldBlock = `function Hero() {
  return (
    <section id="inicio" className="relative h-[100svh] min-h-[620px] overflow-hidden">
      <img
        src={heroImg}
        alt="Entrenamiento de Kung Fu en Club Mantis Box Sabanalarga"
        width={1920}
        height={1088}
        fetchpriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/60" />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="headline max-w-5xl text-[2.6rem] text-primary-foreground sm:text-6xl md:text-[4.25rem]">
          Disciplina, respeto y <span className="text-brand">convicción.</span>
        </h1>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 bg-brand px-9 py-4 font-display text-lg tracking-wide text-brand-foreground transition-opacity hover:opacity-90"
        >
          Agenda tu clase gratis hoy
        </a>
      </div>
    </section>
  );
}`;

const newBlock = `function YoutubeBackground({ videoId }: { videoId: string }) {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <iframe
        src={\`https://www.youtube.com/embed/\${videoId}?autoplay=1&mute=1&loop=1&playlist=\${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1\`}
        title="Video de fondo"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0 pointer-events-none"
        style={{ transform: "scale(1.2)" }}
      />
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative h-[100svh] min-h-[620px] overflow-hidden">
      <YoutubeBackground videoId="3h5lO0T8peM" />
      <div className="absolute inset-0 bg-ink/60" />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="headline max-w-5xl text-[2.6rem] text-primary-foreground sm:text-6xl md:text-[4.25rem]">
          Disciplina, respeto y <span className="text-brand">convicción.</span>
        </h1>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 bg-brand px-9 py-4 font-display text-lg tracking-wide text-brand-foreground transition-opacity hover:opacity-90"
        >
          Agenda tu clase gratis hoy
        </a>
      </div>
    </section>
  );
}`;

if (!content.includes(oldBlock)) {
  console.error("ERROR: old block not found");
  process.exit(1);
}

const updated = content.replace(oldBlock, newBlock);
fs.writeFileSync(path, updated);
console.log("OK: replaced hero with youtube background");

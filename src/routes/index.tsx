import { createFileRoute } from "@tanstack/react-router";
import kidsImg from "@/assets/program-wushu.jpeg";
import fundamentalsImg from "@/assets/program-selfdefense.jpeg";
import advancedImg from "@/assets/program-taichi.jpeg";
import faqBgImg from "@/assets/faq-background.jpeg";
import communityImg from "@/assets/community.jpg";
import logoAsset from "@/assets/logo-mantis-box.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mantis Box Sabanalarga | Wushu, Kung Fu y Defensa Personal" },
      {
        name: "description",
        content:
          "Club Mantis Box Sabanalarga: clases de Wushu (Tang Lang Quan), defensa personal y Tai Chi Chuan para niños y adultos. Disciplina, respeto y convicción.",
      },
      { property: "og:title", content: "Mantis Box Sabanalarga | Wushu y Defensa Personal" },
      {
        property: "og:description",
        content:
          "Escuela de Kung Fu estilo Mantis en Sabanalarga. Wushu, defensa personal y Tai Chi Chuan. Primera clase gratis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

const SITE = {
  name: "Club Mantis Box Sabanalarga",
  short: "MANTIS BOX",
  phone: "300 900 6591",
  whatsapp: "https://wa.me/573009006591",
  address: "Sabanalarga, Atlántico",
  instagram: "https://www.instagram.com/mantisboxsabana/",
  tiktok: "https://www.tiktok.com/@mantisbox",
  facebook: "https://www.facebook.com/profile.php?id=61592859811892",
  // ⚠️ Reemplazar por el enlace directo de reseñas de tu ficha de Google.
  googleReview: "https://search.google.com/local/writereview?placeid=TU_PLACE_ID",
  googleProfile: "https://www.google.com/search?q=Club+Mantis+Box+Sabanalarga",
};

const NAV = [
  { label: "Instructores", href: "#instructores" },
  { label: "Horarios", href: "#horarios" },
  { label: "Programas", href: "#programas" },
];

const PROGRAMS = [
  {
    img: kidsImg,
    emoji: "🥋",
    title: "Wushu / Kung Fu",
    text: "Kung Fu estilo Mantis para niños. Trabajamos técnica, coordinación, movilidad, disciplina y control corporal mediante juegos, ejercicios y práctica marcial.",
    tags: ["Técnica", "Coordinación", "Movilidad", "Disciplina", "Control corporal"],
    ideal: "niños que comienzan desde cero",
  },
  {
    img: fundamentalsImg,
    emoji: "🥊",
    title: "Defensa Personal",
    text: "Aprende a moverte, reaccionar y protegerte mediante fundamentos de defensa personal y Sanda. Entrenamiento progresivo de golpes, bloqueos, desplazamientos, reacción y combate controlado.",
    tags: ["Golpes", "Bloqueos", "Desplazamientos", "Reacción", "Combate controlado"],
    ideal: "jóvenes y principiantes",
  },
  {
    img: advancedImg,
    emoji: "☯️",
    title: "Tai Chi Chuan",
    text: "Una práctica enfocada en movilidad, equilibrio, respiración y control corporal. Movimientos tradicionales de Tai Chi adaptados al nivel del practicante.",
    tags: ["Movilidad", "Equilibrio", "Respiración", "Control corporal"],
    ideal: "jóvenes y adultos",
  },
];

const REASONS = [
  {
    title: "Escuela tradicional de Wushu",
    text: "Enseñamos Tang Lang Quan (estilo Mantis) respetando la técnica y la filosofía del Kung Fu tradicional.",
  },
  {
    title: "Instructores con trayectoria",
    text: "Dirigidos por un Shifu con más de 30 años de experiencia y liderazgo en la Liga de Wushu del Atlántico.",
  },
  {
    title: "Formación en valores",
    text: "Disciplina, respeto y convicción: entrenamos el cuerpo, pero sobre todo el carácter.",
  },
];

const INSTRUCTORS = [
  {
    role: "Shifu",
    name: "José Miguel Gómez Rangel",
    text: "Ex presidente de la Liga de Wushu del Atlántico. Más de 30 años de experiencia.",
  },
  {
    role: "Sifu suplente",
    name: "Karinton Pimienta",
    text: "Presidente actual de la Liga de Wushu del Atlántico. Más de 20 años de experiencia.",
  },
  {
    role: "Instructor delegado",
    name: "Francisco Llinás",
    text: "Presidente del Club Deportivo Mantis Box. Más de 10 años de experiencia en Kung Fu.",
  },
];

const SCHEDULE = [
  { day: "Infantil", hours: "4:00 PM – 6:00 PM", note: "De lunes a sábado" },
  { day: "Senior", hours: "6:00 PM – 8:00 PM", note: "De lunes a sábado" },
];

const FAQ = [
  {
    q: "¿Necesito experiencia previa para empezar?",
    a: "Ninguna. La mayoría de nuestros alumnos empezó desde cero. Las clases se adaptan al nivel de cada persona y nadie queda solo en el área de práctica.",
  },
  {
    q: "¿Qué debo llevar a mi primera clase?",
    a: "Ropa deportiva cómoda, botella de agua y disposición para aprender. No necesitas uniforme para la clase de prueba.",
  },
  {
    q: "¿Desde qué edad pueden entrenar los niños?",
    a: "El grupo infantil entrena de 4:00 a 6:00 PM de lunes a sábado, con trabajo por edades y niveles.",
  },
  {
    q: "¿Cómo agendo mi clase?",
    a: "Escríbenos por WhatsApp al 300 900 6591 o déjanos tus datos en el formulario de contacto.",
  },
];

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyUs />
        <Instructors />
        <Schedule />
        <Reviews />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function IconInstagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.5-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V10H7.5v3h2.7v8h3.3z" />
    </svg>
  );
}

function IconTiktok({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.5 3c.3 2 1.5 3.4 3.5 3.6v2.5c-1.3.1-2.5-.3-3.6-1v5.7a5.6 5.6 0 1 1-4.8-5.5v2.7a2.9 2.9 0 1 0 2.1 2.8V3h2.8z" />
    </svg>
  );
}

function IconWhatsapp({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a9.9 9.9 0 0 0-8.5 15L2 22l5.2-1.4A9.9 9.9 0 1 0 12 2zm5.5 14c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.5-1.2-2.9s.7-2 1-2.3c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.5-.3.3c-.1.1-.2.3 0 .5.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.5-.1l.8-.9c.2-.2.3-.2.5-.1l2 1c.2.1.4.2.4.3.1.1.1.6-.1 1.3z" />
    </svg>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[83px] sm:h-[99px] bg-gradient-to-b from-ink/85 via-ink/45 to-transparent backdrop-blur-sm">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_1fr] items-start gap-4 px-6 py-1.5">
        <nav
          className="hidden items-center gap-7 self-center md:flex"
          aria-label="Navegación principal"
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[15px] font-medium text-primary-foreground/90 transition-colors duration-300 hover:text-brand"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden" />
        <a
          href="#inicio"
          className="mx-auto flex items-center gap-3 transition-all duration-300 hover:scale-110"
        >
          <img
            src={logoAsset}
            alt="Logo Club Mantis Box Sabanalarga"
            width={52}
            height={52}
            className="h-[110px] w-[110px] sm:h-[132px] sm:w-[132px] object-contain -mb-[27px] sm:-mb-[33px]"
          />
          <span className="headline text-[2rem] leading-[1] tracking-wide text-primary-foreground sm:text-[2.5rem]">
            Mantis
            <br />
            Box
          </span>
        </a>
        <div className="flex items-center justify-end gap-5 self-center text-primary-foreground/85">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-all duration-300 hover:text-brand hover:scale-110"
          >
            <IconInstagram className="h-5 w-5" />
          </a>
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition-all duration-300 hover:text-brand hover:scale-110"
          >
            <IconFacebook className="h-5 w-5" />
          </a>
          <a
            href={SITE.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="transition-all duration-300 hover:text-brand hover:scale-110"
          >
            <IconTiktok className="h-5 w-5" />
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transition-all duration-300 hover:text-brand hover:scale-110"
          >
            <IconWhatsapp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function YoutubeBackground({ videoId }: { videoId: string }) {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&fs=0&cc_load_policy=0`}
        title="Video de fondo"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0 pointer-events-none"
        style={{ transform: "scale(1.0)" }}
      />
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="fade-in-up relative h-[100svh] min-h-[620px] overflow-hidden">
      <YoutubeBackground videoId="3h5lO0T8peM" />
      <div className="absolute inset-0 bg-ink/35" />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="headline max-w-5xl text-[2.6rem] text-primary-foreground sm:text-6xl md:text-[4.25rem]">
          Disciplina, respeto y <span className="text-brand">convicción.</span>
        </h1>
        <a
          href="#contacto"
          className="mt-9 bg-brand px-9 py-4 font-display text-lg tracking-wide text-brand-foreground transition-all duration-300 hover:opacity-90 hover:scale-105"
        >
          Agenda tu clase gratis hoy
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="fade-in-up section-pad bg-background">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 md:grid-cols-2">
        <div>
          <h2 className="headline text-[2.5rem] text-brand sm:text-[3.25rem]">
            Sobre nuestra escuela
          </h2>
          <div className="mt-7 space-y-5 text-[17px] leading-relaxed text-foreground/80">
            <p>
              <span className="font-semibold italic text-brand">{SITE.name}</span> nació en
              Sabanalarga el 15 de noviembre de 2025, iniciando sus primeros entrenamientos en la
              Villa Olímpica.
            </p>
            <p>
              Hoy seguimos creciendo, formando{" "}
              <span className="font-semibold">niños, jóvenes y adultos</span> a través del Wushu,
              Kung Fu y la defensa personal, bajo la supervisión de la Liga de Wushu del Atlántico
              (LIWA).
            </p>
            <p>
              Entrenamos <span className="font-semibold">disciplina, técnica y carácter</span>.
            </p>
          </div>
          <div className="mt-9 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              ["15 NOV 2025", "Fundación"],
              ["Sabanalarga", "Nuestro origen"],
              ["LIWA", "Supervisión"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-lg text-brand sm:text-xl">{n}</div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={logoAsset}
            alt="Escudo del Club Mantis Box Sabanalarga"
            width={520}
            height={520}
            loading="lazy"
            className="w-[78%] max-w-[420px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programas" className="fade-in-up section-pad bg-ink">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="headline text-center text-[2.5rem] text-primary-foreground sm:text-[3.25rem]">
          Programas de entrenamiento
        </h2>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {PROGRAMS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="overflow-hidden rounded-t-md bg-secondary-foreground/80">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-4/3 w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="rounded-b-md bg-secondary-foreground/95 px-5 py-4 text-center">
                <h3 className="font-sans text-lg font-medium normal-case tracking-normal text-primary-foreground">
                  {p.emoji} {p.title}
                </h3>
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-primary-foreground/70">
                {p.text}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-primary-foreground/70">
                <span className="font-semibold text-brand">Ideal para:</span> {p.ideal}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="fade-in-up bg-ink pb-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="relative overflow-hidden">
          <img
            src={communityImg}
            alt="Entrenamiento de Kung Fu en Mantis Box"
            width={1280}
            height={960}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="relative px-6 py-20 sm:px-12">
            <h2 className="headline text-center text-[2.25rem] text-primary-foreground sm:text-[3rem]">
              ¿Por qué entrenar con nosotros?
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {REASONS.map((r) => (
                <div
                  key={r.title}
                  className="border border-primary-foreground/70 px-6 py-8 text-center transition-all duration-300 hover:scale-[1.02]"
                >
                  <h3 className="font-sans text-lg font-semibold normal-case tracking-normal text-primary-foreground">
                    {r.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-primary-foreground/85">
                    {r.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Instructors() {
  return (
    <section id="instructores" className="fade-in-up section-pad bg-background">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="headline text-center text-[2.5rem] text-brand sm:text-[3.25rem]">
          Nuestros instructores
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {INSTRUCTORS.map((m) => (
            <div
              key={m.name}
              className="border border-foreground/15 px-6 py-8 text-center transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="font-display text-xs tracking-[0.18em] text-brand">{m.role}</span>
              <h3 className="mt-3 font-sans text-lg font-semibold normal-case tracking-normal">
                {m.name}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section id="horarios" className="fade-in-up bg-secondary py-20">
      <div className="mx-auto max-w-[1000px] px-6 text-center">
        <h2 className="headline text-[2.25rem] text-brand sm:text-[3rem]">Horarios</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {SCHEDULE.map((d) => (
            <div key={d.day} className="bg-background px-8 py-10">
              <h3 className="headline text-3xl text-foreground">{d.day}</h3>
              <p className="mt-3 font-display text-2xl text-brand">{d.hours}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="resenas" className="fade-in-up section-pad bg-background">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <h2 className="headline text-[2.75rem] text-brand sm:text-[4.5rem]">
          Impacto real, confianza real
        </h2>
        <p className="headline mx-auto mt-4 max-w-4xl text-xl text-foreground sm:text-3xl">
          Escucha a las familias que confían en Mantis Box la formación de sus hijos
        </p>
        <div className="mt-12 rounded-md border border-border bg-secondary px-6 py-12">
          <p className="mx-auto max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            Los testimonios de nuestros alumnos y de sus papás se publican directamente en nuestra
            ficha de Google, para que sean reales y verificables por cualquier persona.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SITE.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand px-8 py-4 font-display text-base tracking-wide text-brand-foreground transition-all duration-300 hover:opacity-90 hover:scale-105"
            >
              Deja tu reseña en Google
            </a>
            <a
              href={SITE.googleProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground/25 px-8 py-4 font-display text-base tracking-wide transition-colors hover:border-brand hover:text-brand"
            >
              Ver reseñas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="fade-in-up bg-background pb-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="relative overflow-hidden">
          <img
            src={faqBgImg}
            alt="Práctica de Wushu en Mantis Box"
            width={1280}
            height={960}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/75" />
          <div className="relative px-6 py-20">
            <h2 className="headline text-center text-[2.25rem] text-primary-foreground sm:text-[3rem]">
              Preguntas frecuentes
            </h2>
            <p className="mt-3 text-center text-primary-foreground/80">
              Aquí resolvemos las dudas más comunes.
            </p>
            <div className="mx-auto mt-10 max-w-2xl bg-ink/50 p-5 backdrop-blur-sm">
              <div className="divide-y divide-primary-foreground/20">
                {FAQ.map((f) => (
                  <details key={f.q} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] text-primary-foreground">
                      {f.q}
                      <span className="text-xl text-primary-foreground/70 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-[15px] leading-relaxed text-primary-foreground/80">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="fade-in-up bg-background pb-24 text-center">
      <img
        src={logoAsset}
        alt="Escudo Club Mantis Box"
        width={220}
        height={220}
        loading="lazy"
        className="mx-auto h-40 w-40 object-contain"
      />
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-brand px-10 py-4 font-display text-xl tracking-wide text-brand-foreground transition-all duration-300 hover:opacity-90 hover:scale-105"
      >
        Tu primera clase va por nuestra cuenta | Agenda ya
      </a>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="fade-in-up section-pad bg-ink">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-6 md:grid-cols-2">
        <div>
          <h2 className="headline text-[2.25rem] text-primary-foreground sm:text-[3rem]">
            Tu primera clase es <span className="text-brand">gratis</span>
          </h2>
          <p className="mt-5 max-w-md text-primary-foreground/70">
            Escríbenos por WhatsApp y coordinamos tu clase de prueba. No necesitas experiencia ni
            uniforme.
          </p>
          <dl className="mt-8 space-y-4 text-[15px] text-primary-foreground/85">
            <div>
              <dt className="font-display text-xs tracking-[0.18em] text-brand">
                Teléfono / WhatsApp
              </dt>
              <dd>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:text-brand hover:scale-110"
                >
                  {SITE.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display text-xs tracking-[0.18em] text-brand">Ubicación</dt>
              <dd>{SITE.address}</dd>
            </div>
            <div>
              <dt className="font-display text-xs tracking-[0.18em] text-brand">Redes</dt>
              <dd className="flex flex-wrap gap-4">
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:text-brand hover:scale-110"
                >
                  Instagram
                </a>
                <a
                  href={SITE.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:text-brand hover:scale-110"
                >
                  TikTok
                </a>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:text-brand hover:scale-110"
                >
                  Facebook
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const estudiante = data.get("estudiante") as string;
            const edad = data.get("edad") as string;
            const peso = data.get("peso") as string;
            const cumple = data.get("cumple") as string;
            const genero = data.get("genero") as string;
            const documento = data.get("documento") as string;
            const texto = [
              "*Nuevo registro desde la web*",
              "",
              `Nombre del estudiante: ${estudiante}`,
              `Edad: ${edad}`,
              `Peso (kg): ${peso}`,
              `Fecha de cumpleaños: ${cumple}`,
              `Género: ${genero}`,
              `Documento de identificación: ${documento}`,
            ].join("\n");
            window.open(`${SITE.whatsapp}?text=${encodeURIComponent(texto)}`, "_blank");
          }}
        >
          {[
            {
              id: "estudiante",
              label: "Nombre del estudiante",
              type: "text",
              placeholder: "Nombre completo",
              autoComplete: "name",
            },
            { id: "edad", label: "Edad", type: "number", placeholder: "Edad", autoComplete: "off" },
            {
              id: "peso",
              label: "Peso (kg)",
              type: "number",
              placeholder: "Peso en kilogramos",
              autoComplete: "off",
            },
            {
              id: "cumple",
              label: "Fecha de cumpleaños",
              type: "date",
              placeholder: "dd/mm/aaaa",
              autoComplete: "off",
            },
          ].map((f) => (
            <div key={f.id}>
              <label
                htmlFor={f.id}
                className="text-xs uppercase tracking-[0.18em] text-primary-foreground/70"
              >
                {f.label}
              </label>
              <input
                id={f.id}
                name={f.id}
                type={f.type}
                placeholder={f.placeholder}
                autoComplete={f.autoComplete}
                required
                className="mt-1 w-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground outline-none focus:border-brand"
              />
            </div>
          ))}
          <div>
            <label
              htmlFor="genero"
              className="text-xs uppercase tracking-[0.18em] text-primary-foreground/70"
            >
              Género
            </label>
            <select
              id="genero"
              name="genero"
              required
              className="mt-1 w-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground outline-none focus:border-brand"
            >
              <option value="" disabled selected>
                Selecciona una opción
              </option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="documento"
              className="text-xs uppercase tracking-[0.18em] text-primary-foreground/70"
            >
              Documento de identificación
            </label>
            <p className="mt-1 text-xs text-primary-foreground/60">
              Registro civil, tarjeta de identidad o cédula.
            </p>
            <input
              id="documento"
              name="documento"
              type="text"
              placeholder="Número de documento"
              required
              className="mt-1 w-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground outline-none focus:border-brand"
            />
          </div>
          <button
            type="submit"
            className="inline-block w-full bg-brand px-6 py-3 text-center font-display text-base tracking-wide text-brand-foreground transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
          >
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-ink py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6 text-center">
        <a href="#inicio" aria-label="Volver al inicio">
          <img
            src={logoAsset}
            alt="Club Mantis Box Sabanalarga"
            width={56}
            height={56}
            className="h-[336px] w-[336px] object-contain"
          />
        </a>
        <p className="headline text-xl text-primary-foreground">{SITE.short}</p>
        <p className="text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {SITE.name}. Disciplina, respeto y convicción.
        </p>
      </div>
    </footer>
  );
}

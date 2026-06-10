import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

/* ── ui.jsx ── */

const Ico = {
  arrow: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrowR: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  whatsapp: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...p}>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  ),
  check: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  drag: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M8 8 4 12l4 4M16 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  brush: (p) => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M9.5 14.5 3 21M14 4l6 6M17.5 6.5 9 15M14.5 9.5 8 16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 4c1.5-1.5 4.5-1 6 .5s2 4.5.5 6" strokeLinecap="round"/>
    </svg>
  ),
  shield: (p) => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  laser: (p) => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <circle cx="12" cy="12" r="3.2"/>
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" strokeLinecap="round"/>
    </svg>
  ),
  leaf: (p) => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M20 4C10 4 4 9 4 18c0 0 0 2 0 2M20 4c0 9-5 14-13 14M20 4c-1 5-3 8-6 10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  pin: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" strokeLinejoin="round"/>
      <circle cx="12" cy="10" r="2.5"/>
    </svg>
  ),
  star: (p) => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...p}>
      <path d="M12 2l2.9 6.1 6.6.8-4.9 4.5 1.3 6.5L12 17.3 6.1 20l1.3-6.5L2.5 8.9l6.6-.8z"/>
    </svg>
  ),
  insta: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
};

function Stars({ n = 5 }) {
  return <span className="stars" aria-label={n + " estrelas"}>{Array.from({length:n}).map((_,i)=><Ico.star key={i} style={{marginRight:1}}/>)}</span>;
}

function Ph({ label, className = "", style }) {
  return <div className={"ph " + className} data-label={label} style={style} role="img" aria-label={label} />;
}

function Photo({ src, alt = "", className = "", tag, style, imgStyle }) {
  return (
    <div className={"photo " + className} style={style}>
      <img src={src} alt={alt} loading="lazy" style={imgStyle} />
      {tag && <span className="tagline">{tag}</span>}
    </div>
  );
}

const WA = "https://wa.me/556292765241?text=" + encodeURIComponent("Olá Diego! Gostaria de agendar uma avaliação de nanopigmentação.");

function Btn({ children, variant = "primary", href, withArrow, arrowType = "arrow", className = "", ...rest }) {
  const Arrow = arrowType === "wa" ? Ico.whatsapp : (arrowType === "right" ? Ico.arrowR : Ico.arrow);
  const inner = <>{children}{withArrow && <span className="ico"><Arrow /></span>}</>;
  const cls = "btn btn-" + variant + " " + className;
  return href
    ? <a className={cls} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener" {...rest}>{inner}</a>
    : <button className={cls} {...rest}>{inner}</button>;
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current ? ref.current.querySelectorAll(".reveal") : [];
    if (!("IntersectionObserver" in window)) { els.forEach(e=>e.classList.add("in")); return; }
    const io = new IntersectionObserver((ents) => {
      ents.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
  return ref;
}

function SectionHead({ eyebrow, title, lead, center, style }) {
  return (
    <div className={"sec-head" + (center ? " center" : "")} style={style}>
      {eyebrow && <span className={"eyebrow" + (center ? " center" : "")}>{eyebrow}</span>}
      <h2 className="h-section">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

/* ── sections-a.jsx ── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <a className="brand" href="#top">
        <span className="mark">Diego Vicente</span>
        <span className="sub">Nanopigmentação</span>
      </a>
      <div className="nav-links">
        <a href="#servicos">Serviços</a>
        <a href="#galeria">Resultados</a>
        <a href="#sobre">Sobre</a>
        <a href="#cuidados">Cuidados</a>
        <a href="#faq">Dúvidas</a>
      </div>
      <Btn className="nav-cta" variant="primary" href={WA} withArrow arrowType="wa">Agendar avaliação</Btn>
      <button className="nav-toggle" aria-label="Menu" onClick={() => {
        document.querySelector("#servicos").scrollIntoView();
      }}><span></span><span></span><span></span></button>
    </nav>
  );
}

const HEADLINES = {
  arte: { pre: "A arte de realçar", em: "sua beleza natural", post: "" },
  natural: { pre: "Beleza natural,", em: "feita à mão", post: "traço por traço" },
  confianca: { pre: "Realce que parece", em: "seu de verdade", post: "" },
};

function Hero({ t }) {
  const h = HEADLINES[t.headline] || HEADLINES.arte;
  const sub = "Nanopigmentação ultra-natural de lábios e sobrancelhas em Goiânia — unindo a sensibilidade artística da escola Jay.O à segurança da remoção a laser e da biossegurança.";

  const Copy = ({ overlay }) => (
    <div className="hero-copy">
      <span className="eyebrow">Goiânia · Estética premium</span>
      <h1 className="display">
        {h.pre} <span className="serif-accent" style={{ color: overlay ? "#fff" : "var(--accent-deep)" }}>{h.em}</span>{h.post ? <><br/>{h.post}</> : null}
      </h1>
      <p className="lead">{sub}</p>
      <div className="hero-actions">
        <Btn variant="primary" href={WA} withArrow arrowType="wa">Agendar avaliação</Btn>
        <Btn variant={overlay ? "outline-light" : "ghost"} href="#galeria" withArrow arrowType="right">Ver resultados</Btn>
      </div>
      <div className="hero-meta">
        <Stars n={5} />
        <span>Centenas de procedimentos · resultados naturais</span>
      </div>
    </div>
  );

  if (t.heroLayout === "centered") {
    return (
      <header className="section hero" id="top" style={{ paddingBottom: 0 }}>
        <div className="container hero-centered">
          <span className="eyebrow center">Goiânia · Estética premium</span>
          <h1 className="display">{h.pre} <span className="serif-accent" style={{ color: "var(--accent-deep)" }}>{h.em}</span>{h.post ? " " + h.post : ""}</h1>
          <p className="lead narrow">{sub}</p>
          <div className="hero-actions">
            <Btn variant="primary" href={WA} withArrow arrowType="wa">Agendar avaliação</Btn>
            <Btn variant="ghost" href="#galeria" withArrow arrowType="right">Ver resultados</Btn>
          </div>
          <div className="hero-banner photo wide hero-frame">
            <img src="/assets/sobrancelha-macro.jpg" alt="Detalhe de sobrancelha em nanopigmentação fio a fio" loading="eager" style={{ objectPosition: "center 35%" }} />
          </div>
        </div>
      </header>
    );
  }

  if (t.heroLayout === "overlay") {
    return (
      <header className="section hero" id="top" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="hero-overlay">
            <img className="ph" src="/assets/diego.jpg" alt="Diego Vicente" style={{ objectFit: "cover", objectPosition: "center 20%" }} />
            <div className="hero-overlay-scrim"></div>
            <div className="hero-overlay-copy">
              <span className="eyebrow">Goiânia · Estética premium</span>
              <h1 className="display">{h.pre} <span className="serif-accent">{h.em}</span>{h.post ? <><br/>{h.post}</> : null}</h1>
              <p className="lead">{sub}</p>
              <div className="hero-actions">
                <Btn variant="light" href={WA} withArrow arrowType="wa">Agendar avaliação</Btn>
                <Btn variant="outline-light" href="#galeria" withArrow arrowType="right">Ver resultados</Btn>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="section hero" id="top" style={{ paddingBottom: 0 }}>
      <div className="container hero-split">
        <Copy />
        <div className="hero-media">
          <div className="photo portrait hero-frame">
            <img src="/assets/diego.jpg" alt="Diego Vicente, especialista em nanopigmentação" loading="eager" style={{ objectPosition: "center 18%" }} />
          </div>
          <div className="float-card">
            <span className="dot"><span style={{ width: 18, height: 18, display: "block" }}><Ico.leaf /></span></span>
            <div>
              <div className="ttl">Resultado ultra-natural</div>
              <div className="desc">Desenho personalizado para cada rosto</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Badges() {
  const items = [
    { ico: <Ico.brush />, lab: "Artista destaque", ttl: "Escola Jay.O" },
    { ico: <Ico.shield />, lab: "Membro credenciado", ttl: "Portal da Remoção" },
    { ico: <Ico.laser />, lab: "Especialista em", ttl: "Remoção avançada" },
  ];
  return (
    <div className="section tight" style={{ paddingTop: "clamp(40px,6vw,80px)", paddingBottom: 0 }}>
      <div className="badges reveal">
        {items.map((b, i) => (
          <div className="badge" key={i}>
            <span className="bico">{b.ico}</span>
            <div>
              <div className="blab">{b.lab}</div>
              <div className="bttl">{b.ttl}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Credentials() {
  return (
    <div className="section tight" style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: 0 }}>
      <div className="container creds reveal">
        <span className="cl-label">Autoridade reconhecida por</span>
        <div className="cred-logo"><span className="cl-name serif-accent">Jay.O</span><span className="cl-sub">Artista destaque</span></div>
        <div className="cred-logo"><span className="cl-name">Portal da Remoção</span><span className="cl-sub">Membro credenciado</span></div>
        <div className="cred-logo"><span className="cl-name">Biossegurança</span><span className="cl-sub">Protocolo certificado</span></div>
      </div>
    </div>
  );
}

const SERVICES = [
  {
    key: "nano",
    tab: "Nanopigmentação Natural",
    title: "Nanopigmentação Natural",
    desc: "A técnica mais delicada para lábios e sobrancelhas: fios e pigmentos aplicados com profundidade controlada, respeitando o desenho do seu rosto. Nada de aspecto artificial — apenas a sua beleza, realçada.",
    photo: "/assets/sobrancelha-macro.jpg",
    pos: "center 40%",
    tag: "Sobrancelha fio a fio",
    items: [
      { t: "Sobrancelhas fio a fio", d: "Desenho mapeado para a sua simetria natural." },
      { t: "Lábios neutros & boca rosada", d: "Cor que devolve viço, sem contorno marcado." },
      { t: "Pigmentos de alta qualidade", d: "Tons que cicatrizam suaves e desbotam com elegância." },
    ],
  },
  {
    key: "remocao",
    tab: "Remoção a Laser e Química",
    title: "Remoção a Laser & Química",
    desc: "Procedimentos antigos, escurecidos ou mal posicionados têm correção. Como membro do Portal da Remoção, Diego conduz a remoção com segurança — preparando a pele para um novo desenho impecável.",
    photo: "/assets/sobrancelha-perfil.jpg",
    pos: "center 30%",
    tag: "Correção segura",
    items: [
      { t: "Remoção a laser", d: "Fragmentação precisa do pigmento, sessão a sessão." },
      { t: "Remoção química", d: "Indicada para casos específicos, com avaliação prévia." },
      { t: "Correção de cor e formato", d: "Reabilita trabalhos antigos antes do retoque." },
    ],
  },
  {
    key: "combinado",
    tab: "Protocolos Combinados",
    title: "Protocolos Combinados",
    desc: "O tratamento completo: clareamento e remoção do pigmento antigo seguidos de uma reconstrução natural. Da correção ao resultado final, um único profissional cuidando de toda a jornada.",
    photo: "/assets/combinado-tall.jpg",
    pos: "center 25%",
    tag: "Clareamento + reconstrução",
    items: [
      { t: "Clareamento do antigo", d: "Remoção gradual até a tela ideal para o novo trabalho." },
      { t: "Reconstrução natural", d: "Novo desenho fio a fio sobre a pele preparada." },
      { t: "Acompanhamento completo", d: "Plano de sessões e retoque incluído no protocolo." },
    ],
  },
];

function Services({ t }) {
  const [active, setActive] = useState(0);
  const s = SERVICES[active];
  return (
    <section className="section" id="servicos">
      <div className="container">
        <SectionHead
          eyebrow="Serviços integrais"
          title="Da arte ao laser, sob o mesmo cuidado"
          lead="Alterne entre os serviços e veja como cada etapa se conecta — do desenho natural à correção segura."
        />
        <div className="reveal">
          <div className="tabs-bar" role="tablist">
            {SERVICES.map((sv, i) => (
              <button key={sv.key} role="tab" aria-selected={active === i}
                className={"tab" + (active === i ? " active" : "")} onClick={() => setActive(i)}>
                <span className="tnum">0{i + 1}</span>{sv.tab}
              </button>
            ))}
          </div>
          <div className="tab-panel" key={s.key}>
            <div>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-desc lead">{s.desc}</p>
              <div className="svc-list">
                {s.items.map((it, i) => (
                  <div className="li" key={i}>
                    <span className="chk"><Ico.check /></span>
                    <div>
                      <div className="li-t">{it.t}</div>
                      <div className="li-d">{it.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="svc-cta">
                <Btn variant="primary" href={WA} withArrow arrowType="wa">Agendar este procedimento</Btn>
              </div>
            </div>
            <div className="svc-media">
              <Photo className="tall" src={s.photo} tag={s.tag} alt={s.title} imgStyle={{ objectPosition: s.pos }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── sections-b.jsx ── */
const GALLERY = {
  sobrancelhas: {
    label: "Sobrancelhas",
    after: "/assets/sobrancelha-frente.jpg", afterPos: "center 32%",
    side: [
      { src: "/assets/sobrancelha-macro.jpg", pos: "center 42%", tag: "Fio a fio" },
      { src: "/assets/sobrancelha-perfil.jpg", pos: "center 28%", tag: "Desenho natural" },
    ],
  },
  labios: {
    label: "Lábios",
    after: "/assets/labios-natural.jpg", afterPos: "center 55%",
    side: [
      { src: "/assets/labios-comparativo.jpg", pos: "center", tag: "Boca rosada" },
      { src: "/assets/combinado-tall.jpg", pos: "center 22%", tag: "Resultado completo" },
    ],
  },
  remocao: {
    label: "Remoção",
    after: null, afterPos: "center",
    side: [],
  },
};

function BeforeAfter({ data }) {
  const [pos, setPos] = useState(56);
  const ref = useRef(null);
  const dragging = useRef(false);
  const move = (clientX) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    let p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };
  return (
    <div className="ba" ref={ref}
      onPointerDown={(e) => { dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); move(e.clientX); }}
      onPointerMove={(e) => { if (dragging.current) move(e.clientX); }}
      onPointerUp={() => { dragging.current = false; }}
      onPointerCancel={() => { dragging.current = false; }}>
      <div className="ba-layer ba-after">
        {data.after
          ? <img src={data.after} alt="Resultado depois" style={{ objectPosition: data.afterPos }} />
          : <Ph className="full" label="Depois — adicione a foto" />}
      </div>
      <span className="ba-tag after-tag">Depois</span>
      <div className="ba-layer ba-before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Ph className="full" label="Antes — adicione a foto" />
      </div>
      <span className="ba-tag before-tag">Antes</span>
      <div className="ba-handle" style={{ left: pos + "%" }}>
        <div className="ba-knob"><Ico.drag /></div>
      </div>
    </div>
  );
}

function Gallery() {
  const keys = Object.keys(GALLERY);
  const [cat, setCat] = useState("sobrancelhas");
  const data = GALLERY[cat];
  return (
    <section className="section bg-alt" id="galeria">
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
          <SectionHead
            eyebrow="Antes & depois"
            title="Resultados que falam baixo"
            lead="Arraste a linha para comparar. Filtre por tipo de procedimento e veja a naturalidade de perto."
          />
        </div>
        <div className="filter-row reveal" role="tablist">
          {keys.map((k) => (
            <button key={k} className={"filter-chip" + (cat === k ? " active" : "")} onClick={() => setCat(k)}>
              {GALLERY[k].label}
            </button>
          ))}
        </div>
        <div className="ba-wrap reveal" key={cat}>
          <div className="ba-feature">
            <BeforeAfter data={data} />
            <div className="side-stack">
              {data.side.length ? data.side.map((s, i) => (
                <Photo key={i} className="full" src={s.src} tag={s.tag} imgStyle={{ objectPosition: s.pos }} />
              )) : (
                <>
                  <Ph className="full" label="Caso de remoção — em breve" />
                  <Ph className="full" label="Caso de remoção — em breve" />
                </>
              )}
            </div>
          </div>
          <div className="ba-cap">
            <span>← Arraste para comparar antes e depois</span>
            <span>{data.label} · cicatrização natural</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="sobre">
      <div className="container about-grid">
        <div className="about-media">
          <Photo className="ph-back square" src="/assets/diego.jpg" imgStyle={{ objectPosition: "center 15%" }} />
          <Photo className="ph-main tall" src="/assets/sobrancelha-macro.jpg" tag="Precisão fio a fio" imgStyle={{ objectPosition: "center 45%" }} />
        </div>
        <div className="about-copy">
          <span className="eyebrow">Sobre Diego</span>
          <h2 className="h-section" style={{ marginTop: 18 }}>Onde a arte encontra a ciência da pele</h2>
          <p className="lead" style={{ marginTop: 24 }}>
            Diego Vicente construiu sua trajetória sobre uma obsessão: que ninguém perceba que houve um procedimento — apenas que você está mais bonita. Formado como artista destaque da escola <strong>Jay.O</strong>, ele leva ao traço a sensibilidade do desenho natural.
          </p>
          <p>
            Como membro credenciado do <strong>Portal da Remoção</strong>, soma a essa arte o rigor técnico da remoção a laser e química — corrigindo com segurança trabalhos antigos antes de reconstruir. É a união entre o olhar estético e a biossegurança que dá tranquilidade a quem tem medo de resultados artificiais.
          </p>
          <div className="about-stats">
            <div className="st"><div className="n">100%</div><div className="l">Foco em resultado natural</div></div>
            <div className="st"><div className="n">2</div><div className="l">Credenciais de autoridade</div></div>
            <div className="st"><div className="n">Goiânia</div><div className="l">Atendimento presencial</div></div>
          </div>
          <div className="sign">Diego Vicente</div>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { t: "Primeiras 48h", d: "Mantenha a região seca e limpa. Higienize suavemente com o produto indicado." },
  { t: "Hidratação", d: "Aplique a pomada cicatrizante em fina camada, conforme orientação personalizada." },
  { t: "Cicatrização", d: "Evite sol direto, piscina e suor intenso. A casquinha sai sozinha — não retire." },
  { t: "Retoque", d: "A sessão de aperfeiçoamento garante a cor e o desenho no ponto ideal." },
];

function Aftercare() {
  return (
    <section className="section bg-alt" id="cuidados">
      <div className="container">
        <SectionHead center
          eyebrow="Cuidados pós-procedimento"
          title="O resultado natural começa no cuidado"
          lead="Um protocolo simples de acompanhamento garante uma cicatrização tranquila e a cor perfeita."
        />
        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step reveal" key={i} style={{ transitionDelay: i * 80 + "ms" }}>
              <div className="snum">0{i + 1}</div>
              <div className="st-t">{s.t}</div>
              <div className="st-d">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TSTS = [
  { q: "Ficou tão natural que ninguém acreditou que eu tinha feito. Exatamente o que eu sonhava.", n: "Marina A.", m: "Sobrancelhas fio a fio" },
  { q: "Eu tinha pavor de ficar com a boca marcada. O Diego me deu o tom mais delicado e lindo.", n: "Letícia R.", m: "Lábios neutros" },
  { q: "Corrigiu uma micro antiga que me incomodava há anos. Profissionalismo e segurança do início ao fim.", n: "Carolina M.", m: "Remoção + reconstrução" },
];

function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead center eyebrow="Quem confia" title="Histórias de quem se sentiu em casa" />
        <div className="tst-grid">
          {TSTS.map((t, i) => (
            <div className="tst reveal" key={i} style={{ transitionDelay: i * 90 + "ms" }}>
              <Stars n={5} />
              <p className="quote">"{t.q}"</p>
              <div className="who">
                <span className="av">{t.n.charAt(0)}</span>
                <div>
                  <div className="nm">{t.n}</div>
                  <div className="mt">{t.m}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "O procedimento dói?", a: "Trabalhamos com anestésicos tópicos de alta performance que tornam a sessão muito confortável. A maioria dos clientes relata apenas uma leve sensação — nada que exija coragem extra." },
  { q: "Quantas sessões de remoção a laser são necessárias?", a: "Depende da densidade e do tipo de pigmento. Na avaliação, Diego estima o número de sessões e o intervalo ideal entre elas para uma remoção segura e gradual." },
  { q: "Como é a cicatrização?", a: "Nos primeiros dias a cor parece mais intensa e pode formar uma casquinha fininha que sai sozinha. Em 7 a 14 dias o tom assenta no resultado natural. Você recebe todas as orientações de cuidado." },
  { q: "Quanto tempo dura o resultado?", a: "Em média de 1 a 2 anos, variando conforme o tipo de pele, exposição solar e cuidados. Um retoque periódico mantém o desenho e a cor sempre no ponto." },
  { q: "Posso corrigir um procedimento antigo?", a: "Sim. Essa é uma das especialidades de Diego: por meio de remoção a laser ou química, preparamos a pele e reconstruímos um desenho natural por cima." },
];

function FAQItem({ item, open, onClick }) {
  const ref = useRef(null);
  return (
    <div className={"faq-item" + (open ? " open" : "")}>
      <button className="faq-q" onClick={onClick} aria-expanded={open}>
        {item.q}<span className="faq-ico"></span>
      </button>
      <div className="faq-a" style={{ maxHeight: open && ref.current ? ref.current.scrollHeight + "px" : 0 }}>
        <div className="faq-a-in" ref={ref}>{item.a}</div>
      </div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section bg-alt" id="faq">
      <div className="container faq-grid">
        <SectionHead eyebrow="Dúvidas frequentes" title="Tudo o que você precisa saber" lead="E se ficar qualquer dúvida, é só chamar no WhatsApp — Diego responde pessoalmente." />
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <FAQItem key={i} item={f} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

const MAPS = "https://maps.app.goo.gl/LCbMoeqg8pDUeoKL8";

function Footer() {
  return (
    <footer className="footer">
      <div className="section" style={{ paddingBottom: 0 }}>
        <div className="container footer-cta">
          <div>
            <span className="eyebrow" style={{ color: "#fff" }}>Vamos começar</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>Sua beleza natural a um agendamento de distância</h2>
            <p className="lead" style={{ marginTop: 18 }}>Agende uma avaliação e desenhe junto com Diego o resultado que sempre quis — com a segurança de quem domina a arte e a técnica.</p>
            <div className="hero-actions">
              <Btn variant="light" href={WA} withArrow arrowType="wa">Agendar avaliação</Btn>
              <Btn variant="outline-light" href={MAPS} withArrow arrowType="right">Ver no mapa</Btn>
            </div>
          </div>
          <div className="map-card">
            <iframe
              className="map-frame"
              title="Localização — ORGANIQ BEAUTÉ, Goiânia"
              src="https://maps.google.com/maps?q=-16.6961132,-49.2567584&z=16&hl=pt-BR&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <div className="section" style={{ paddingTop: "clamp(40px,5vw,64px)", paddingBottom: "clamp(40px,5vw,64px)" }}>
        <div className="container footer-bottom">
          <div className="footer-brand" style={{ maxWidth: 280 }}>
            <div className="mark">Diego Vicente</div>
            <div className="sub">Beleza natural</div>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", marginTop: 14 }}>Arte natural, técnica e biossegurança em cada detalhe.</p>
          </div>
          <div className="footer-col">
            <div className="fc-t">Navegação</div>
            <a href="#servicos">Serviços</a>
            <a href="#galeria">Resultados</a>
            <a href="#sobre">Sobre</a>
            <a href="#faq">Dúvidas</a>
          </div>
          <div className="footer-col">
            <div className="fc-t">Contato</div>
            <a href={WA} target="_blank" rel="noopener">WhatsApp · (62) 9276-5241</a>
            <a href="https://www.instagram.com/diegovicentte/" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><Ico.insta />Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-legal">© {new Date().getFullYear()} Diego Vicente · Beleza natural. Todos os direitos reservados.</div>
      <div className="footer-credit">
        <span>Desenvolvido por</span>
        <a href="https://wa.me/5595991742756?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento." target="_blank" rel="noopener">
          <img src="/assets/logo_rg.svg" alt="R. Goulart Design LTDA" />
          R. Goulart Design LTDA
        </a>
      </div>
    </footer>
  );
}

/* ── app.jsx ── */
const PALETTES = {
  salvia:  { accent: "#5E6B54", accentDeep: "#414B39", accentSoft: "#E5E8DE", bgAlt: "#F1F1EA" },
  nude:    { accent: "#A98A72", accentDeep: "#7C6048", accentSoft: "#EFE5DB", bgAlt: "#F5EFE8" },
  terroso: { accent: "#A0703F", accentDeep: "#75502C", accentSoft: "#EEDFCF", bgAlt: "#F4ECE1" },
};
const FONTS = {
  cormorant: "'Cormorant Garamond', Georgia, serif",
  playfair: "'Playfair Display', Georgia, serif",
};
const CTA_CLASS = {
  pill: "cta-pill",
  outline: "cta-outline",
  square: "cta-square",
  block: "cta-block",
};

const TWEAK_DEFAULTS = {
  palette: "salvia",
  headingFont: "cormorant",
  heroLayout: "split",
  headline: "arte",
  ctaStyle: "pill",
};

function App() {
  const [t, setT] = useState(TWEAK_DEFAULTS);
  const setTweak = (k, v) => setT(prev => ({ ...prev, [k]: v }));
  const reveal = useReveal();
  const pal = PALETTES[t.palette] || PALETTES.salvia;

  const rootStyle = {
    "--accent": pal.accent,
    "--accent-deep": pal.accentDeep,
    "--accent-soft": pal.accentSoft,
    "--bg-alt": pal.bgAlt,
    "--font-display": FONTS[t.headingFont] || FONTS.cormorant,
  };

  useEffect(() => {
    document.body.style.background = "var(--bg)";
  }, []);

  return (
    <div className={"app " + (CTA_CLASS[t.ctaStyle] || "cta-pill")} style={rootStyle} ref={reveal}>
      <Nav />
      <Hero t={t} />
      <Badges />
      <Credentials />
      <Services t={t} />
      <Gallery />
      <About />
      <Aftercare />
      <Testimonials />
      <FAQ />
      <Footer />
      <a className="wa-float" href={WA} target="_blank" rel="noopener" aria-label="WhatsApp">
        <Ico.whatsapp />
      </a>
    </div>
  );
}

export default App;

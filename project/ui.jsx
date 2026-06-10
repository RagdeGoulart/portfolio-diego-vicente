/* ui.jsx — átomos compartilhados: ícones, placeholder, botão, reveal */
const { useState, useEffect, useRef } = React;

/* ---- Ícones (simples, traço fino) ---- */
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

/* ---- Placeholder de imagem ---- */
function Ph({ label, className = "", style }) {
  return <div className={"ph " + className} data-label={label} style={style} role="img" aria-label={label} />;
}

/* ---- Foto real ---- */
function Photo({ src, alt = "", className = "", tag, style, imgStyle }) {
  return (
    <div className={"photo " + className} style={style}>
      <img src={src} alt={alt} loading="lazy" style={imgStyle} />
      {tag && <span className="tagline">{tag}</span>}
    </div>
  );
}

/* ---- Botão ---- */
const WA = "https://wa.me/556292765241?text=" + encodeURIComponent("Olá Diego! Gostaria de agendar uma avaliação de nanopigmentação.");

function Btn({ children, variant = "primary", href, withArrow, arrowType = "arrow", className = "", ...rest }) {
  const Arrow = arrowType === "wa" ? Ico.whatsapp : (arrowType === "right" ? Ico.arrowR : Ico.arrow);
  const inner = <>{children}{withArrow && <span className="ico"><Arrow /></span>}</>;
  const cls = "btn btn-" + variant + " " + className;
  return href
    ? <a className={cls} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener" {...rest}>{inner}</a>
    : <button className={cls} {...rest}>{inner}</button>;
}

/* ---- Reveal on scroll ---- */
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

Object.assign(window, { Ico, Stars, Ph, Photo, Btn, useReveal, SectionHead, WA });

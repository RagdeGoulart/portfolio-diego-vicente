/* sections-a.jsx — Nav, Hero, Badges, Credenciais, Serviços */
const { useState: useStateA, useEffect: useEffectA } = React;

/* ---------------- NAV ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useStateA(false);
  useEffectA(() => {
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

/* ---------------- HERO ---------------- */
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
            <img src="assets/sobrancelha-macro.jpg" alt="Detalhe de sobrancelha em nanopigmentação fio a fio" loading="eager" style={{ objectPosition: "center 35%" }} />
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
            <img className="ph" src="assets/diego.jpg" alt="Diego Vicente" style={{ objectFit: "cover", objectPosition: "center 20%" }} />
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

  // split (default)
  return (
    <header className="section hero" id="top" style={{ paddingBottom: 0 }}>
      <div className="container hero-split">
        <Copy />
        <div className="hero-media">
          <div className="photo portrait hero-frame">
            <img src="assets/diego.jpg" alt="Diego Vicente, especialista em nanopigmentação" loading="eager" style={{ objectPosition: "center 18%" }} />
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

/* ---------------- BADGES ---------------- */
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

/* ---------------- CREDENCIAIS ---------------- */
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

/* ---------------- SERVIÇOS (TABS) ---------------- */
const SERVICES = [
  {
    key: "nano",
    tab: "Nanopigmentação Natural",
    title: "Nanopigmentação Natural",
    desc: "A técnica mais delicada para lábios e sobrancelhas: fios e pigmentos aplicados com profundidade controlada, respeitando o desenho do seu rosto. Nada de aspecto artificial — apenas a sua beleza, realçada.",
    photo: "assets/sobrancelha-macro.jpg",
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
    photo: "assets/sobrancelha-perfil.jpg",
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
    photo: "assets/combinado-tall.jpg",
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
  const [active, setActive] = useStateA(0);
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

Object.assign(window, { Nav, Hero, Badges, Credentials, Services });

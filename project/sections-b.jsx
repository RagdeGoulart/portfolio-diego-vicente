/* sections-b.jsx — Galeria (antes/depois), Sobre, Cuidados, Depoimentos, FAQ, Footer */
const { useState: useStateB, useRef: useRefB, useEffect: useEffectB } = React;

/* ---------------- GALERIA ANTES/DEPOIS ---------------- */
const GALLERY = {
  sobrancelhas: {
    label: "Sobrancelhas",
    after: "assets/sobrancelha-frente.jpg", afterPos: "center 32%",
    side: [
      { src: "assets/sobrancelha-macro.jpg", pos: "center 42%", tag: "Fio a fio" },
      { src: "assets/sobrancelha-perfil.jpg", pos: "center 28%", tag: "Desenho natural" },
    ],
  },
  labios: {
    label: "Lábios",
    after: "assets/labios-natural.jpg", afterPos: "center 55%",
    side: [
      { src: "assets/labios-comparativo.jpg", pos: "center", tag: "Boca rosada" },
      { src: "assets/combinado-tall.jpg", pos: "center 22%", tag: "Resultado completo" },
    ],
  },
  remocao: {
    label: "Remoção",
    after: null, afterPos: "center",
    side: [],
  },
};

function BeforeAfter({ data }) {
  const [pos, setPos] = useStateB(56);
  const ref = useRefB(null);
  const dragging = useRefB(false);
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
  const [cat, setCat] = useStateB("sobrancelhas");
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

/* ---------------- SOBRE ---------------- */
function About() {
  return (
    <section className="section" id="sobre">
      <div className="container about-grid">
        <div className="about-media">
          <Photo className="ph-back square" src="assets/diego.jpg" imgStyle={{ objectPosition: "center 15%" }} />
          <Photo className="ph-main tall" src="assets/sobrancelha-macro.jpg" tag="Precisão fio a fio" imgStyle={{ objectPosition: "center 45%" }} />
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

/* ---------------- CUIDADOS PÓS ---------------- */
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

/* ---------------- DEPOIMENTOS ---------------- */
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
              <p className="quote">“{t.q}”</p>
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

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: "O procedimento dói?", a: "Trabalhamos com anestésicos tópicos de alta performance que tornam a sessão muito confortável. A maioria dos clientes relata apenas uma leve sensação — nada que exija coragem extra." },
  { q: "Quantas sessões de remoção a laser são necessárias?", a: "Depende da densidade e do tipo de pigmento. Na avaliação, Diego estima o número de sessões e o intervalo ideal entre elas para uma remoção segura e gradual." },
  { q: "Como é a cicatrização?", a: "Nos primeiros dias a cor parece mais intensa e pode formar uma casquinha fininha que sai sozinha. Em 7 a 14 dias o tom assenta no resultado natural. Você recebe todas as orientações de cuidado." },
  { q: "Quanto tempo dura o resultado?", a: "Em média de 1 a 2 anos, variando conforme o tipo de pele, exposição solar e cuidados. Um retoque periódico mantém o desenho e a cor sempre no ponto." },
  { q: "Posso corrigir um procedimento antigo?", a: "Sim. Essa é uma das especialidades de Diego: por meio de remoção a laser ou química, preparamos a pele e reconstruímos um desenho natural por cima." },
];
function FAQItem({ item, open, onClick }) {
  const ref = useRefB(null);
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
  const [open, setOpen] = useStateB(0);
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

/* ---------------- FOOTER ---------------- */
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
          <a className="map-card" href={MAPS} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
            <Ph className="" label="Mapa — Goiânia · clique para abrir" />
          </a>
        </div>
      </div>
      <div className="section" style={{ paddingTop: "clamp(40px,5vw,64px)", paddingBottom: "clamp(40px,5vw,64px)" }}>
        <div className="container footer-bottom">
          <div className="footer-brand" style={{ maxWidth: 280 }}>
            <div className="mark">Diego Vicente</div>
            <div className="sub">Nanopigmentação · Goiânia</div>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", marginTop: 14 }}>Arte natural, ciência e biossegurança em cada detalhe.</p>
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
            <a href={MAPS} target="_blank" rel="noopener">Goiânia · Ver no Google Maps</a>
            <a href="https://instagram.com" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><Ico.insta />Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-legal">© {new Date().getFullYear()} Diego Vicente · Nanopigmentação · Goiânia. Todos os direitos reservados.</div>
    </footer>
  );
}

Object.assign(window, { Gallery, About, Aftercare, Testimonials, FAQ, Footer });

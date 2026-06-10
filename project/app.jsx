/* app.jsx — composição + Tweaks */
const { useEffect: useEffectApp } = React;

const PALETTES = {
  salvia:  { accent: "#5E6B54", accentDeep: "#414B39", accentSoft: "#E5E8DE", bgAlt: "#F1F1EA", label: "Sálvia" },
  nude:    { accent: "#A98A72", accentDeep: "#7C6048", accentSoft: "#EFE5DB", bgAlt: "#F5EFE8", label: "Nude" },
  terroso: { accent: "#A0703F", accentDeep: "#75502C", accentSoft: "#EEDFCF", bgAlt: "#F4ECE1", label: "Terroso" },
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

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "salvia",
  "headingFont": "cormorant",
  "heroLayout": "split",
  "headline": "arte",
  "ctaStyle": "pill"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const reveal = useReveal();
  const pal = PALETTES[t.palette] || PALETTES.salvia;

  const rootStyle = {
    "--accent": pal.accent,
    "--accent-deep": pal.accentDeep,
    "--accent-soft": pal.accentSoft,
    "--bg-alt": pal.bgAlt,
    "--font-display": FONTS[t.headingFont] || FONTS.cormorant,
  };

  useEffectApp(() => {
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

      <TweaksPanel>
        <TweakSection label="Paleta de cores" />
        <TweakRadio label="Tom de acento" value={t.palette}
          options={[{ value: "salvia", label: "Sálvia" }, { value: "nude", label: "Nude" }, { value: "terroso", label: "Terroso" }]}
          onChange={(v) => setTweak("palette", v)} />

        <TweakSection label="Tipografia" />
        <TweakRadio label="Fonte dos títulos" value={t.headingFont}
          options={[{ value: "cormorant", label: "Cormorant" }, { value: "playfair", label: "Playfair" }]}
          onChange={(v) => setTweak("headingFont", v)} />

        <TweakSection label="Hero" />
        <TweakSelect label="Layout" value={t.heroLayout}
          options={[{ value: "split", label: "Duas colunas" }, { value: "overlay", label: "Imagem cheia" }, { value: "centered", label: "Centralizado" }]}
          onChange={(v) => setTweak("heroLayout", v)} />
        <TweakSelect label="Headline" value={t.headline}
          options={[{ value: "arte", label: "A arte de realçar…" }, { value: "natural", label: "Beleza natural, à mão" }, { value: "confianca", label: "Parece seu de verdade" }]}
          onChange={(v) => setTweak("headline", v)} />

        <TweakSection label="Botões (CTA)" />
        <TweakSelect label="Estilo" value={t.ctaStyle}
          options={[{ value: "pill", label: "Pílula" }, { value: "outline", label: "Contorno" }, { value: "square", label: "Reto" }, { value: "block", label: "Bloco escuro" }]}
          onChange={(v) => setTweak("ctaStyle", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

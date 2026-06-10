# Portfólio — Diego Vicente

Landing page de página única (one-page) do **Diego Vicente** — Nanopigmentação Natural, em Goiânia.
Estilo editorial/luxo, mobile-first, com hero, abas de serviços, galeria antes/depois,
depoimentos, FAQ e CTA de WhatsApp.

Construído com **React 18** + **Vite**.

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior (testado com Node 24)

## Como rodar (desenvolvimento)

```bash
npm install      # só na primeira vez (instala as dependências)
npm run dev      # inicia o servidor local
```

Depois abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).
A página recarrega sozinha a cada alteração no código.

## Gerar a versão de produção

```bash
npm run build    # gera a pasta dist/ otimizada e minificada
npm run preview  # visualiza localmente o build de produção
```

A pasta **`dist/`** é o que vai para o ar. É só publicá-la em qualquer hospedagem
estática — [Vercel](https://vercel.com), [Netlify](https://netlify.com) ou
GitHub Pages, por exemplo. Em Vercel/Netlify, basta conectar o repositório:
o comando de build é `npm run build` e a pasta de saída é `dist`.

## Estrutura do projeto

```
.
├── index.html          # HTML base (carrega as fontes e monta o app)
├── src/
│   ├── main.jsx        # ponto de entrada (monta o React)
│   ├── App.jsx         # todos os componentes da página
│   └── styles.css      # design system e estilos
├── public/
│   └── assets/         # imagens usadas no site (servidas em /assets/...)
├── vite.config.js      # configuração do Vite
└── package.json        # dependências e scripts
```

## Onde editar coisas comuns

- **Textos, seções e estrutura:** `src/App.jsx`
- **Cores, fontes e espaçamentos:** variáveis no topo de `src/styles.css` (`:root { ... }`)
- **Imagens:** adicione/troque arquivos em `public/assets/` e referencie como `/assets/nome.jpg`
- **Título e descrição (SEO) e fontes do Google:** `index.html`
- **Número de WhatsApp:** procure por `WA` em `src/App.jsx`

## Material de design (referência)

As pastas `project/` e `chats/` contêm os arquivos originais do design
(protótipo do Claude Design e o histórico da conversa). Não fazem parte do
site publicado — servem apenas como referência. Podem ser removidas sem afetar o build.

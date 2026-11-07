# Site de Clínica Dermatológica — Projeto de Estudo

Projeto desenvolvido **exclusivamente como estudo** de desenvolvimento front-end. O site foi inspirado em uma clínica real, e foram usados apenas nomes e dados que já são públicos no próprio site da clínica.

> ⚠️ **Aviso:** este projeto é **educativo, sem fins lucrativos e sem qualquer vínculo** com a clínica. Não é o site oficial, não representa a clínica e não deve ser usado como tal. Não há divulgação, venda ou qualquer finalidade comercial. Se você faz parte da clínica e deseja que algum conteúdo seja alterado ou removido, entre em contato e eu atendo prontamente.

A base do projeto foi gerada com o [Lovable](https://lovable.dev) (template TanStack Start) e usada para estudar a estrutura de uma aplicação React moderna.

---

## 🛠️ Tecnologias Usadas

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TanStack](https://img.shields.io/badge/TanStack_Start-000000?style=for-the-badge&logo=reactquery&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white) ![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radixui&logoColor=white) ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white) ![Zod](https://img.shields.io/badge/Zod-408AFF?style=for-the-badge&logo=zod&logoColor=white) ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black) ![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)

---

## ✨ Features Principais

- 🔎 **SEO (Search Engine Optimization)**: meta tags por página e `sitemap.xml` gerado automaticamente
- 💬 **AEO (Answer Engine Optimization)**: conteúdo estruturado para que buscadores e assistentes encontrem respostas diretas
  - Página de **FAQ** (`/faq`) com 12 perguntas escritas do jeito que o paciente pesquisa (ex.: *"Do you accept my insurance?"*), cada uma como `<h2>` com a resposta logo abaixo
  - **Respostas curtas e diretas**, de cerca de 110 a 150 caracteres (nenhuma passa de 160), no formato de resposta rápida que buscadores e assistentes costumam exibir ou citar
  - **Descrições objetivas** também nas especialidades, escritas em uma ou duas frases
  - **Hierarquia de títulos** organizada (`<h1>` → `<h2>` → `<h3>`), exemplo: FAQ, um `<h1>` para o tema da página e um `<h2>` para cada pergunta
  - **Title e meta description** únicos em cada página
- 🤖 **GEO (Generative Engine Optimization)**: preparação para ser lido e citado por buscadores com IA
  - **`robots.txt`** liberando o rastreamento (`Allow: /`) para Googlebot, Bingbot, Twitterbot, facebookexternalhit e qualquer outro robô (`*`)
  - Tudo junto ajuda nessa parte: `robots.txt` + `sitemap.xml` + páginas renderizadas no servidor (SSR) + FAQ em perguntas e respostas + títulos hierárquicos + meta descriptions claras facilitam a leitura e a citação do conteúdo
- 📱 **Site responsivo**, apesar de apenas landing page (componentes reutilizáveis com shadcn/ui + Radix UI)

---
## ✨ Features Futuras (melhoria no SEO)
- 🤳 **Botão CTA fixo** para mobiles 
- 📷 **Imagem de Compatilhamento** 

---

## 🚀 Como usar

### Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (versão **LTS** mais recente; recomendado 20.19 ou superior), que já inclui o `npm`

### Passo a passo

**1. Clone o repositório**

```bash
git clone https://github.com/UmArthur/Clinica_teste.git
```

**2. Entre na pasta do projeto**

```bash
cd Clinica_teste
```

**3. Instale as dependências** (só precisa na primeira vez)

```bash
npm install
```

**4. Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

**5. Abra no navegador**

Acesse 👉 **http://localhost:8080**

> Se a porta 8080 estiver ocupada ou o terminal mostrar outro endereço, use o que aparecer na tela, no campo `Local`.

### 💡 Atalho

Para o navegador abrir sozinho ao iniciar:

```bash
npm run dev -- --open
```

Se você usa o [Bun](https://bun.sh/), também funciona:

```bash
bun install
bun run dev
```

---

## 📜 Scripts disponíveis

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run preview` | Visualiza localmente a versão de produção |
| `npm test` | Roda os testes com Vitest |
| `npm run lint` | Verifica o código com ESLint |
| `npm run format` | Formata o código com Prettier |

---

## 📁 Estrutura

```
src/
├── assets/       # imagens
├── components/   # componentes reutilizáveis (inclui ui/ do shadcn)
├── hooks/        # hooks customizados
├── lib/          # utilitários e dados auxiliares
├── routes/       # páginas do site (roteamento por arquivos)
└── test/         # testes
```

---

## 👨‍💻 Autor

Feito por **Arthur** com o apoio de **IAs**. 

[![GitHub](https://img.shields.io/badge/GitHub-UmArthur-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/UmArthur)
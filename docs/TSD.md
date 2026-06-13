# Technical Specification Document (TSD)

## 1. System Architecture

**Project Name:** Melodytechlab
**Architecture Type:** Jamstack / Server-Side Rendered (SSR) Web Application.

The application is built using a modern React framework (Next.js) optimized for both static generation and dynamic server rendering, ensuring high performance and SEO visibility.

## 2. Technology Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router architecture)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) for type safety and improved developer experience.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first, responsive design. Features custom theming with CSS variables (defined in `globals.css`) for consistent branding.
*   **Fonts:** `next/font/google` using the Vercel **Geist** font family (Sans and Mono).
*   **Backend / Database:** [Supabase](https://supabase.com/) integration (indicated by `supabase/` directory) for database, authentication, or backend logic.
*   **Package Manager:** `npm` (with `bun` lockfile present, indicating mixed usage or migration).
*   **Linting & Formatting:** ESLint (`eslint.config.mjs`).
*   **Deployment:** Vercel (target platform).

## 3. Directory Structure

```text
melodytechlab/
├── docs/                 # Documentation (PRD, TSD, Usecases)
├── public/               # Static assets (images, icons)
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   │   ├── about/        # About page route
│   │   ├── articles/     # Articles/Blog route
│   │   ├── portfolio/    # Portfolio route
│   │   ├── super/        # Administrative or specialized route
│   │   ├── globals.css   # Global styles and Tailwind configuration
│   │   ├── layout.tsx    # Root layout component
│   │   └── page.tsx      # Home page component
│   ├── components/       # Reusable UI components
│   ├── config/           # Application configuration (e.g., site.json)
│   ├── lib/              # Utility functions and shared logic
│   ├── mcp/              # Model Context Protocol related files (experimental)
│   └── middleware.ts     # Next.js middleware (e.g., routing, auth logic)
├── supabase/             # Supabase configuration and migrations
├── .env                  # Environment variables
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies and scripts
└── tailwind.config.*     # Tailwind configuration (integrated via V4/globals)
```

## 4. Key Technical Decisions

### 4.1. Next.js App Router
Utilizing the modern App Router (`src/app/`) for optimized data fetching, nested layouts, and better support for React Server Components (RSC). This reduces the client-side JavaScript bundle size.

### 4.2. Styling Approach
Tailwind CSS is used alongside native CSS variables in `globals.css` for theming. The background utilizes complex CSS features (radial gradients, SVG noise filters, masks) to achieve a modern, atmospheric look without heavy JavaScript or WebGL dependencies.

### 4.3. Supabase Integration
Supabase is chosen as the backend-as-a-service (BaaS) providing PostgreSQL database capabilities, likely used for managing portfolio items, articles, or handling contact form submissions.

### 4.4. Configuration Management
Centralized site configuration is stored in `src/config/site.json` to manage metadata, navigation links, and SEO details dynamically across the application.

## 5. Security & Performance

*   **Security:** Environment variables (`.env`) are used to securely manage API keys and Supabase credentials. Next.js middleware is implemented (likely for route protection or redirect handling).
*   **Performance:** 
    *   Image optimization via `next/image` (assumed standard practice).
    *   Font optimization via `next/font` to prevent layout shifts.
    *   Heavy use of Server Components to minimize client-side load.

## 6. Deployment Workflow

1.  Code is pushed to the `main` branch on GitHub.
2.  Vercel automatically triggers a build process.
3.  Vercel runs linting (`next lint`) and builds the application (`next build`).
4.  If successful, the new version is deployed to the production domain.

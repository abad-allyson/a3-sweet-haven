# Sweet Haven 🍰

**Live Site:** https://a3-sweet-haven.vercel.app/

A modern bakery website built with Nuxt 3, featuring an admin dashboard for content management.

## Tech Stack

| Category               | Technology                                |
| ---------------------- | ----------------------------------------- |
| **Framework**          | [Nuxt 3](https://nuxt.com/) (v4.2.0)      |
| **UI Library**         | [@nuxt/ui](https://ui.nuxt.dev/) (v4.1.0) |
| **Database**           | [Supabase](https://supabase.com/)         |
| **Icons**              | Heroicons, Lucide                         |
| **Validation**         | [Zod](https://zod.dev/)                   |
| **Image Optimization** | [@nuxt/image](https://image.nuxtjs.org/)  |

## Project Structure

```
a3-sweet-haven/
├── app/
│   ├── assets/css/       # Global styles
│   ├── middleware/       # Route middleware (auth)
│   ├── pages/            # Application pages
│   │   ├── admin/        # Admin dashboard & login
│   │   └── index.vue     # Home page
│   ├── types/            # TypeScript definitions
│   ├── app.config.ts     # App configuration
│   └── app.vue           # Root component
├── public/
│   ├── gallery/         # Gallery images
│   └── robots.txt       # SEO config
├── nuxt.config.ts        # Nuxt configuration
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript config
```

## Modules Used

- **`@nuxt/ui`** — UI component library with Tailwind CSS
- **`@nuxtjs/supabase`** — Supabase integration for backend
- **`@nuxt/image`** — Image optimization and CDN
- **`@iconify-json/lucide`** — Icon set for UI elements
- **`@heroicons/react`** — Heroicons React components
- **`@internationalized/date`** — Internationalized date handling
- **`zod`** — Schema validation for forms

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn or npm

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Generate static site
yarn generate
```

## Environment Variables

Create a `.env` file with your Supabase credentials:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
```

## Pages

| Route          | Description                 |
| -------------- | --------------------------- |
| `/`            | Home page                   |
| `/admin`       | Admin dashboard (protected) |
| `/admin/login` | Admin login page            |

## License

MIT

# yarn

yarn build

# bun

bun run build

````

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
````

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

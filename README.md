# Application Architecture Documentation

## Overview
This application is built using Next.js 14 with a focus on React Server Components (RSC) and client components for optimal performance and user experience.

## Architecture Design

### Component Structure
```
app/
├── components/
│   ├── dashboard/    # Dashboard specific components
│   ├── form/         # Form specific components
│   ├── shared/       # Reusable shared components
│   └── home/         # Home page components
├── data/            # Data layer
└── dashboard/       # Dashboard pages
```

### Server vs Client Components

#### Server Components
- **LeadsTable**: Server component that fetches and displays lead data
  - Benefits: Reduced client-side JavaScript
  - Direct database access without API endpoints
  - Better initial page load performance

#### Client Components
- **Search**: Client-side component for real-time search functionality
  - Uses `useDebouncedCallback` for performance optimization
  - Manages URL parameters for search queries
- **Pagination**: Client-side component for data navigation
  - Updates URL parameters for page navigation
  - Maintains state between page refreshes

### Data Management
- Located in `app/data/`
- Structured mock data for development
- Clear separation between:
  - Data definitions (`data-definition.ts`)
  - Mock data (`leads-mock-data.ts`)
  - Query logic (`leads-queries.ts`)
  - User administration (`user-admin-mock.ts`)

### Key Design Decisions

1. **Server-Side Rendering Strategy**
   - Use of `<Suspense>` for async data loading
   - Server components for data-heavy operations
   - Client components only where interactivity is needed

2. **URL-Based State Management**
   - Search parameters stored in URL
   - Enables sharing and bookmarking of filtered views
   - Maintains state during page refreshes

3. **Performance Optimizations**
   - Debounced search queries
   - Lazy loading through Suspense
   - Selective hydration of client components

## Routes
- `/` - Home page
- `/dashboard/leads` - Leads management
- `/dashboard/settings` - Application settings
- `/form` - Immigration form

## Getting Started

1. Install dependencies:
```bash
pnpm i
```

2. Run the development server:
```bash
pnpm dev
```

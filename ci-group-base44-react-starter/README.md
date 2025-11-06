# CI Group - Base44 React (Vite)

## Prérequis
- Node.js 18+
- npm 9+

## Installation
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Notes
- Les composants `@/components/ui/*` sont des équivalents *simples* pour que le projet compile sans shadcn.
- Le client `@/api/base44Client` est un *stub* (fausse API) : remplacez-le par votre vrai client Base44 si vous en avez un.
- Les routes sont déclarées dans `src/App.tsx` et `@/utils#createPageUrl`.

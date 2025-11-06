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
# CI Group - Base44 React (Vite)

## Prérequis
- Node.js 18+
- npm 9+

## Installation
```bash
npm install
npm run dev
---

# 🧩 Fonctionnalités ajoutées

Ce projet a été enrichi pour gérer les **demandes de contact** et les **envoyer vers Base44.com** via une API Vercel.

- 📬 Formulaire React en français
- 🔐 Clé API sécurisée via Vercel
- 🚀 Déploiement frontend + API avec Vercel

---

## 📁 Structure du projet
/
├── src/ # Code React
├── api/ # Fonction API serverless Vercel
│ └── contact.js # Envoie les données à Base44
├── .vercel/project.json # Configuration framework Vite
├── package.json
└── README.md


---

## 🔗 API de contact : `/api/contact`

Méthode : `POST`  
Exemple de payload :

```json
{
  "nom": "Camille",
  "email": "camille@exemple.com",
  "message": "Je suis intéressé(e) par une consultation"
}{
  "success": true,
  "message": "Demande envoyée avec succès.",
  "result": { ... }
}


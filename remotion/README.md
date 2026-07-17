# 🎬 Remotion — Vidéos promo

Projet [Remotion](https://www.remotion.dev) pour générer des vidéos promotionnelles
(présentation des prompts, contenu marketing) pour la
[Prompts Library — Afrique Francophone](../README.md).

## Commandes

**Installer les dépendances**

```console
npm i
```

**Lancer l'aperçu (studio)**

```console
npm run dev
```

**Générer une vidéo**

```console
npx remotion render
```

**Mettre à jour Remotion**

```console
npx remotion upgrade
```

## Structure

```text
remotion/
├── src/
│   ├── Root.tsx          # Déclaration des compositions vidéo
│   ├── Composition.tsx   # Composition d'exemple à adapter/dupliquer
│   ├── index.ts          # Point d'entrée Remotion
│   └── index.css         # Styles globaux (Tailwind)
└── public/                # Assets statiques (images, polices, audio)
```

## Docs

- [Fondamentaux Remotion](https://www.remotion.dev/docs/the-fundamentals)
- [Discord Remotion](https://discord.gg/6VzzNDwUwV)

## Licence

Remotion est gratuit pour les équipes jusqu'à 3 personnes. Pour une utilisation
en entreprise au-delà, voir les [conditions de licence](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).

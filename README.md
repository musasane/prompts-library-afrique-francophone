# 🧠 Prompts Library — Contexte Africain Francophone

> Collection de prompts experts, structurés et réutilisables, destinés aux LLM
> (Claude, GPT, Gemini, Mistral, etc.) et adaptés aux réalités professionnelles
> de l'**Afrique de l'Ouest francophone** (Sénégal, Côte d'Ivoire, Mali, Burkina
> Faso, Bénin, Togo, Guinée) et plus largement de la zone **UEMOA**.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Markdown Lint](https://github.com/musasane/REPO/actions/workflows/markdown-lint.yml/badge.svg)](./.github/workflows/markdown-lint.yml)
[![Language](https://img.shields.io/badge/lang-fran%C3%A7ais-blue.svg)](#)
[![Region](https://img.shields.io/badge/region-UEMOA-green.svg)](#)

---

## 📌 Objectif

Cette bibliothèque regroupe des prompts conçus pour produire des analyses,
livrables et plans d'action **immédiatement exploitables** dans un contexte
professionnel africain — sans les approximations habituelles des prompts génériques
calibrés sur les marchés OCDE.

Chaque prompt intègre :

- Les **contraintes opérationnelles locales** (mobile money, KYC, connectivité, énergie)
- Le **cadre réglementaire** pertinent (UEMOA, BCEAO, OHADA, DGID)
- Les **devises locales** (FCFA par défaut)
- Les **langues et cultures** d'Afrique francophone
- Une structure de réponse **expert à expert** (Problème → Diagnostic → Plan d'action)

---

## 📂 Structure du dépôt

```text
.
├── README.md                                           # Ce fichier
├── LICENSE                                             # Licence MIT
├── .gitignore                                          # Fichiers ignorés
├── .github/
│   └── workflows/
│       └── markdown-lint.yml                           # CI : validation Markdown
└── prompts/
    └── prompt-monetisation-en-ligne-afrique-francophone.md
```

---

## 📚 Index des prompts

| # | Prompt | Domaine | Cible | Statut |
|---|--------|---------|-------|--------|
| 01 | [Monétisation en ligne — Afrique francophone](./prompts/prompt-monetisation-en-ligne-afrique-francophone.md) | Stratégie / Entrepreneuriat | Freelances, fondateurs d'agence IA, indépendants | ✅ Stable |


---

## 🚀 Utilisation

### Méthode 1 — Copier-coller direct

1. Ouvre le fichier Markdown du prompt souhaité.
2. Copie l'intégralité du contenu (hors front matter YAML si ton LLM ne le supporte pas).
3. Colle-le dans la fenêtre de conversation de ton LLM.
4. Réponds aux questions de clarification posées par le modèle.

### Méthode 2 — Via API (Claude, OpenAI, etc.)

```python
import anthropic

client = anthropic.Anthropic()

with open("prompts/prompt-monetisation-en-ligne-afrique-francophone.md") as f:
    system_prompt = f.read()

message = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=4096,
    system=system_prompt,
    messages=[
        {"role": "user", "content": "Je veux lancer une agence IA à Dakar. Budget 5M FCFA."}
    ]
)
print(message.content[0].text)
```

### Méthode 3 — Intégration dans un agent

Chaque prompt peut servir de **system prompt** pour un agent spécialisé (Claude Code,
LangChain, n8n, etc.). Le front matter YAML facilite l'indexation et la sélection
automatique du bon prompt selon le contexte de la requête.

---

## 🎯 Principes de design des prompts

Tous les prompts de cette collection respectent les conventions suivantes :

1. **Front matter YAML** — métadonnées structurées (titre, version, tags, auteur)
2. **Rôle explicite** — le LLM se voit attribuer une identité de consultant senior
3. **Contexte géographique précisé** — zone UEMOA, pays cible, langues locales
4. **Contraintes opérationnelles intégrées** — pas de réponse hors-sol
5. **Format de sortie imposé** — `Problème → Diagnostic → Plan d'action`
6. **Garde-fou méthodologique** — questions de clarification, recherche web, sources
7. **Glossaire** — pour standardiser le vocabulaire technique et réglementaire
8. **Versioning sémantique** — `MAJOR.MINOR.PATCH` selon les évolutions

---

## 🤝 Contribuer

Les contributions sont bienvenues, particulièrement pour :

- Ajouter des prompts dans de nouveaux domaines (santé, agriculture, éducation, fintech)
- Étendre la couverture géographique (Afrique centrale, Maghreb francophone)
- Améliorer les prompts existants (cas d'usage, exemples, glossaire)
- Traduire des prompts en **wolof, bambara, pulaar, dioula**

### Processus

1. Fork le dépôt
2. Crée une branche : `git checkout -b feat/nouveau-prompt-xyz`
3. Respecte la structure des prompts existants
4. Vérifie la syntaxe Markdown : `npx markdownlint-cli '**/*.md'`
5. Ouvre une Pull Request avec une description claire

### Convention de nommage

```text
prompts/prompt-<thematique>-<contexte>.md
```

Exemples :
- `prompt-immigration-express-entry-senegal.md`
- `prompt-pisciculture-casamance.md`
- `prompt-mobile-money-integration-uemoa.md`

---

## 🗺️ Glossaire transversal

| Terme | Définition |
|-------|------------|
| **UEMOA** | Union Économique et Monétaire Ouest-Africaine (8 pays, monnaie FCFA) |
| **BCEAO** | Banque Centrale des États de l'Afrique de l'Ouest |
| **OHADA** | Organisation pour l'Harmonisation en Afrique du Droit des Affaires |
| **DGID** | Direction Générale des Impôts et des Domaines (Sénégal) |
| **FCFA** | Franc CFA (XOF pour l'UEMOA) — devise par défaut |
| **KYC** | Know Your Customer — vérification d'identité réglementaire |
| **RAG** | Retrieval-Augmented Generation |
| **SUARL** | Société Unipersonnelle À Responsabilité Limitée |

---

## 📝 Versioning

Ce dépôt suit le **[Semantic Versioning 2.0.0](https://semver.org/lang/fr/)**.

- **MAJOR** — refonte majeure d'un prompt ou de la structure du dépôt
- **MINOR** — ajout de prompts ou de fonctionnalités rétrocompatibles
- **PATCH** — corrections, précisions, mises à jour mineures

Voir l'historique : [`CHANGELOG.md`](./CHANGELOG.md) *(à venir)*

---

## ⚖️ Licence

Distribué sous licence **MIT** — voir le fichier [`LICENSE`](./LICENSE).

Tu es libre d'utiliser, modifier et distribuer ces prompts, y compris pour un usage
commercial. Mention de la source appréciée mais non obligatoire.

---

## 👤 Auteur

**Musa Sané**
Ingenieur Systems
📍 Dakar, Sénégal
🔗 [LinkedIn](https://www.linkedin.com/in/sane-musa) · ✉️ sane.moussa1@gmail.com

---

## 🙏 Remerciements

À l'écosystème tech francophone africain — CTIC Dakar, Jokkolabs, Orange Digital
Center, et tous les contributeurs qui font avancer la souveraineté numérique du
continent.

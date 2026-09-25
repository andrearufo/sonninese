# Sonninese

Vocabolario del dialetto di Sonnino (LT): parole, locuzioni e modi di dire.

https://andrearufo.github.io/sonninese/

## Struttura

Ogni voce è un file Markdown in [`src/content/voci/`](src/content/voci/):

```markdown
---
lemma: "Tolle"
tipo: ["verbo"]
significato: "Prendere"
esempi:
  - dialetto: "Vide d'illo a tolle"
    italiano: "Vedi di andare a prenderlo"
fonte: "Jò Fracantò di Gasparre Ventre"   # opzionale
aggiunta: 2018-11-05
---
Note libere in Markdown (opzionali).
```

Lo schema è in [`src/content.config.ts`](src/content.config.ts): una voce malformata fa fallire la build.

## Sviluppo

```sh
npm install
npm run dev
```

Ogni push su `main` pubblica il sito su GitHub Pages.

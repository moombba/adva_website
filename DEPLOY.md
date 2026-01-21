# Déploiement sur GitHub Pages

Le projet est configuré pour être déployé sur GitHub Pages.

## Configuration

- **Base path:** `/adva_website/` (configuré dans `vite.config.js`)
- **URL du site:** `https://moombba.github.io/adva_website/`

## Déploiement

### Méthode 1 : Script npm (recommandé)

```bash
npm run deploy
```

Cette commande va :
1. Builder le projet (`npm run build`)
2. Déployer le dossier `dist` sur la branche `gh-pages`

### Méthode 2 : Manuel

```bash
# 1. Builder le projet
npm run build

# 2. Déployer avec gh-pages
npx gh-pages -d dist
```

## Configuration GitHub Pages

Dans les paramètres de votre repository GitHub :
1. Allez dans **Settings** → **Pages**
2. **Source:** Sélectionnez la branche `gh-pages` et le dossier `/ (root)`
3. Le site sera disponible sur `https://moombba.github.io/adva_website/`

## Mise à jour du site

À chaque fois que vous voulez mettre à jour le site :
```bash
npm run deploy
```

Le déploiement prend généralement 1-2 minutes avant que les changements soient visibles.

# Rooty-Bento Design Variante

Dieser Branch (`rooty-bento`) ist für Experimente mit einem komplett neuen Design und Layout der Website.

## Status
- Branch erstellt: `rooty-bento`
- Basis: `main` branch
- Ziel: Komplette Neugestaltung der Website

## Nächste Schritte

### 1. Branch auf Remote pushen
```bash
git push -u origin rooty-bento
```

### 2. Vercel Deployment

**Option A: Automatisches Preview-Deployment**
- Vercel erstellt automatisch ein Preview-Deployment für diesen Branch
- URL: `https://bioco-web-project-git-rooty-bento-[team].vercel.app`

**Option B: Separates Vercel-Projekt**
1. Gehe zu Vercel Dashboard
2. Erstelle neues Projekt
3. Verbinde mit diesem Repository
4. Wähle Branch: `rooty-bento`
5. Root Directory: `frontend`
6. Environment Variables setzen (wie in VERCEL_DEPLOYMENT.md)

### 3. Design-Änderungen

Du kannst jetzt im `frontend/` Ordner experimentieren:
- Neue Komponenten-Struktur
- Neues Layout-System
- Neue CSS-Architektur
- Neue Seiten-Struktur

## Vercel Environment Variables

Für das neue Deployment benötigst du:
- `PROCESSWIRE_API_URL` - API URL für ProcessWire Backend
- `MATOMO_URL` - Matomo Analytics URL (optional)
- `MATOMO_SITE_ID` - Matomo Site ID (optional)

## Zurück zu Main

Um zurück zum Haupt-Branch zu wechseln:
```bash
git checkout main
```

Um Änderungen zu mergen:
```bash
git checkout main
git merge rooty-bento
```


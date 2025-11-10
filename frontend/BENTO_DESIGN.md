# Organic Bento Design - Journey into the Earth

## Konzept

Die neue Homepage simuliert eine "Reise in die Erde" beim Scrollen:

- **Oben**: Himmel, Apfelbäume (Apfel-Boxen)
- **Mitte**: Büsche, Bohnen, Salate, Kürbis (Salat-Boxen)
- **Unten**: Wurzelgemüse (Karotten-Boxen)
- **Ganz unten**: Verschiedene Erdschichten (Footer)

## Technologie-Stack

- **Tailwind CSS**: Für das moderne, responsive Layout
- **GSAP (GreenSock)**: Für Parallax-Animationen und ScrollTrigger
- **SVG**: Organische Formen für die Bento-Boxen
- **Next.js**: React Framework

## Komponenten

### OrganicBentoBox
SVG-basierte Container mit organischen Formen:
- `apple`: Rote Apfel-Form (Himmel-Bereich)
- `lettuce`: Grüne Salat-Form (Erdoberfläche)
- `carrot`: Orange Karotten-Form (Erd-Bereich)

### SVGRoots
Animierte SVG-Linien, die die Bento-Boxen wie Wurzeln verbinden. Die Wurzeln "wachsen" beim Scrollen.

## Verwendung

### Route
Die neue Bento-Version ist unter `/bento` verfügbar.

### Lokal testen
```bash
cd frontend
npm run dev
```
Dann öffne: `http://localhost:3000/bento`

### Design anpassen

1. **Farben**: In `tailwind.config.js` die `bioco-*` Farben anpassen
2. **SVG-Formen**: In `components/OrganicBentoBox.tsx` die `getSVGPath()` Funktionen ändern
3. **Parallax-Geschwindigkeit**: In `app/page-bento.tsx` den `y`-Wert im ScrollTrigger anpassen
4. **Wurzel-Verbindungen**: In `app/page-bento.tsx` das `rootConnections` Array anpassen

## Responsive Design

- **Desktop (≥1024px)**: Vollständiges Bento-Grid mit Parallax und Wurzel-Animationen
- **Mobile (<1024px)**: Vertikales Stapeln, Parallax deaktiviert für bessere Performance

## Performance

- Parallax und Wurzel-Animationen sind auf mobilen Geräten deaktiviert
- GSAP ScrollTrigger wird nur auf Desktop-Geräten initialisiert
- SVG-Wurzeln verwenden `will-change` für optimierte Animationen


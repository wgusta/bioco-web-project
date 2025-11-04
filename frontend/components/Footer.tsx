import Link from 'next/link'

export function Footer() {
  return (
    <footer id="footer" className="wireframe-box">
      <div className="wireframe-content">
        <div id="footer-content" className="wireframe-box">
          <section id="J-01">
            <h3>Footer-Links</h3>
            <ul>
              <li><Link href="/kontakt">Kontakt</Link></li>
              <li><Link href="/impressum">Impressum</Link></li>
              <li><Link href="/datenschutz">Datenschutz</Link></li>
              <li><Link href="/statuten">Statuten</Link></li>
              <li>Social</li>
            </ul>
            <p>Kontakt: Geisshof, 5412 Gebenstorf; E-Mail; <em>Telefon (falls vorhanden)</em></p>
            <p className="dim">PDFs: Statuten, Reglement, Jahresbericht</p>
            <p className="dim">Social-Profile</p>
            <p className="dim">Partner: Demeter, Bio Suisse</p>
          </section>
        </div>
      </div>
    </footer>
  )
}

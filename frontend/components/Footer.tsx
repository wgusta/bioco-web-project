import Link from 'next/link'

export function Footer() {
  return (
    <footer id="footer">
      <div className="wireframe-content">
        <div id="footer-content">
          <section id="J-01">
            <h3>Footer-Links</h3>
            <ul>
              <li><Link href="/kontakt">Kontakt</Link></li>
              <li><Link href="/impressum">Impressum</Link></li>
              <li><Link href="/datenschutz">Datenschutz</Link></li>
              <li><Link href="/statuten">Statuten</Link></li>
              <li>Social</li>
            </ul>
            <p><strong>Kontakt:</strong></p>
            <p>
              E-Mail: <a href="mailto:info@bioco.ch">info@bioco.ch</a><br />
              Hof: Geisshof, 5412 Gebenstorf<br />
              Post: Gemüsegenossenschaft biocò, c/o Anna Zehnder, Allmendstrasse 39b, CH-5400 Baden
            </p>
            <p className="dim">PDFs: Statuten, Reglement, Jahresbericht</p>
            <p className="dim">Social-Profile</p>
            <p className="dim">Partner: Demeter, Bio Suisse</p>
          </section>
        </div>
      </div>
    </footer>
  )
}

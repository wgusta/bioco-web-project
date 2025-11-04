import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="logo-link">
      <div className="logo">
        <span className="logo-b">b</span>
        <span className="logo-carrot">
          <span className="carrot-leaves">🌿</span>
          <span className="carrot-body">🥕</span>
        </span>
        <span className="logo-o1">o</span>
        <span className="logo-c">c</span>
        <span className="logo-beet">
          <span className="beet-leaves">🌿</span>
          <span className="beet-body">🫘</span>
        </span>
      </div>
    </Link>
  )
}

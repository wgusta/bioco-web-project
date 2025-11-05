import Link from 'next/link'
import Image from 'next/image'

export function Logo() {
  return (
    <Link href="/" className="logo-link">
      <Image
        src="https://bioco.ch/wp-content/uploads/2017/02/bioco_logo_gemuesegenossenschaft.png"
        alt="biocò Logo"
        width={200}
        height={60}
        priority
        style={{ height: 'auto', width: 'auto', maxHeight: '60px' }}
      />
    </Link>
  )
}
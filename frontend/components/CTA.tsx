import Link from 'next/link'

interface CTAProps {
  text: string
  href: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export function CTA({ text, href, variant = 'primary', onClick }: CTAProps) {
  const className = variant === 'primary' ? 'cta-button' : 'cta-button-secondary'
  
  return (
    <Link href={href} className={className} onClick={onClick}>
      {text}
    </Link>
  )
}

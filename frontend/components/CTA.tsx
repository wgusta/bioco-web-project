import Link from 'next/link'

interface CTAProps {
  text: string
  href: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export function CTA({ text, href, variant = 'primary', onClick }: CTAProps) {
  const className = variant === 'primary' ? 'btn btn-primary' : 'btn btn-secondary'
  
  return (
    <Link href={href} className={className} onClick={onClick}>
      {text}
    </Link>
  )
}

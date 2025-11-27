import { ReactNode } from 'react'

interface PeaBulletProps {
  children: ReactNode
}

export function PeaBullet({ children }: PeaBulletProps) {
  return (
    <div className="pea-bullet">
      <span className="pea-bullet-icon" aria-hidden="true" />
      <div className="pea-bullet-content">{children}</div>
    </div>
  )
}


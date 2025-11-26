'use client'

import { AktuellesItem } from './AktuellesData'

interface AktuellesItemProps {
  item: AktuellesItem
  variant?: 'aktuelles' | 'event'
  onClick?: (item: AktuellesItem) => void
}

export function AktuellesItemComponent({ item, variant = 'aktuelles', onClick }: AktuellesItemProps) {
  const className = variant === 'event' ? 'event-item' : 'aktuelles-item'
  const hasDetails = item.fullDescription || item.location || item.time || (item.type === 'event' && item.signupRequired)
  
  const handleClick = () => {
    if (hasDetails && onClick) {
      onClick(item)
    }
  }
  
  return (
    <div 
      className={className}
      onClick={handleClick}
      style={{
        cursor: hasDetails ? 'pointer' : 'default',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        if (hasDetails) {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }
      }}
      onMouseLeave={(e) => {
        if (hasDetails) {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
        }
      }}
    >
      <h3>{item.date}</h3>
      <p><strong>{item.title}</strong></p>
      <p>{item.description}</p>
      {hasDetails && (
        <p style={{ 
          marginTop: '8px', 
          fontSize: '0.875rem', 
          color: 'var(--bioco-green)',
          fontWeight: 600
        }}>
          Mehr erfahren →
        </p>
      )}
    </div>
  )
}


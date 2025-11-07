import { AktuellesItem } from './AktuellesData'

interface AktuellesItemProps {
  item: AktuellesItem
  variant?: 'aktuelles' | 'event'
}

export function AktuellesItemComponent({ item, variant = 'aktuelles' }: AktuellesItemProps) {
  const className = variant === 'event' ? 'event-item' : 'aktuelles-item'
  
  return (
    <div className={className}>
      <h3>{item.date}</h3>
      <p><strong>{item.title}</strong></p>
      <p>{item.description}</p>
    </div>
  )
}


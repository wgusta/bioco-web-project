'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getEventItems, AktuellesItem } from './AktuellesData'
import { AktuellesItemComponent } from './AktuellesItem'
import { ItemDetailModal } from './ItemDetailModal'

interface EventsBannerProps {
  title?: string
  showTitle?: boolean
  variant?: 'default' | 'embedded'
}

export function EventsBanner({
  title = 'Nächste Events',
  showTitle = true,
  variant = 'default',
}: EventsBannerProps) {
  const eventItems = getEventItems().slice(0, 3) // Show max 3 events
  const [selectedItem, setSelectedItem] = useState<AktuellesItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleItemClick = (item: AktuellesItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }
  
  const containerClassName =
    variant === 'embedded' ? 'events-banner events-banner-embedded' : 'events-banner'

  return (
    <>
      <section className={containerClassName}>
        {showTitle && <h2>{title}</h2>}
        <div className="events-list">
          {eventItems.map((item, index) => (
            <AktuellesItemComponent 
              key={item.id || index} 
              item={item} 
              variant="event"
              onClick={handleItemClick}
            />
          ))}
        </div>
        <p style={{ marginTop: 'var(--spacing-md)' }}>
          <Link href="/aktuelles">Alle Events ansehen →</Link>
        </p>
      </section>
      <ItemDetailModal 
        item={selectedItem} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  )
}

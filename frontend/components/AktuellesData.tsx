// Shared data source for Aktuelles and Events
export interface AktuellesItem {
  date: string
  title: string
  description: string
  type: 'aktuelles' | 'event'
}

export const aktuellesData: AktuellesItem[] = [
  {
    date: '24. Oktober 2025',
    title: 'Letzter biocò Schnuppertag des Jahres',
    description: 'Auf dem Geisshof in Gebenstorf',
    type: 'event'
  },
  {
    date: '15. November 2025',
    title: 'Fondue-Abend',
    description: 'Gemeinsamer Anlass für alle Mitglieder',
    type: 'event'
  },
  {
    date: '27. November 2025',
    title: 'Außerordentliche Generalversammlung',
    description: 'Wichtige Informationen für alle Genossenschafter/innen',
    type: 'aktuelles'
  }
]

export function getAktuellesItems(): AktuellesItem[] {
  return aktuellesData.filter(item => item.type === 'aktuelles')
}

export function getEventItems(): AktuellesItem[] {
  return aktuellesData.filter(item => item.type === 'event')
}


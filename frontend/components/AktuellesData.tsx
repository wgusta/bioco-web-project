// Shared data source for Aktuelles and Events
// Structure designed to be easily replaceable with ProcessWire API data
export interface AktuellesItem {
  id?: string | number // For ProcessWire: page ID
  date: string
  title: string
  description: string
  type: 'aktuelles' | 'event'
  // Extended fields for detail view
  fullDescription?: string
  location?: string
  time?: string
  signupRequired?: boolean
  signupUrl?: string
  imageUrl?: string
  // ProcessWire fields (for future API integration)
  body?: string // Full content from ProcessWire
  url?: string // ProcessWire page URL
}

export const aktuellesData: AktuellesItem[] = [
  {
    id: 1,
    date: '24. Oktober 2025',
    title: 'Letzter biocò Schnuppertag des Jahres',
    description: 'Auf dem Geisshof in Gebenstorf',
    type: 'event',
    fullDescription: 'Komm vorbei und lerne biocò kennen! An diesem Schnuppertag kannst du den Geisshof besichtigen, unser Gärtnerteam treffen und mehr über die solidarische Landwirtschaft erfahren. Für alle Interessierten, die biocò kennenlernen möchten.',
    location: 'Geisshof, Geisslistrasse, 5412 Gebenstorf',
    time: '14:00 - 17:00 Uhr',
    signupRequired: true
  },
  {
    id: 2,
    date: '15. November 2025',
    title: 'Fondue-Abend',
    description: 'Gemeinsamer Anlass für alle Mitglieder',
    type: 'event',
    fullDescription: 'Gemeinsamer Fondue-Abend für alle Mitglieder der Genossenschaft. Ein gemütlicher Abend zum Austausch und Kennenlernen. Bring dein eigenes Fondue-Set mit oder teile mit anderen.',
    location: 'Geisshof, Geisslistrasse, 5412 Gebenstorf',
    time: '18:00 - 22:00 Uhr',
    signupRequired: true
  },
  {
    id: 3,
    date: '27. November 2025',
    title: 'Außerordentliche Generalversammlung',
    description: 'Wichtige Informationen für alle Genossenschafter/innen',
    type: 'aktuelles',
    fullDescription: 'Wir laden alle Genossenschafter/innen zur außerordentlichen Generalversammlung ein. Es werden wichtige Themen besprochen, die die Zukunft der Genossenschaft betreffen. Deine Teilnahme ist wichtig!',
    location: 'Geisshof, Geisslistrasse, 5412 Gebenstorf',
    time: '19:00 Uhr',
    signupRequired: false
  }
]

export function getAktuellesItems(): AktuellesItem[] {
  return aktuellesData.filter(item => item.type === 'aktuelles')
}

export function getEventItems(): AktuellesItem[] {
  return aktuellesData.filter(item => item.type === 'event')
}


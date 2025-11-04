// ProcessWire API client for headless CMS

const API_URL = process.env.NEXT_PUBLIC_PROCESSWIRE_API_URL || process.env.PROCESSWIRE_API_URL || 'http://localhost/api'

export interface PageData {
  id: number
  title: string
  url: string
  body?: string
  logo_image?: {
    url: string
    description: string
  }
  hero_image?: {
    url: string
    description: string
  }
  hero_subtitle?: string
  sidebar_content?: string
  gallery_images?: Array<{
    url: string
    description: string
  }>
  footer_content?: string
  css_variant?: string
  children?: PageData[]
}

export async function getPageData(path: string): Promise<PageData | null> {
  try {
    const response = await fetch(`${API_URL}/pages${path}`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })
    
    if (!response.ok) {
      return null
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching page data:', error)
    return null
  }
}

export async function getNavigation(): Promise<PageData[]> {
  try {
    const response = await fetch(`${API_URL}/navigation`, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    })
    
    if (!response.ok) {
      return []
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching navigation:', error)
    return []
  }
}

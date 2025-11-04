import { NextRequest, NextResponse } from 'next/server'

const PROCESSWIRE_API = process.env.PROCESSWIRE_API_URL || 'http://localhost/api'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.visit_date || !body.participants || !body.privacy_accept) {
      return NextResponse.json(
        { success: false, error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      )
    }

    // Send to ProcessWire API
    const response = await fetch(`${PROCESSWIRE_API}/forms/visit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    if (data.success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { success: false, error: data.error || 'Es ist ein Fehler aufgetreten.' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Visit day form error:', error)
    return NextResponse.json(
      { success: false, error: 'Es ist ein Fehler aufgetreten.' },
      { status: 500 }
    )
  }
}

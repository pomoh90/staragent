import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Simple form submission - just log the data
    console.log('Form submission received:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process form' },
      { status: 500 }
    )
  }
}

import { NextResponse } from 'next/server'

export async function GET() {
  const robotsTxt = `
User-agent: *
Allow: /
Sitemap: https://staragent.agency/sitemap.xml
`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}

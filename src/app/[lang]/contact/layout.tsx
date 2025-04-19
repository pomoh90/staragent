import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Marketing Agency',
  description: 'Get in touch with our team for your digital marketing needs',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'
import { useState } from 'react'
import NetworkMap from '@/components/NetworkMap'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { t } = useTranslation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xeogodkl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen pt-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/photo-1522071820081-009f0129c71c.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Contact Us"
          fill
          sizes="100vw"
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Network Map Overlay */}
      <div className="absolute inset-0 z-10 opacity-40 mix-blend-screen">
        <NetworkMap />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 relative z-20">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-lg shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {/* Contact Form */}
            <div className="w-full">
              <h2 className="text-2xl font-semibold mb-6 text-[rgb(59,130,246,0.5)]">Send us a message</h2>
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/xeogodkl"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-gray-900 px-4 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-gray-900 px-4 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-gray-900 px-4 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-gray-900 px-4 py-2"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors"
                >
                  {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">{t('contact.form.success')}</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center">{t('contact.form.error')}</p>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-[rgb(59,130,246,0.5)]">Get in touch</h2>
              <div className="space-y-6">
                {/* <div>
                  <h3 className="text-lg font-medium text-gray-900">Address</h3>
                  <p className="mt-2 text-gray-600">

                  </p>
                </div> */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-2 text-gray-600">
                    Starzdustllc@gmail.com
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-2 text-gray-600">
                  +1 (323) 336-7307
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                  <p className="mt-2 text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
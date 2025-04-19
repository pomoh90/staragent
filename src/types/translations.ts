export interface Service {
  title: string
  description: string
}

export interface Services {
  title: string
  subtitle: string
  items: {
    [key: string]: Service
  }
}

export interface Hero {
  title: string
  subtitle: string
  cta: string
}

export interface Testimonials {
  title: string
  subtitle: string
}

export interface Translations {
  nav: {
    home: string
    about: string
    services: string
    portfolio: string
    contact: string
  }
  hero: Hero
  services: Services
  testimonials: Testimonials
} 
import { useEffect } from 'react'
import Announcement from './components/Announcement'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroStrip from './components/IntroStrip'
import GeMGuideSection from './components/GeMGuideSection'
import AudienceSection from './components/AudienceSection'
import WhySection from './components/WhySection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import PricingSection from './components/PricingSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'

const routeSections: Record<string, string> = {
  '/': 'top',
  '/gem-guide': 'gem-guide',
  '/services': 'services',
  '/pricing': 'pricing',
  '/faq': 'faq',
  '/contact': 'contact',
  '/registration': 'registration',
  '/how': 'how',
  '/disclaimer': 'disclaimer',
  '/privacy': 'privacy',
}

export default function App() {
  useEffect(() => {
    const navigateToPath = (path: string, behavior: ScrollBehavior) => {
      const route = path.replace(/\/$/, '') || '/'
      const sectionId = routeSections[route]
      if (sectionId) document.getElementById(sectionId)?.scrollIntoView({ behavior, block: 'start' })
    }

    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      if (!(event.target instanceof Element)) return
      const link = event.target.closest<HTMLAnchorElement>('a[href]')
      if (!link || link.target === '_blank') return
      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin || !routeSections[url.pathname]) return
      event.preventDefault()
      if (url.pathname !== window.location.pathname) window.history.pushState({}, '', url.pathname)
      navigateToPath(url.pathname, 'smooth')
    }

    const onPopState = () => navigateToPath(window.location.pathname, 'smooth')
    document.addEventListener('click', onDocumentClick)
    window.addEventListener('popstate', onPopState)

    const legacyHash = window.location.hash.slice(1)
    const legacyRoute = Object.entries(routeSections).find(([, sectionId]) => sectionId === legacyHash)?.[0]
    if (legacyRoute) {
      window.history.replaceState({}, '', legacyRoute)
      requestAnimationFrame(() => navigateToPath(legacyRoute, 'auto'))
    } else {
      requestAnimationFrame(() => navigateToPath(window.location.pathname, 'auto'))
    }

    return () => {
      document.removeEventListener('click', onDocumentClick)
      window.removeEventListener('popstate', onPopState)
    }
  }, [])

  return (
    <>
      <Announcement />
      <Navbar />
      <main id="top">
        <Hero />
        <IntroStrip />
        <GeMGuideSection />
        <AudienceSection />
        <WhySection />
        <ServicesSection />
        <ProcessSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}

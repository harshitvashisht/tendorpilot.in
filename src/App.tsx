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

export default function App() {
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

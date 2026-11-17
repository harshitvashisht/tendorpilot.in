import { ArrowDownRight, ArrowRight, FileCheck2 } from 'lucide-react'
import CountUpStat from './CountUpStat'

export default function Hero() {
  return <section className="hero" id="top">
    <div className="hero-inner">
      <div className="hero-copy">
        <span className="eyebrow">GEM SUPPORT FOR EVERY SELLER</span>
        <h1>Get your business registered on GeM.<br /><em>Start selling to Government buyers.</em></h1>
        <p>We help MSMEs, manufacturers, OEMs, traders and service providers with GeM seller registration, catalogue setup, approvals and ongoing seller support.</p>
        <div className="hero-actions"><a className="button button-primary" href="/contact">Get your free GeM eligibility check <ArrowRight size={16} /></a><a className="button button-outline button-light" href="/services">See our services <ArrowDownRight size={16} /></a></div>
      </div>
      <aside className="bid-card hero-message-card">
        <div className="bid-card-heading"><span className="bid-card-icon"><FileCheck2 size={18} /></span><strong>Start selling on GeM</strong></div>
        <p>Want to register your business on GeM but don't know where to start? TenderPilot helps you with documentation, registration and profile setup. Get a free eligibility check.</p>
        <div className="hero-price"><strong>₹4,999</strong><span>GeM registration and setup</span><small>Professional assistance. One-time service fee, plus applicable taxes.</small></div>
        <a className="hero-card-link" href="/contact">Get your free GeM eligibility check <ArrowRight size={15} /></a>
      </aside>
      <div className="hero-stats"><div><CountUpStat value={300} suffix="+" /><span>Sellers onboarded</span></div><div><CountUpStat value={800} suffix="+" /><span>Bids prepared</span></div><div><strong className="hero-stat-category">Goods &amp; services</strong><span>Across major GeM categories</span></div><div><strong>All India</strong><span>States and cities served</span></div></div>
    </div>
    <a className="hero-scroll" href="/registration">Explore registration support <ArrowDownRight size={14} /></a>
  </section>
}

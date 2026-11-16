import { ArrowDownRight, ArrowRight, Check, FileCheck2 } from 'lucide-react'

const bidSteps = [
  'Bid alert matched to your categories',
  'Eligibility and ATC review, with a clear bid/no-bid call',
  'Technical and financial bid prepared and checked',
  'Reverse auction strategy and live support',
  'Order, delivery and payment follow-through',
]

export default function Hero() {
  return <section className="hero" id="top">
    <div className="hero-inner">
      <div className="hero-copy">
        <span className="eyebrow">GEM SUPPORT FOR EVERY SELLER</span>
        <h1>Win government<br />orders without the<br /><em>paperwork headache.</em></h1>
        <p>We handle your GeM journey end to end: account setup, catalogue, bids, order execution and account health. You focus on delivering.</p>
        <div className="hero-actions"><a className="button button-primary" href="/registration">Get GeM registration for ₹4,999 <ArrowRight size={16} /></a><a className="button button-outline button-light" href="/services">See our services <ArrowDownRight size={16} /></a></div>
      </div>
      <div className="bid-card"><div className="bid-card-heading"><span className="bid-card-icon"><FileCheck2 size={18} /></span><strong>A GeM bid, handled for you</strong></div><ol>{bidSteps.map((step, index) => <li key={step}><span>{index + 1}</span>{step}<Check size={14} /></li>)}</ol></div>
      <div className="hero-stats"><div><strong>300+</strong><span>sellers onboarded</span></div><div><strong>800+</strong><span>bids prepared</span></div><div><strong>Goods +<br />services</strong><span>across major GeM categories</span></div><div><strong>All India</strong><span>states and cities served</span></div></div>
    </div>
    <a className="hero-scroll" href="/registration">Explore registration support <ArrowDownRight size={14} /></a>
  </section>
}

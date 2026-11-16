import { ArrowUpRight, Check } from 'lucide-react'
import { services } from '../data'

export default function ServicesSection() {
  return <section className="services-section section-pad" id="services"><div className="section-heading"><div><span className="eyebrow">SERVICES</span><h2>Everything you need on GeM,<br />in one place</h2></div><p>Pick one service or let us run your whole GeM presence.</p></div><div className="services-grid">{services.map(({ icon: Icon, ...service }) => <article className="service-card" key={service.number}><div className="service-card-top"><span className="service-icon"><Icon size={19} strokeWidth={1.8} /></span><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.text}</p><ul>{service.bullets.map((item) => <li key={item}><Check size={12} />{item}</li>)}</ul><a href="/contact" aria-label={`Ask us about ${service.title}`}><ArrowUpRight size={16} /></a></article>)}</div></section>
}

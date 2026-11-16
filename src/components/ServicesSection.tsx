import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { services } from '../data'
import { Eyebrow } from './Brand'
export default function ServicesSection() {
  return <section className="services-section section-pad" id="services"><div className="section-heading services-heading"><div><Eyebrow>WHAT WE CAN HELP WITH</Eyebrow><h2>Support for the steps<br />that <em>move you forward.</em></h2></div><p>Choose the support you need today. If you’re not sure where to begin, we’ll help you figure that out together.</p></div><div className="services-grid">{services.map(({ icon: Icon, ...service }) => <article className="service-card" key={service.number}><div className="service-card-top"><span className="service-icon"><Icon size={19} strokeWidth={1.7} /></span><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Ask us about ${service.title}`}><ArrowUpRight size={16} /></a></article>)}</div><div className="services-foot"><span>Not sure which service fits?</span><a href="#contact" className="text-link">Tell us what you’re building <ArrowRight size={15} /></a></div></section>
}

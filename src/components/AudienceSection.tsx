import { ArrowUpRight } from 'lucide-react'
import { Eyebrow } from './Brand'

const audiences = [
  { index: '01 / MSMEs', title: <>Small business.<br />Serious potential.</>, text: 'Get clearer on the registrations and documents needed to begin selling to public buyers.', tone: '' },
  { index: '02 / OEMs & MAKERS', title: <>Your products,<br />in the right place.</>, text: 'Get support preparing product information and understanding catalogue requirements.', tone: 'audience-card-dark' },
  { index: '03 / TRADERS', title: <>More routes<br />to market.</>, text: 'Explore procurement opportunities that could make sense for what you supply.', tone: 'audience-card-yellow' },
  { index: '04 / SERVICE PROVIDERS', title: <>Expertise that<br />travels further.</>, text: 'Find a more guided way to prepare for public service opportunities.', tone: '' },
]
export default function AudienceSection() {
  return <section className="who-section section-pad"><div className="section-heading"><div><Eyebrow>WHO WE HELP</Eyebrow><h2>Good work deserves<br />a <em>bigger market.</em></h2></div><p>Whether you make things, move things or provide a service, we help you understand how public procurement could fit your business.</p></div><div className="audience-grid">{audiences.map((item, index) => <article className={`audience-card ${item.tone}`} key={item.index}><span className="audience-index">{item.index}</span><h3>{item.title}</h3><p>{item.text}</p><span className="audience-arrow"><ArrowUpRight size={16} /></span><span className={`audience-graphic graphic-${index + 1}`} aria-hidden="true" /></article>)}</div></section>
}

import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { makeWhatsAppLink, supportEmail } from '../config'
import { Brand } from './Brand'

const footerGroups = [
  { title: 'EXPLORE', links: [['GeM registration', '/registration'], ['Who we help', '/who-we-help'], ['Services', '/services'], ['How it works', '/how'], ['Plans', '/plans'], ['FAQ', '/faq']] },
  { title: 'GET IN TOUCH', links: [['Free eligibility check', '/contact'], ['WhatsApp: +91 91879 43361', makeWhatsAppLink('Hi MyTenderTeam, I would like to know more about your services.')], [supportEmail, `mailto:${supportEmail}`]] },
]

export default function Footer() {
  return <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><Brand light /><p>An independent GeM consultancy, serving sellers across India.</p><a className="footer-whatsapp" href={makeWhatsAppLink('Hi MyTenderTeam, I would like to know more about your services.')} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Start a WhatsApp conversation <ArrowUpRight size={13} /></a></div><div className="footer-nav">{footerGroups.map((group) => <div key={group.title}><span>{group.title}</span>{group.links.map(([label, href]) => <a href={href} key={`${label}-${href}`}>{label}</a>)}</div>)}</div></div><div className="footer-bottom" id="disclaimer"><span>© {new Date().getFullYear()} MyTenderTeam · Bengaluru</span><span>MyTenderTeam is an independent GeM consultancy, not affiliated with GeM or the Government of India. Fees on the portal are set by GeM and may change.</span><a href="/">BACK TO TOP <ArrowUpRight size={12} /></a></div><span id="privacy" className="sr-only">Form details are sent through Formspree to MyTenderTeam support when the enquiry form is submitted.</span></footer>
}

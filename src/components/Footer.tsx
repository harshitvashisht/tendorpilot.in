import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { makeWhatsAppLink, supportEmail } from '../config'
import { Brand } from './Brand'

const footerGroups = [
  { title: 'EXPLORE', links: [['Our services', '#services'], ['How it works', '#how'], ['Pricing', '#pricing'], ['FAQs', '#faq']] },
  { title: 'GET IN TOUCH', links: [['Free eligibility check', '#contact'], ['Email support', `mailto:${supportEmail}`], ['GeM registration', '#registration']] },
  { title: 'THE DETAILS', links: [['Independence & disclaimer', '#disclaimer'], ['Privacy note', '#privacy']] },
]
export default function Footer() {
  return <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><Brand light /><p>Your guide to the public procurement journey.</p><a className="footer-whatsapp" href={makeWhatsAppLink('Hi Tenderpilot, I would like to know more about your services.')} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Start a WhatsApp conversation <ArrowUpRight size={13} /></a></div><div className="footer-nav">{footerGroups.map((group) => <div key={group.title}><span>{group.title}</span>{group.links.map(([label, href]) => <a href={href} key={`${label}-${href}`}>{label}</a>)}</div>)}</div></div><div className="footer-bottom" id="disclaimer"><span>© {new Date().getFullYear()} Tenderpilot. All rights reserved.</span><span>Tenderpilot is an independent private service provider and is not affiliated with GeM or any government body. GeM is a government-owned procurement platform. Registration and participation are subject to the official portal’s rules and approval.</span><a href="#top">BACK TO TOP <ArrowUpRight size={12} /></a></div><span id="privacy" className="sr-only">Form details are used to prepare a WhatsApp enquiry and are sent only if you choose to send the message.</span></footer>
}

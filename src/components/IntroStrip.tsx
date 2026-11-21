import { ArrowUpRight, Check, MessageCircle } from 'lucide-react'
import { makeWhatsAppLink } from '../config'

const inclusions = [
  'Document collection and checking',
  'Seller account creation and profile setup',
  'DSC guidance',
  'OEM/reseller and MSE/Startup status setup',
  'Category selection and eligibility report',
]

export default function IntroStrip() {
  return <section className="registration-section" id="registration"><div className="registration-copy"><span className="eyebrow">OUR CORE SERVICE</span><h2>GeM registration and setup,<br /><em>done for you</em></h2><p>Start selling to government buyers without wrestling with the portal. We collect and check your documents, create your seller account and set up your profile correctly, so you avoid rejections and delays.</p><ul>{inclusions.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul><div className="registration-actions"><a className="button button-primary" href="/contact">Start my registration <ArrowUpRight size={15} /></a><a className="button button-outline" href={makeWhatsAppLink('Hi MyTenderTeam, I would like to ask about GeM registration and setup.')} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Ask on WhatsApp</a></div></div><aside className="registration-price"><span>GeM registration and setup</span><strong>₹4,999</strong><small>one-time fee [+ GST, if applicable]</small><ul><li>We start the day we receive your documents</li><li>Support by phone or online call</li><li>All work under strict NDA</li><li>Catalogue upload is charged separately</li></ul><p>GeM does not charge a registration fee. You pay MyTenderTeam for doing it right, fast and with support.</p></aside></section>
}

import { MessageCircle } from 'lucide-react'
import { makeWhatsAppLink } from '../config'
export default function FloatingContact() {
  return <a className="floating-whatsapp" href={makeWhatsAppLink('Hi MyTenderTeam, I would like a free eligibility check.')} target="_blank" rel="noreferrer" aria-label="Start a WhatsApp conversation"><MessageCircle size={18} /><span>Chat on WhatsApp</span></a>
}

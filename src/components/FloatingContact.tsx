import { MessageCircle } from 'lucide-react'
import { makeWhatsAppLink } from '../config'
export default function FloatingContact() {
  return <a className="floating-whatsapp" href={makeWhatsAppLink('Hi Tenderpilot, I would like a free eligibility check.')} target="_blank" rel="noreferrer" aria-label="Start a WhatsApp conversation"><MessageCircle size={21} /><span>Let’s talk</span></a>
}

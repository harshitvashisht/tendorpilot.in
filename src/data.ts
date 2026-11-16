import { BadgeCheck, FileCheck2, FileSearch, Handshake, PackageCheck, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Service = { icon: LucideIcon; number: string; title: string; text: string }
export const services: Service[] = [
  { icon: BadgeCheck, number: '01', title: 'GeM registration', text: 'Get your business profile set up correctly and ready to participate on the Government e-Marketplace.' },
  { icon: PackageCheck, number: '02', title: 'Catalogue & products', text: 'Get guided through product details, catalogue preparation and the information buyers need to see.' },
  { icon: FileSearch, number: '03', title: 'Tender discovery', text: 'Find opportunities that fit what your business offers, with a clearer view of the requirements.' },
  { icon: FileCheck2, number: '04', title: 'Bid documentation', text: 'Organise eligibility documents and prepare a complete, carefully reviewed submission.' },
  { icon: ShieldCheck, number: '05', title: 'Compliance support', text: 'Understand the registrations and documents a tender may ask your business to provide.' },
  { icon: Handshake, number: '06', title: 'Account & login help', text: 'Get help understanding common verification, access and seller-account setup issues.' },
]

export const faqs = [
  { q: 'What is GeM?', a: 'The Government e-Marketplace (GeM) is an online public procurement platform used by government buyers in India. Sellers can register and offer eligible products or services through the portal.' },
  { q: 'Who can register on GeM?', a: 'Eligible businesses, including MSMEs, manufacturers, traders, OEMs and service providers, can apply. The documents and steps depend on your business type.' },
  { q: 'How long does registration take?', a: 'Timing depends on document readiness and any checks required by the portal. We help you prepare carefully and keep you informed as your application progresses.' },
  { q: 'Is Tenderpilot part of the government?', a: 'No. Tenderpilot is an independent support service and is not affiliated with, endorsed by or operated by GeM or any government department.' },
  { q: 'What should I bring to a free check?', a: 'Share your business type and what you want to sell or supply. We will let you know which documents are useful to have ready for an initial eligibility conversation.' },
  { q: 'Is GeM registration free?', a: 'Creating a basic seller account on the official GeM portal is free. Tenderpilot’s ₹4,999 fee is for optional one-to-one assistance; it is not a government or GeM registration fee.' },
  { q: 'What documents should I prepare?', a: 'Commonly requested details include PAN, authorised-person identity and contact information, organisation details, and bank information. GST, Udyam, incorporation records, CIN or ITR details may apply depending on your organisation and whether you plan to participate in bids.' },
  { q: 'How long will registration take?', a: 'There is no single timeline. It depends on document readiness, verification and portal processing. Tenderpilot can help you prepare, but the official portal controls review and activation.' },
  { q: 'Can you help if I already have an account?', a: 'Yes. We can discuss common access, OTP, profile or activation questions and explain possible next steps. Account decisions and verification remain with GeM.' },
]

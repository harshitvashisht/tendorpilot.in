import { BadgeCheck, FileCheck2, FileSearch, Handshake, PackageCheck, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Service = { icon: LucideIcon; number: string; title: string; text: string; bullets: string[] }
export const services: Service[] = [
  { icon: BadgeCheck, number: '01', title: 'Seller onboarding', text: 'Registration and profile setup done right the first time.', bullets: ['Account creation and DSC support', 'OEM, reseller or service setup', 'MSE, Startup and Make in India status'] },
  { icon: PackageCheck, number: '02', title: 'Catalogue management', text: 'Listings that get approved, stay live and get found.', bullets: ['Product and service catalogues', 'Brand and OEM approvals', 'Rejection and suspension fixes'] },
  { icon: FileSearch, number: '03', title: 'Bid management', text: 'From the right bid alert to a compliant, competitive bid.', bullets: ['Daily bid alerts for your categories', 'ATC and eligibility review', 'Technical and financial bid prep'] },
  { icon: FileCheck2, number: '04', title: 'Reverse auction support', text: 'Price with a plan, not a guess.', bullets: ['L1 and margin analysis', 'Past order price benchmarks', 'Live auction support'] },
  { icon: Handshake, number: '05', title: 'Order and payment follow-through', text: 'Winning is half the job. We help you deliver and get paid.', bullets: ['Order acceptance and delivery', 'Invoicing and payment tracking', 'Penalty and dispute support'] },
  { icon: ShieldCheck, number: '06', title: 'Account health and training', text: 'Stay compliant and keep improving.', bullets: ['Performance and rating monitoring', 'Renewal and expiry reminders', 'Team training on GeM'] },
]

export const faqs = [
  { q: 'Is GeM registration free? Why pay you?', a: 'Yes, GeM does not charge a registration fee. You pay us for getting it right and for what comes after: catalogues that get approved, bids that comply, and orders delivered and paid.' },
  { q: 'Can you guarantee that I will win orders?', a: 'No, and nobody honest can. We improve your eligibility, bid quality and pricing. Awards are decided by buyers under GeM rules.' },
  { q: 'Are you affiliated with GeM or the government?', a: 'No. Tenderpilot is an independent consultancy that helps sellers use the GeM portal.' },
  { q: 'Which categories do you cover?', a: 'We support sellers of goods and services across major GeM categories. Not sure whether yours is covered? Ask for a free eligibility check.' },
]

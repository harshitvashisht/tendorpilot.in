import { ArrowRight, BadgeCheck, Check, FileCheck2, FileText, Info, Landmark, ShieldCheck } from 'lucide-react'
import { Eyebrow } from './Brand'

const businessTypes = ['Proprietorship', 'Partnership & LLP', 'Private / Public Company', 'Trust or Society', 'Manufacturer / OEM', 'Trader / Reseller', 'MSME / Udyam business', 'Service provider']
const documents = [
  'PAN details for the business and authorised person',
  'Aadhaar details and linked mobile, where Aadhaar verification is used',
  'Active email address and mobile number',
  'Business constitution proof and incorporation date',
  'GST information, where applicable to your business',
  'Bank account details and proof',
  'CIN for an incorporated company; Udyam details if registered as an MSME',
  'ITR details may be needed for bid or reverse-auction participation',
]
const registrationSteps = [
  ['Check your starting point', 'Identify your business type, seller category and what you plan to offer.'],
  ['Gather matching details', 'Prepare PAN, identity, contact and organisation information so names and records line up.'],
  ['Create and verify the seller account', 'Complete the official portal’s account creation and the requested identity checks.'],
  ['Complete your seller profile', 'Add the relevant organisation, office and bank details to your profile.'],
  ['Prepare your catalogue', 'Select the appropriate product or service categories and add accurate offer details.'],
  ['Review opportunities', 'Once your profile is ready, learn how to find relevant bids and meet their requirements.'],
]

export default function GeMGuideSection() {
  return <section className="gem-guide section-pad" id="gem-guide">
    <div className="section-heading gem-guide-heading"><div><Eyebrow>THE GE M REGISTRATION GUIDE</Eyebrow><h2>Know what to expect<br /><em>before you begin.</em></h2></div><p>GeM connects registered sellers with public buyers. Here’s a practical overview of who can get started, what to prepare and how the journey usually works.</p></div>

    <div className="fee-clarity" aria-label="GeM registration cost and Tenderpilot service fee"><article className="fee-official"><span className="fee-icon"><Landmark size={18} /></span><div><span className="fee-label">OFFICIAL GeM PORTAL</span><h3>Seller account registration is free</h3><p>The official portal does not charge a fee to create a basic seller account.</p></div><strong>₹0</strong></article><article className="fee-support"><span className="fee-icon"><ShieldCheck size={18} /></span><div><span className="fee-label">OPTIONAL TENDERPILOT ASSISTANCE</span><h3>Personal registration support</h3><p>Our one-time service fee for guided registration assistance.</p></div><strong>₹4,999</strong></article></div>
    <p className="fee-disclaimer"><Info size={14} /> Tenderpilot’s fee pays for our support, not for GeM registration. Other optional platform services or tender-specific requirements may have separate charges.</p>

    <div className="guide-columns">
      <article className="guide-panel eligibility-panel"><div className="guide-panel-head"><span className="guide-panel-icon"><BadgeCheck size={18} /></span><div><span className="guide-kicker">WHO CAN APPLY</span><h3>Many kinds of businesses</h3></div></div><p>GeM supports different organisation types and seller roles. Eligibility and requirements depend on your business and the categories you want to offer.</p><div className="type-chips">{businessTypes.map((type) => <span key={type}><Check size={12} />{type}</span>)}</div><a className="guide-link" href="#contact">Check your eligibility <ArrowRight size={14} /></a></article>
      <article className="guide-panel documents-panel"><div className="guide-panel-head"><span className="guide-panel-icon"><FileText size={18} /></span><div><span className="guide-kicker">GET A FEW THINGS READY</span><h3>Document checklist</h3></div></div><p>These details are commonly requested. The official portal will show what applies to your organisation.</p><ul className="document-list">{documents.map((document) => <li key={document}><Check size={14} />{document}</li>)}</ul><p className="document-note"><Info size={13} /> Keep records current and consistent. Don’t share passwords or OTPs with a support provider.</p></article>
    </div>

    <div className="registration-roadmap"><div className="roadmap-heading"><Eyebrow>FROM FIRST CHECK TO SELLER PROFILE</Eyebrow><h3>A clearer registration journey</h3><p>Exact screens and verification steps can change on the official portal. We’ll help you understand the next step as it applies to your business.</p></div><div className="roadmap-grid">{registrationSteps.map(([title, text], index) => <article key={title}><span className="roadmap-index">0{index + 1}</span><span className="roadmap-check"><FileCheck2 size={15} /></span><h4>{title}</h4><p>{text}</p></article>)}</div></div>
    <div className="guide-bottom"><span>Already registered but stuck on login, verification or activation?</span><a href="#contact">We can help you work through it <ArrowRight size={15} /></a></div>
    <div className="official-link"><span>Want to read the official guidance?</span><a href="https://gem.gov.in/" target="_blank" rel="noreferrer">Visit the Government e-Marketplace <ArrowRight size={14} /></a></div>
  </section>
}

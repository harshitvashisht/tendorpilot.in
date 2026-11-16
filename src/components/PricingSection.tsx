import { ArrowRight, Check } from 'lucide-react'

const plans = [
  { title: 'Registration and setup', description: 'Our basic service for new sellers. One-time fee.', price: '₹4,999', cadence: 'one-time fee [+ GST, if applicable]', items: ['Document collection and checking', 'Seller account creation and profile setup', 'DSC guidance', 'OEM/reseller and MSE/Startup status setup', 'Category selection and eligibility report', 'Catalogue upload is charged separately'], featured: false },
  { title: 'Complete GeM support', description: 'We run your GeM presence, from bids to payments.', price: 'Custom plan', cadence: 'Affordable pricing after a short discussion of your needs', items: ['Everything in Registration and setup', 'Daily bid alerts', 'Bid preparation matched to your needs', 'Reverse auction support', 'Order, delivery and payment follow-through', 'Account health monitoring and renewal reminders'], featured: true },
  { title: 'One-off tasks', description: 'Just need one thing fixed?', price: '₹1,500 – ₹2,000', cadence: 'per task, depending on the work', items: ['Single bid preparation', 'Catalogue rejection fix', 'Suspension appeal'], featured: false },
]

export default function PricingSection() {
  return <section className="pricing-section section-pad" id="plans"><div className="section-heading"><div><span className="eyebrow">PLANS</span><h2>Simple plans, clear scope</h2></div><p>These are Tenderpilot’s service charges for the work we do. GeM itself does not charge a registration fee, so you are paying for our time, expertise and support.</p></div><div className="pricing-grid">{plans.map((plan) => <article className={`price-card${plan.featured ? ' price-featured' : ''}`} key={plan.title}><h3>{plan.title}</h3><p>{plan.description}</p><div className="price-amount"><strong>{plan.price}</strong><span>{plan.cadence}</span></div><ul>{plan.items.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul><a className={`button ${plan.featured ? 'button-primary' : 'button-outline'}`} href="/contact">Ask about this plan <ArrowRight size={15} /></a></article>)}</div></section>
}

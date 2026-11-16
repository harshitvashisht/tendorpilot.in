const steps = [
  { title: 'Free eligibility check', text: 'Tell us what you sell. We’ll tell you where you can bid and what you need.' },
  { title: 'Set up', text: 'We prepare your account, documents and catalogue.' },
  { title: 'Bid', text: 'We track bids, prepare submissions and support auctions.' },
  { title: 'Deliver and grow', text: 'We follow orders through to payment and keep your account healthy.' },
]

export default function ProcessSection() {
  return <section className="process-section section-pad" id="how"><div className="section-heading"><div><span className="eyebrow">HOW IT WORKS</span><h2>Four steps from enquiry to first order</h2></div><p>No jargon, no hidden steps.</p></div><div className="process-grid">{steps.map((step, index) => <article key={step.title}><span className="step-number">{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
}

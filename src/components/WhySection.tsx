const reasons = [
  { title: 'Same-day service', text: 'We start the day we receive your documents.' },
  { title: 'Strict NDA', text: 'Every engagement is covered by a strict NDA, so your business details stay private.' },
  { title: 'Real people, by phone or video', text: 'Our agents connect with you over phone and online calls, not just chat.' },
  { title: 'Based in Bengaluru, serving all India', text: 'Registered in Bengaluru, supporting sellers in every Indian state and city.' },
]

export default function WhySection() {
  return <section className="why-section section-pad" id="why"><div className="section-heading"><div><span className="eyebrow">WHY MYTENDERTEAM</span><h2>Fast, private and personal</h2></div></div><div className="reasons-grid">{reasons.map((item, index) => <article className="reason-card" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
}

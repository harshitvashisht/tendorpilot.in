import { faqs } from '../data'

export default function FAQSection() {
  return <section className="faq-section section-pad" id="faq"><div className="faq-content"><span className="eyebrow">FAQ</span><h2>Questions sellers ask us</h2><div className="faq-list">{faqs.map((faq) => <article className="faq-item" key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></article>)}</div></div></section>
}

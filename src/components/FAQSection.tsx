import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { faqs } from '../data'
import { Eyebrow } from './Brand'
export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  return <section className="faq-section section-pad" id="faq"><div className="faq-intro"><Eyebrow>GOOD QUESTIONS</Eyebrow><h2>A few things<br />you might be<br /><em>wondering.</em></h2><p>Still have a question? We’re happy to talk it through.</p><a className="text-link" href="#contact">Ask us directly <ArrowRight size={15} /></a></div><div className="faq-list">{faqs.map((faq, index) => { const isOpen = openFaq === index; const answerId = `faq-answer-${index}`; return <article className={isOpen ? 'faq-item faq-active' : 'faq-item'} key={faq.q}><h3><button id={`faq-question-${index}`} onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={answerId}><span className="faq-index">0{index + 1}</span><span className="faq-question">{faq.q}</span><ChevronDown size={18} /></button></h3>{isOpen && <div className="faq-answer" id={answerId} role="region" aria-labelledby={`faq-question-${index}`}>{faq.a}</div>}</article> })}</div></section>
}

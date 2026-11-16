import { ArrowRight, FileSearch, Handshake, MessageCircle } from 'lucide-react'
import { Eyebrow, TextLink } from './Brand'
const steps = [
  { title: 'Tell us about your business', text: 'A short conversation about what you do and what you want to achieve.', icon: MessageCircle },
  { title: 'Get a clear first check', text: 'We’ll talk through your starting point and the documents you may need.', icon: FileSearch },
  { title: 'Choose your support', text: 'We’ll explain the relevant service and fee before you decide how to proceed.', icon: Handshake },
  { title: 'Move ahead with a guide', text: 'Get practical help with the next steps, with updates along the way.', icon: ArrowRight },
]
export default function ProcessSection() {
  return <section className="process-section section-pad" id="how"><div className="process-title"><Eyebrow light>A SIMPLE PLACE TO START</Eyebrow><h2>Four steps.<br /><em>One clear path.</em></h2><p>There’s no need to figure everything out before you talk to us. We’ll take it one step at a time.</p><TextLink href="/contact" light>Start with a free check <ArrowRight size={15} /></TextLink></div><div className="process-steps">{steps.map(({ icon: Icon, ...step }, index) => <article key={step.title}><span className="step-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><span className="step-symbol"><Icon size={19} /></span></article>)}</div></section>
}

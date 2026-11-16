import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Eyebrow } from './Brand'
export default function IntroStrip() {
  return <section className="intro-strip" id="registration"><div className="intro-left"><Eyebrow>THE OPPORTUNITY IS REAL</Eyebrow><h2>Let’s make the<br /><span>first step simpler.</span></h2></div><div className="intro-right"><p>GeM opens up a new way for businesses to work with public buyers. The process can feel unfamiliar at first. Tenderpilot gives you practical guidance to get started, understand what’s needed and move forward at your pace.</p><a href="#contact" className="text-link">Talk to a person <ArrowRight size={15} /></a></div><div className="intro-price"><span className="price-kicker">TENDERPILOT SUPPORT</span><strong>₹4,999</strong><span className="price-caption">One-time assistance fee</span><a href="#contact" aria-label="Ask about Tenderpilot GeM support at ₹4,999">SEE WHAT’S INCLUDED <ArrowUpRight size={13} /></a></div></section>
}

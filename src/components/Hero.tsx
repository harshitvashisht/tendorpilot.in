import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, BadgeCheck, Check, ShieldCheck, Sparkles } from 'lucide-react'
import { Eyebrow, TextLink } from './Brand'
export default function Hero() {
  return <section className="hero">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-content"><Eyebrow light>PROCUREMENT, MADE MORE HUMAN</Eyebrow><h1>Government business<br />shouldn’t feel like a<br /><em>maze.</em></h1>
      <p className="hero-copy">From getting GeM-ready to making sense of tenders, we help Indian businesses take the next step with clarity and confidence.</p>
      <div className="hero-actions"><a className="button button-primary" href="/contact">Get your free eligibility check <ArrowRight size={17} /></a><TextLink href="/services" light>Explore our services <ArrowDownRight size={16} /></TextLink></div>
      <div className="hero-proof"><div className="proof-avatars" aria-hidden="true"><span>G</span><span>M</span><span>+</span></div><span>Personal support for your next step</span><span className="proof-divider" /><span className="proof-note"><ShieldCheck size={14} /> Your documents stay confidential</span></div>
    </div>
    <div className="hero-art" role="img" aria-label="Illustration of a business moving toward a procurement opportunity"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
      <div className="art-label label-top"><span className="label-icon"><BadgeCheck size={15} /></span><span><b>GeM ready</b><small>One step at a time</small></span><Check className="label-check" size={15} /></div>
      <div className="art-chart"><div className="chart-top"><span>YOUR NEXT MOVE</span><ArrowUpRight size={15} /></div><div className="chart-path"><span className="chart-node node-one" /><span className="chart-node node-two" /><span className="chart-node node-three" /><span className="chart-node node-four" /><svg viewBox="0 0 280 126" preserveAspectRatio="none" aria-hidden="true"><path d="M7 110 C 46 105, 52 72, 92 82 S 146 95, 170 51 S 217 57, 233 28 S 260 31, 274 9" /></svg></div><div className="chart-bottom"><span>STARTING OUT</span><span>NEW OPPORTUNITY</span></div></div>
      <div className="art-ticket"><span className="ticket-icon"><Sparkles size={16} /></span><span><b>A little less guesswork.</b><small>A lot more direction.</small></span></div><div className="art-orbit-dot dot-a" /><div className="art-orbit-dot dot-b" /><div className="art-orbit-dot dot-c" />
    </div><a className="scroll-cue" href="/registration"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a><div className="hero-side-note">BUILT FOR INDIAN BUSINESSES <span>•</span> MADE FOR THE NEXT STEP</div>
  </section>
}

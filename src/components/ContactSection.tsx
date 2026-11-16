import { useState, type FormEvent } from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { formspreeEndpoint, supportEmail } from '../config'
import { Eyebrow } from './Brand'

export default function ContactSection() {
  const [status, setStatus] = useState('')
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('')
  const [sending, setSending] = useState(false)

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    if (!formspreeEndpoint) {
      setStatusType('error')
      setStatus(`Email delivery is not connected yet. Please contact ${supportEmail} directly.`)
      return
    }

    setSending(true)
    setStatus('Sending your enquiry…')
    setStatusType('')
    const submission = new FormData(form)
    submission.append('_subject', 'New Tenderpilot website enquiry')

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: submission,
      })
      if (!response.ok) throw new Error('Form submission failed')
      setStatusType('success')
      setStatus(`Thanks — your enquiry was submitted to ${supportEmail}.`)
      form.reset()
    } catch {
      setStatusType('error')
      setStatus(`We could not submit the form. Please try again or contact ${supportEmail} directly.`)
    } finally {
      setSending(false)
    }
  }

  return <section className="contact-section section-pad" id="contact"><div className="contact-backdrop" aria-hidden="true"><span>LET’S</span><span>BEGIN</span></div><div className="contact-copy"><Eyebrow light>YOUR NEXT STEP STARTS HERE</Eyebrow><h2>You’ve got the<br />ambition.<br /><em>Let’s map the way.</em></h2><p>Tell us a little about your business. We’ll help you explore your next step in public procurement.</p><div className="contact-assurance"><ShieldCheck size={17} /><span><b>Private and straightforward</b><small>Submitting sends these details through Formspree to Tenderpilot support.</small></span></div></div><form className="enquiry-form" onSubmit={submitEnquiry}><div className="form-heading"><span>01 <i>—</i> QUICK ENQUIRY</span><b>Let’s get to know your business.</b><small>Just a few details to get the conversation started.</small></div><label>Your name<input required name="name" placeholder="e.g. Priya Sharma" autoComplete="name" /></label><label>Phone number<input required name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. +91 98765 43210" pattern="[+0-9() -]{8,20}" title="Enter a valid phone number" /></label><label>Business type<select required name="business" defaultValue=""><option value="" disabled>Select your business type</option><option>MSME / Small business</option><option>Manufacturer / OEM</option><option>Trader / Reseller</option><option>Service provider</option><option>Other</option></select></label><label>What would you like help with?<textarea required name="requirements" placeholder="Tell us what you make, sell or do…" rows={3} /></label><div className="form-honeypot" aria-hidden="true"><label>Leave this field empty<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label></div><button className="button button-primary form-submit" type="submit" disabled={sending}>{sending ? 'Sending enquiry…' : 'Send my enquiry'} <ArrowRight size={16} /></button>{status && <div className={`form-success${statusType === 'error' ? ' form-error' : statusType === '' ? ' form-pending' : ''}`} role="status"><p>{status}</p></div>}</form></section>
}

import { useState, type FormEvent } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { formspreeEndpoint, makeWhatsAppLink, supportEmail } from '../config'

export default function ContactSection() {
  const [status, setStatus] = useState('')
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('')
  const [sending, setSending] = useState(false)

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    setSending(true)
    setStatus('Sending your enquiry…')
    setStatusType('')
    const submission = new FormData(form)
    submission.append('_subject', 'New Tenderpilot website enquiry')
    try {
      const response = await fetch(formspreeEndpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: submission })
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

  return <section className="contact-section section-pad" id="contact"><div className="contact-copy"><span className="eyebrow eyebrow-light">FREE ELIGIBILITY CHECK</span><h2>Start with a free<br />eligibility check</h2><p>Tell us what you sell. We’ll tell you which GeM categories fit, what documents you need and a realistic first step.</p><div className="contact-details"><a href={makeWhatsAppLink('Hi Tenderpilot, I would like a free eligibility check.')} target="_blank" rel="noreferrer">+91 91879 43361</a><span>·</span><a href={`mailto:${supportEmail}`}>{supportEmail}</a><span>·</span><span>Tenderpilot · serving sellers across India</span></div><a className="button button-whatsapp" href={makeWhatsAppLink('Hi Tenderpilot, I would like a free eligibility check.')} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Chat with us on WhatsApp</a></div><form className="enquiry-form" onSubmit={submitEnquiry}><label>Your name<input required name="name" autoComplete="name" /></label><label>Phone or WhatsApp<input required name="phone" type="tel" inputMode="tel" autoComplete="tel" pattern="[+0-9() -]{8,20}" title="Enter a valid phone number" /></label><label>I am a<select required name="business" defaultValue="MSME or startup"><option>MSME or startup</option><option>OEM or manufacturer</option><option>Trader or reseller</option><option>Service provider</option><option>Other</option></select></label><label>What do you sell?<textarea required name="requirements" rows={4} /></label><div className="form-honeypot" aria-hidden="true"><label>Leave this field empty<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label></div><button className="button button-primary form-submit" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Request my free check'} <ArrowRight size={15} /></button>{status && <div className={`form-success${statusType === 'error' ? ' form-error' : statusType === '' ? ' form-pending' : ''}`} role="status"><p>{status}</p></div>}</form></section>
}

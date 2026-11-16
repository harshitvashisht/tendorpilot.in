import { ArrowRight } from 'lucide-react'

export default function Announcement() {
  return <div className="announcement" aria-label="GeM registration and setup: ₹4,999. We start the day we receive your documents.">
    <div className="announcement-track" aria-hidden="true">
      {[0, 1].map((copy) => <div className="announcement-copy" key={copy}>
        <span>GeM registration and setup: <strong>₹4,999</strong></span><i>·</i><span>We start the day we receive your documents</span><a href="/registration" tabIndex={copy === 0 ? 0 : -1}>Get started <ArrowRight size={13} /></a>
      </div>)}
    </div>
  </div>
}

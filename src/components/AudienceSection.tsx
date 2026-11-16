const audiences = [
  { title: 'MSMEs and startups', text: 'Use your Udyam and Startup status to qualify for bid relaxations, and avoid the common mistakes that get new sellers rejected.' },
  { title: 'OEMs and manufacturers', text: 'Brand approval, OEM panel setup, authorisations for your dealers and compliant catalogues across your product range.' },
  { title: 'Traders and resellers', text: 'Reseller authorisations, competitive pricing and bid-ready documents, so you can bid across many categories.' },
  { title: 'Service providers', text: 'Manpower, housekeeping, IT, security, transport and more: service catalogues, custom bids and contract compliance.' },
]

export default function AudienceSection() {
  return <section className="who-section section-pad" id="who-we-help"><div className="section-heading"><div><span className="eyebrow">WHO WE HELP</span><h2>Built for every kind<br />of GeM seller</h2></div><p>Whether you make it, resell it or provide it as a service, the portal rules differ. We know which ones apply to you.</p></div><div className="audience-grid">{audiences.map((item, index) => <article className="audience-card" key={item.title}><span className="audience-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
}

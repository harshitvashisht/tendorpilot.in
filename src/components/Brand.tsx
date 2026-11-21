import type { ReactNode } from 'react'

export function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand${light ? ' brand-light' : ''}`} href="/" aria-label="MyTenderTeam home">
    <svg className="brand-mark" viewBox="0 0 84 66" aria-hidden="true">
      <text x="0" y="51" fill={light ? '#F2F6FB' : '#0B1F4D'} fontFamily="Montserrat, sans-serif" fontSize="43" fontWeight="900" fontStyle="italic">M</text>
      <text x="31" y="51" fill="#0A6ED1" fontFamily="Montserrat, sans-serif" fontSize="43" fontWeight="900" fontStyle="italic">T</text>
      <path d="M43 17 80 2 69 27l-6-10-20 7Z" fill="#22A63A" />
      <path d="M7 57c16 8 38 6 58-6" fill="none" stroke="#22A63A" strokeWidth="5" strokeLinecap="round" />
      <path d="M44 22h13l5 5v15H44z" fill="#F2F6FB" stroke="#0B1F4D" strokeWidth="1.5" />
      <path d="M57 22v6h5" fill="none" stroke="#0B1F4D" strokeWidth="1.5" />
      <path d="M47 31h9M47 35h8" stroke="#0B1F4D" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="59" cy="41" r="8" fill="#22A63A" />
      <path d="m55.5 41 2.3 2.4 4.7-5" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span className="brand-copy">
      <span className="brand-name"><span>MyTender</span><span>Team</span></span>
      <span className="brand-tagline">Discover <i>•</i> Prepare <i>•</i> Bid <i>•</i> Grow</span>
    </span>
  </a>
}
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span className="eyebrow-line" />{children}</span>
}
export function TextLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return <a className={`text-link${light ? ' light-link' : ''}`} href={href}>{children}</a>
}

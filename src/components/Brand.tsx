import type { ReactNode } from 'react'

export function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand${light ? ' brand-light' : ''}`} href="#top" aria-label="Tenderpilot home"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span>tenderpilot<span className="brand-period">.</span></span></a>
}
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span className="eyebrow-line" />{children}</span>
}
export function TextLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return <a className={`text-link${light ? ' light-link' : ''}`} href={href}>{children}</a>
}

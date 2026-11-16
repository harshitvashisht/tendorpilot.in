import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Brand } from './Brand'

const links = [['GeM registration', '/registration'], ['Who we help', '/who-we-help'], ['Services', '/services'], ['How it works', '/how'], ['Plans', '/plans'], ['FAQ', '/faq']]
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])
  return <header className="site-header">
    <Brand />
    <button className="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    <nav id="main-navigation" className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
      {links.map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="/contact" onClick={() => setMenuOpen(false)}>Get a free check <ArrowUpRight size={15} /></a>
    </nav>
  </header>
}

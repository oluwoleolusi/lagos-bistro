import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[0.95rem] transition-colors duration-200 hover:text-rust ${
      isActive ? 'text-rust' : 'text-ink'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-parchment-soft/95 backdrop-blur">
      <a
        href="#main"
        className="absolute left-4 top-2 -translate-y-16 bg-ink px-4 py-2 text-parchment-soft transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <nav className="container-editorial flex h-20 items-center justify-between">
        <NavLink to="/" className="font-display text-xl tracking-wide text-ink" onClick={() => setOpen(false)}>
          Lagos Bistro
        </NavLink>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/reservations" className="btn-primary">
            Reserve a table
          </NavLink>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              open ? 'translate-y-[3.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              open ? '-translate-y-[3.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-20 z-40 origin-top border-b border-line bg-parchment-soft transition-all duration-300 ease-editorial md:hidden ${
          open ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="container-editorial flex flex-col gap-6 py-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-lg text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/reservations" className="btn-primary w-full" onClick={() => setOpen(false)}>
            Reserve a table
          </NavLink>
        </div>
      </div>
    </header>
  )
}

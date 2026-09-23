import { Link } from 'react-router-dom'
import { restaurant } from '../data/restaurant'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink text-parchment-soft">
      <div className="container-editorial grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl">{restaurant.name}</p>
          <p className="mt-4 max-w-[26ch] text-sm text-parchment-soft/70">
            Contemporary Nigerian cooking, close to {restaurant.neighbourhood.split(',')[0]}.
          </p>
          <div className="mt-6 flex gap-4 text-sm">
            {restaurant.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-parchment-soft/80 underline decoration-parchment-soft/30 underline-offset-4 transition-colors hover:text-rust-soft"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-parchment-soft/50">Navigate</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/menu" className="hover:text-rust-soft">Menu</Link></li>
            <li><Link to="/about" className="hover:text-rust-soft">About</Link></li>
            <li><Link to="/reservations" className="hover:text-rust-soft">Reservations</Link></li>
            <li><Link to="/contact" className="hover:text-rust-soft">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm text-parchment-soft/50">Hours</p>
          <ul className="mt-4 space-y-2 text-sm text-parchment-soft/80">
            {restaurant.hours.map((h) => (
              <li key={h.label} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm text-parchment-soft/50">Visit</p>
          <address className="mt-4 space-y-2 text-sm text-parchment-soft/80 not-italic">
            <p>{restaurant.addressLines[0]}<br />{restaurant.addressLines[1]}</p>
            <p>
              <a href={restaurant.phoneHref} className="hover:text-rust-soft">{restaurant.phoneDisplay}</a>
            </p>
            <p>
              <a href={`mailto:${restaurant.emailReservations}`} className="hover:text-rust-soft">
                {restaurant.emailReservations}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-parchment-soft/10">
        <div className="container-editorial flex flex-col gap-2 py-6 text-xs text-parchment-soft/50 sm:flex-row sm:justify-between">
          <p>&copy; {year} {restaurant.name}. All rights reserved.</p>
          <p>Design &amp; development portfolio concept.</p>
        </div>
      </div>
    </footer>
  )
}

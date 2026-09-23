import { Link } from 'react-router-dom'

export default function ReservationCTA() {
  return (
    <section className="border-b border-line bg-ink">
      <div className="container-editorial flex flex-col items-start gap-8 py-20 sm:py-24 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[28ch]">
          <h2 className="text-3xl leading-[1.15] text-parchment-soft sm:text-4xl">
            Tables move quickly on weekends.
          </h2>
          <p className="mt-4 max-w-[42ch] text-[1.05rem] leading-relaxed text-parchment-soft/70">
            We hold most of the room for walk-ins after 9pm, but the early
            sittings book out by Wednesday.
          </p>
        </div>
        <Link to="/reservations" className="btn-ghost-light shrink-0">
          Reserve a table
        </Link>
      </div>
    </section>
  )
}

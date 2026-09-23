import ReservationForm from '../components/reservations/ReservationForm'
import Accordion from '../components/ui/Accordion'
import { faqs, restaurant } from '../data/restaurant'

export default function Reservations() {
  return (
    <>
      <section className="section-pad border-b border-line">
        <div className="container-editorial grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Reservations</p>
            <h1 className="mt-4 max-w-[14ch] text-4xl leading-[1.1] sm:text-5xl">
              Request a table
            </h1>
            <p className="mt-6 max-w-[42ch] text-[1.05rem] leading-relaxed text-ink-soft">
              For parties of nine or more, or for private dining, call us
              directly at{' '}
              <a href={restaurant.phoneHref} className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
                {restaurant.phoneDisplay}
              </a>
              .
            </p>
          </div>

          <div>
            <ReservationForm />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-editorial max-w-2xl">
          <p className="eyebrow">Before you book</p>
          <h2 className="mt-4 text-3xl leading-[1.15] sm:text-4xl">A few things to know</h2>
          <div className="mt-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  )
}

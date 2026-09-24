import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-[0.95fr_1.15fr] lg:items-stretch">
      <div className="order-2 flex flex-col justify-center px-6 py-16 sm:px-8 sm:py-20 lg:order-1 lg:px-12 lg:py-24 xl:px-16">
        <p className="eyebrow">Victoria Island, Lagos</p>
        <h1 className="mt-5 max-w-[13ch] text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[3.4rem] xl:text-[3.75rem]">
          Modern Nigerian cooking, set with a quiet hand.
        </h1>
        <p className="mt-6 max-w-[42ch] text-[1.05rem] leading-relaxed text-ink-soft">
          Lagos Bistro pairs the flavours of home with the pacing and precision of
          European service — jollof, egusi and suya, plated for an evening that
          takes its time.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link to="/reservations" className="btn-primary">
            Reserve a table
          </Link>
          <Link to="/menu" className="btn-secondary">
            Explore the menu
          </Link>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <img
          src={`${import.meta.env.BASE_URL}images/hero.jpg`}
          alt="The dining room at Lagos Bistro, set for evening service"
          className="h-[52vh] w-full object-cover sm:h-[64vh] lg:h-full lg:min-h-[640px]"
          width={1920}
          height={1200}
        />
      </div>
    </section>
  )
}

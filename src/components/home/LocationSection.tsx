import { restaurant } from '../../data/restaurant'

export default function LocationSection() {
  return (
    <section className="section-pad">
      <div className="container-editorial grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Find us</p>
          <h2 className="mt-4 text-3xl leading-[1.15] sm:text-4xl">
            {restaurant.neighbourhood}
          </h2>
          <address className="mt-6 space-y-1 text-[1.05rem] not-italic leading-relaxed text-ink-soft">
            <p>{restaurant.addressLines[0]}</p>
            <p>{restaurant.addressLines[1]}</p>
          </address>

          <dl className="mt-8 space-y-3 border-t border-line pt-6">
            {restaurant.hours.map((h) => (
              <div key={h.label} className="flex justify-between gap-4 text-sm">
                <dt className="text-ink-soft">{h.days}</dt>
                <dd className="text-ink">{h.time}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-sm text-ink-soft">
            On-street parking along Ozumba Mbadiwe, with valet on Friday and
            Saturday evenings.
          </p>
        </div>

        <img
          src={`${import.meta.env.BASE_URL}images/contact-map.jpg`}
          alt="Map placeholder marking Lagos Bistro on Ozumba Mbadiwe Avenue, Victoria Island"
          className="aspect-[7/5] w-full object-cover"
          width={1400}
          height={1000}
          loading="lazy"
        />
      </div>
    </section>
  )
}

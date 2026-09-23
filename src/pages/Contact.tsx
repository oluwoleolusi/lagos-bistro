import ContactForm from '../components/contact/ContactForm'
import { restaurant } from '../data/restaurant'

export default function Contact() {
  return (
    <section className="section-pad">
      <div className="container-editorial grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-[14ch] text-4xl leading-[1.1] sm:text-5xl">
            Questions before you visit
          </h1>

          <img
            src="/images/contact-map.jpg"
            alt="Map placeholder marking Lagos Bistro on Ozumba Mbadiwe Avenue, Victoria Island"
            className="mt-8 aspect-[7/5] w-full object-cover"
            loading="lazy"
          />

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm text-ink-soft">Visit</p>
              <address className="mt-2 text-[0.95rem] not-italic leading-relaxed text-ink">
                {restaurant.addressLines[0]}
                <br />
                {restaurant.addressLines[1]}
              </address>
            </div>
            <div>
              <p className="text-sm text-ink-soft">Reach us</p>
              <p className="mt-2 text-[0.95rem] leading-relaxed">
                <a href={restaurant.phoneHref} className="hover:text-rust">
                  {restaurant.phoneDisplay}
                </a>
                <br />
                <a href={`mailto:${restaurant.emailGeneral}`} className="hover:text-rust">
                  {restaurant.emailGeneral}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <p className="text-sm text-ink-soft">Hours</p>
            <dl className="mt-3 space-y-2">
              {restaurant.hours.map((h) => (
                <div key={h.label} className="flex justify-between gap-4 text-[0.95rem]">
                  <dt className="text-ink-soft">{h.days}</dt>
                  <dd className="text-ink">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div>
          <p className="eyebrow">Send a message</p>
          <h2 className="mt-4 text-2xl leading-[1.2] sm:text-3xl">
            For anything that isn’t a reservation
          </h2>
          <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-relaxed text-ink-soft">
            Press, private dining, feedback, or anything else — this reaches our
            front-of-house team directly.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

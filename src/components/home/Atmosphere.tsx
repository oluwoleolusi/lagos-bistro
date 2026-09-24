export default function Atmosphere() {
  return (
    <section className="border-b border-line">
      <div className="grid lg:grid-cols-[1.3fr_0.85fr]">
        <img
          src={`${import.meta.env.BASE_URL}images/interior.jpg`}
          alt="The dining room at Lagos Bistro in the evening, low lighting over close-set tables"
          className="h-[50vh] w-full object-cover lg:h-full lg:min-h-[520px]"
          width={1800}
          height={1150}
          loading="lazy"
        />
        <div className="flex flex-col justify-center px-6 py-14 sm:px-8 lg:px-14">
          <p className="eyebrow">The room</p>
          <h2 className="mt-4 text-3xl leading-[1.15] sm:text-4xl">
            Low light, close tables, no rush.
          </h2>
          <p className="mt-6 max-w-[46ch] text-[1.05rem] leading-relaxed text-ink-soft">
            Forty covers across the main room, a handful more on the terrace when
            the weather holds. We seat in two turns a night, not three — there is
            always time for a second bottle.
          </p>
          <p className="mt-4 max-w-[46ch] text-[1.05rem] leading-relaxed text-ink-soft">
            A private room to the rear holds up to eighteen, for the dinners that
            need a door that closes.
          </p>
        </div>
      </div>
    </section>
  )
}

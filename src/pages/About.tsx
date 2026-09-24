export default function About() {
  return (
    <>
      <section className="section-pad border-b border-line">
        <div className="container-editorial grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="mt-4 max-w-[14ch] text-4xl leading-[1.1] sm:text-5xl">
              A room built around one kind of food.
            </h1>
          </div>
          <div className="max-w-[52ch] self-end">
            <p className="text-[1.05rem] leading-relaxed text-ink-soft">
              Lagos Bistro opened with a short brief: take the dishes we grew up
              eating at family tables and Sunday parties, and give them the same
              seriousness a chef would bring to any other cuisine. No shortcuts,
              no apology, no rebranding of jollof as anything other than jollof.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="grid lg:grid-cols-2">
          <img
            src={`${import.meta.env.BASE_URL}images/about-story.jpg`}
            alt="Archive photograph of early recipe development for Lagos Bistro"
            className="h-[42vh] w-full object-cover lg:h-full lg:min-h-[480px]"
            loading="lazy"
          />
          <div className="flex flex-col justify-center px-6 py-14 sm:px-8 lg:px-14">
            <p className="eyebrow">How it started</p>
            <p className="mt-4 max-w-[46ch] text-[1.05rem] leading-relaxed text-ink-soft">
              The first version of this menu was tested out of a shared kitchen in
              Lekki, over eighteen months of Sunday dinners for anyone willing to
              give notes. Recipes were rebuilt from scratch — not to change what
              they were, but to make them repeatable at the level a full dining
              room demands, night after night.
            </p>
            <p className="mt-4 max-w-[46ch] text-[1.05rem] leading-relaxed text-ink-soft">
              What stayed constant through every version: the stock is always
              made in-house, the pepper is always fresh-ground the same day, and
              nothing goes out that we would not serve family.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line bg-parchment">
        <div className="container-editorial grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:gap-16">
          <div>
            <p className="eyebrow">Ingredients</p>
            <h2 className="mt-4 max-w-[18ch] text-3xl leading-[1.15] sm:text-4xl">
              Sourced with the same care as any European larder.
            </h2>
            <p className="mt-6 max-w-[48ch] text-[1.05rem] leading-relaxed text-ink-soft">
              Crayfish, uziza, ogbono and ata rodo arrive from trusted suppliers
              across Lagos and the south-west, graded and portioned the way a
              kitchen would treat truffle or good olive oil. We buy whole and
              butcher in-house. Palm oil is sourced unrefined and used sparingly,
              for what it adds rather than out of habit.
            </p>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}images/about-hands.jpg`}
            alt="Detail of prep work in the Lagos Bistro kitchen"
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="container-editorial grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
          <img
            src={`${import.meta.env.BASE_URL}images/chef.jpg`}
            alt="Portrait of the head chef at Lagos Bistro"
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Head chef</p>
            <h2 className="mt-4 text-3xl leading-[1.15] sm:text-4xl">
              Adaeze Nwankwo
            </h2>
            <p className="mt-6 max-w-[52ch] text-[1.05rem] leading-relaxed text-ink-soft">
              Adaeze trained across kitchens in Lagos and Lyon before returning
              home to open Lagos Bistro. Her approach treats classic Nigerian
              cooking as a technique-rich cuisine in its own right — one that
              rewards the same patience and precision as anything she learned in
              France, applied to ingredients she has known since childhood.
            </p>
            <p className="mt-4 max-w-[52ch] text-[1.05rem] leading-relaxed text-ink-soft">
              “I don’t think of what we do as fusion. It’s just cooking the food
              I know, properly.”
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-editorial max-w-2xl">
          <p className="eyebrow">Hospitality</p>
          <p className="mt-4 text-2xl leading-[1.5] text-ink sm:text-[1.7rem]">
            We would rather a table stay empty for twenty minutes than rush the
            one before it. That is the whole idea of the room — good food,
            served by people who are glad you came.
          </p>
        </div>
      </section>
    </>
  )
}

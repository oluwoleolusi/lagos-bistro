const principles = [
  {
    term: 'Ingredient first',
    detail:
      'Uziza, ata rodo, ogbono and crayfish are treated the way a French kitchen treats butter and stock — foundational, not garnish.',
  },
  {
    term: 'Time, not shortcuts',
    detail:
      'Braises run overnight. Stocks are built from scratch. Nothing on the menu is fast, and none of it tastes like it was.',
  },
  {
    term: 'Heat with structure',
    detail:
      'Scotch bonnet and ata rodo are dosed for flavour first — building heat that supports a dish rather than flattening it.',
  },
]

export default function Philosophy() {
  return (
    <section className="section-pad border-b border-line bg-parchment">
      <div className="container-editorial grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">Cuisine philosophy</p>
          <h2 className="mt-4 max-w-[16ch] text-3xl leading-[1.15] sm:text-4xl">
            Contemporary technique, in service of a familiar plate.
          </h2>
          <p className="mt-6 max-w-[48ch] text-[1.05rem] leading-relaxed text-ink-soft">
            Our kitchen borrows the discipline of European technique — reductions,
            confit, careful seasoning by weight — and points all of it back at
            dishes most of our guests already know by heart.
          </p>
        </div>

        <dl className="divide-y divide-line border-y border-line">
          {principles.map((p) => (
            <div key={p.term} className="grid gap-2 py-6 sm:grid-cols-[0.9fr_2fr] sm:gap-8">
              <dt className="text-[1.05rem] text-ink">{p.term}</dt>
              <dd className="text-sm leading-relaxed text-ink-soft">{p.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

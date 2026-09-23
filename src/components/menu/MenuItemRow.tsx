import type { MenuItem } from '../../types'
import { formatNaira } from '../../data/menuData'

const tagLabels: Record<string, string> = {
  vegetarian: 'V',
  vegan: 'VG',
  'gluten-free': 'GF',
  'contains-nuts': 'N',
  spicy: 'Spice',
}

export default function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="grid gap-1 py-6 sm:grid-cols-[2fr_auto] sm:items-baseline sm:gap-6">
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3">
          <h3 className="text-lg leading-snug text-ink">{item.name}</h3>
          {item.dietary && item.dietary.length > 0 && (
            <ul className="flex gap-2" aria-label="Dietary information">
              {item.dietary.map((tag) => (
                <li key={tag}>
                  <span
                    className="text-[0.7rem] uppercase tracking-wideish text-rust"
                    title={tag.replace('-', ' ')}
                  >
                    {tagLabels[tag] ?? tag}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="mt-1.5 max-w-[54ch] text-sm leading-relaxed text-ink-soft">
          {item.description}
        </p>
      </div>
      <span className="text-[0.95rem] text-ink-soft sm:text-right">
        {formatNaira(item.price)}
      </span>
    </div>
  )
}

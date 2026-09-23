import type { MenuCategory } from '../../types'
import MenuItemRow from './MenuItemRow'

export default function MenuList({ category }: { category: MenuCategory }) {
  return (
    <div
      role="tabpanel"
      id={`panel-${category.id}`}
      aria-labelledby={`tab-${category.id}`}
      tabIndex={0}
    >
      {category.note && (
        <p className="mt-6 max-w-[48ch] text-sm italic text-ink-soft">{category.note}</p>
      )}
      <div className="mt-2 divide-y divide-line">
        {category.items.map((item) => (
          <MenuItemRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

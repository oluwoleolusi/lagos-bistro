import type { MenuCategory, MenuCategoryId } from '../../types'

interface MenuTabsProps {
  categories: MenuCategory[]
  active: MenuCategoryId
  onChange: (id: MenuCategoryId) => void
}

export default function MenuTabs({ categories, active, onChange }: MenuTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Menu categories"
      className="scrollbar-none flex gap-8 overflow-x-auto border-b border-line"
    >
      {categories.map((category) => {
        const isActive = category.id === active
        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${category.id}`}
            id={`tab-${category.id}`}
            onClick={() => onChange(category.id)}
            className={`relative shrink-0 whitespace-nowrap py-4 text-[0.95rem] transition-colors duration-200 ${
              isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
            }`}
          >
            {category.label}
            <span
              aria-hidden="true"
              className={`absolute inset-x-0 -bottom-px h-[2px] bg-rust transition-opacity duration-200 ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </button>
        )
      })}
    </div>
  )
}

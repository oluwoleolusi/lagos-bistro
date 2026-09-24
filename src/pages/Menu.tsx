import { useState } from 'react'
import type { MenuCategoryId } from '../types'
import { menuCategories } from '../data/menuData'
import MenuTabs from '../components/menu/MenuTabs'
import MenuList from '../components/menu/MenuList'

export default function Menu() {
  const [active, setActive] = useState<MenuCategoryId>(menuCategories[0].id)
  const activeCategory = menuCategories.find((c) => c.id === active) ?? menuCategories[0]

  return (
    <>
      <section className="relative">
        <img
          src={`${import.meta.env.BASE_URL}images/menu-header.jpg`}
          alt=""
          className="h-56 w-full object-cover sm:h-72"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
        <div className="container-editorial absolute inset-0 flex flex-col justify-end pb-8">
          <p className="eyebrow text-parchment-soft">The menu</p>
          <h1 className="mt-3 text-4xl text-parchment-soft sm:text-5xl">
            Small plates to dessert, by way of the grill
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-editorial max-w-3xl">
          <p className="text-[1.05rem] leading-relaxed text-ink-soft">
            Small plates are built for sharing across the table. Mains arrive one
            at a time, at your pace. Prices are in naira and exclude a discretionary
            service charge of ten percent.
          </p>

          <div className="mt-10">
            <MenuTabs categories={menuCategories} active={active} onChange={setActive} />
            <MenuList category={activeCategory} />
          </div>

          <div className="mt-16 border-t border-line pt-6">
            <p className="text-xs uppercase tracking-wideish text-ink-soft">
              V vegetarian — VG vegan — GF gluten-free — N contains nuts — Spice
              served with real heat
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { featuredDishes, formatNaira } from '../../data/menuData'
import SectionHeading from '../ui/SectionHeading'

export default function FeaturedDishes() {
  return (
    <section className="section-pad border-b border-line">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="On the table"
            title="A few dishes worth crossing town for"
          />
          <Link
            to="/menu"
            className="text-sm text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
          >
            View the full menu
          </Link>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDishes.map((dish) => (
            <div key={dish.id}>
              <img
                src={dish.image}
                alt={dish.name}
                className="aspect-[4/5] w-full object-cover"
                width={900}
                height={1125}
                loading="lazy"
              />
              <div className="mt-4 border-t border-line pt-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg leading-snug">{dish.name}</h3>
                  <span className="whitespace-nowrap text-sm text-ink-soft">
                    {formatNaira(dish.price)}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

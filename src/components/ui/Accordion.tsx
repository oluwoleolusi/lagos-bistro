import { useId, useState } from 'react'

interface AccordionItem {
  question: string
  answer: string
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-lg text-ink">{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`relative h-4 w-4 shrink-0 transition-transform duration-300 ease-editorial ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-ink" />
                  <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-ink" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-editorial ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-[60ch] pb-6 text-[0.95rem] leading-relaxed text-ink-soft">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

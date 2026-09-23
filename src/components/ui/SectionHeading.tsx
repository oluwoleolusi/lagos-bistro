interface SectionHeadingProps {
  title: string
  description?: string
  align?: 'left' | 'center'
  kicker?: string
}

export default function SectionHeading({
  title,
  description,
  align = 'left',
  kicker,
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
      {kicker && <p className="eyebrow mb-3">{kicker}</p>}
      <h2 className="text-3xl leading-[1.15] sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">{description}</p>
      )}
    </div>
  )
}

import type { ReservationFormData } from '../../types'

interface Props {
  data: ReservationFormData
  onReset: () => void
}

function formatDate(value: string): string {
  if (!value) return ''
  const d = new Date(`${value}T00:00:00`)
  return d.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
}

export default function ReservationConfirmation({ data, onReset }: Props) {
  return (
    <div role="status" aria-live="polite">
      <p className="eyebrow">Request received</p>
      <h2 className="mt-4 text-3xl leading-[1.15] sm:text-4xl">
        We’ve noted your table, {data.name.split(' ')[0]}.
      </h2>
      <p className="mt-4 max-w-[52ch] text-[1.05rem] leading-relaxed text-ink-soft">
        A confirmation would normally follow by email within the hour. Here is
        what was submitted:
      </p>

      <dl className="mt-8 divide-y divide-line border-y border-line">
        {[
          ['Date', formatDate(data.date)],
          ['Time', data.time],
          ['Party size', `${data.guests} ${Number(data.guests) === 1 ? 'guest' : 'guests'}`],
          ['Name', data.name],
          ['Email', data.email],
          ['Phone', data.phone],
          ...(data.request ? [['Special request', data.request]] : []),
        ].map(([label, value]) => (
          <div key={label} className="grid gap-1 py-4 sm:grid-cols-[10ch_1fr] sm:gap-6">
            <dt className="text-sm text-ink-soft">{label}</dt>
            <dd className="text-[0.95rem] text-ink">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 border border-line bg-parchment px-5 py-4">
        <p className="text-sm leading-relaxed text-ink-soft">
          This is a portfolio demonstration. No reservation has actually been
          made, and nothing you entered was sent or stored anywhere.
        </p>
      </div>

      <button type="button" onClick={onReset} className="btn-secondary mt-8">
        Make another request
      </button>
    </div>
  )
}

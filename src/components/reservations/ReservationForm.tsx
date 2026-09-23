import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import type { ReservationFormData } from '../../types'
import { validateReservation, type ReservationErrors } from './reservationValidation'
import ReservationConfirmation from './ReservationConfirmation'

const emptyForm: ReservationFormData = {
  date: '',
  time: '',
  guests: '',
  name: '',
  email: '',
  phone: '',
  request: '',
}

const lunchTimes = ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30']
const dinnerTimes = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00']

function todayIso(): string {
  return new Date().toISOString().slice(0, 10)
}

export default function ReservationForm() {
  const [form, setForm] = useState<ReservationFormData>(emptyForm)
  const [errors, setErrors] = useState<ReservationErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  function update<K extends keyof ReservationFormData>(key: K, value: ReservationFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validation = validateReservation(form)
    setErrors(validation)

    if (Object.keys(validation).length > 0) {
      const firstInvalid = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')
      firstInvalid?.focus()
      return
    }

    setStatus('submitting')
    window.setTimeout(() => {
      setStatus('success')
    }, 1100)
  }

  function reset() {
    setForm(emptyForm)
    setErrors({})
    setStatus('idle')
  }

  if (status === 'success') {
    return <ReservationConfirmation data={form} onReset={reset} />
  }

  const fieldClass = (hasError: boolean) =>
    `w-full border bg-transparent px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors ${
      hasError ? 'border-rust' : 'border-line focus:border-ink'
    }`

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <label htmlFor="date" className="text-sm text-ink-soft">
            Date
          </label>
          <input
            id="date"
            type="date"
            min={todayIso()}
            value={form.date}
            onChange={(e) => update('date', e.target.value)}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? 'date-error' : undefined}
            className={`mt-2 ${fieldClass(Boolean(errors.date))}`}
          />
          {errors.date && (
            <p id="date-error" className="mt-1.5 text-xs text-rust">
              {errors.date}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="time" className="text-sm text-ink-soft">
            Time
          </label>
          <select
            id="time"
            value={form.time}
            onChange={(e) => update('time', e.target.value)}
            aria-invalid={Boolean(errors.time)}
            aria-describedby={errors.time ? 'time-error' : undefined}
            className={`mt-2 ${fieldClass(Boolean(errors.time))}`}
          >
            <option value="">Select</option>
            <optgroup label="Lunch">
              {lunchTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </optgroup>
            <optgroup label="Dinner">
              {dinnerTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </optgroup>
          </select>
          {errors.time && (
            <p id="time-error" className="mt-1.5 text-xs text-rust">
              {errors.time}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="guests" className="text-sm text-ink-soft">
            Guests
          </label>
          <select
            id="guests"
            value={form.guests}
            onChange={(e) => update('guests', e.target.value)}
            aria-invalid={Boolean(errors.guests)}
            aria-describedby={errors.guests ? 'guests-error' : undefined}
            className={`mt-2 ${fieldClass(Boolean(errors.guests))}`}
          >
            <option value="">Select</option>
            {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
            <option value="9">9+ (call us)</option>
          </select>
          {errors.guests && (
            <p id="guests-error" className="mt-1.5 text-xs text-rust">
              {errors.guests}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm text-ink-soft">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`mt-2 ${fieldClass(Boolean(errors.name))}`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-rust">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm text-ink-soft">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`mt-2 ${fieldClass(Boolean(errors.phone))}`}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-rust">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm text-ink-soft">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`mt-2 ${fieldClass(Boolean(errors.email))}`}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-rust">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="request" className="text-sm text-ink-soft">
          Special request <span className="text-ink-soft/60">(optional)</span>
        </label>
        <textarea
          id="request"
          rows={3}
          value={form.request}
          onChange={(e) => update('request', e.target.value)}
          className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors focus:border-ink"
          placeholder="Allergies, an anniversary, a preferred table..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full sm:w-auto sm:min-w-[220px] disabled:cursor-wait disabled:opacity-70"
      >
        {status === 'submitting' ? (
          <>
            <span
              aria-hidden="true"
              className="h-3.5 w-3.5 animate-spin rounded-full border-[1.5px] border-parchment-soft/40 border-t-parchment-soft"
            />
            Sending request
          </>
        ) : (
          'Request table'
        )}
      </button>
    </form>
  )
}

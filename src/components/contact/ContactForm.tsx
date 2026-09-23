import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import type { ContactFormData } from '../../types'

type Errors = Partial<Record<keyof ContactFormData, string>>

const emptyForm: ContactFormData = { name: '', email: '', message: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(data: ContactFormData): Errors {
  const errors: Errors = {}
  if (!data.name.trim()) errors.name = 'Enter your name.'
  if (!data.email.trim()) {
    errors.email = 'Enter an email address.'
  } else if (!emailPattern.test(data.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!data.message.trim()) errors.message = 'Enter a message.'
  return errors
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(emptyForm)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  function update<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validation = validate(form)
    setErrors(validation)

    if (Object.keys(validation).length > 0) {
      const firstInvalid = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')
      firstInvalid?.focus()
      return
    }

    setStatus('submitting')
    window.setTimeout(() => setStatus('success'), 900)
  }

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite">
        <p className="eyebrow">Message sent</p>
        <h2 className="mt-4 text-2xl leading-[1.2] sm:text-3xl">
          Thanks, {form.name.split(' ')[0]} — we’ll be in touch.
        </h2>
        <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-relaxed text-ink-soft">
          This is a portfolio demonstration, so nothing was actually sent. In a
          live version, our team would typically reply within one business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(emptyForm)
            setStatus('idle')
          }}
          className="btn-secondary mt-8"
        >
          Send another message
        </button>
      </div>
    )
  }

  const fieldClass = (hasError: boolean) =>
    `w-full border bg-transparent px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors ${
      hasError ? 'border-rust' : 'border-line focus:border-ink'
    }`

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm text-ink-soft">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className={`mt-2 ${fieldClass(Boolean(errors.name))}`}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-rust">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm text-ink-soft">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className={`mt-2 ${fieldClass(Boolean(errors.email))}`}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-rust">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm text-ink-soft">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={`mt-2 ${fieldClass(Boolean(errors.message))}`}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-xs text-rust">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full sm:w-auto sm:min-w-[200px] disabled:cursor-wait disabled:opacity-70"
      >
        {status === 'submitting' ? (
          <>
            <span
              aria-hidden="true"
              className="h-3.5 w-3.5 animate-spin rounded-full border-[1.5px] border-parchment-soft/40 border-t-parchment-soft"
            />
            Sending
          </>
        ) : (
          'Send message'
        )}
      </button>
    </form>
  )
}

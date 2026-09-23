import type { ReservationFormData } from '../../types'

export type ReservationErrors = Partial<Record<keyof ReservationFormData, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[+\d][\d\s-]{6,}$/

export function validateReservation(data: ReservationFormData): ReservationErrors {
  const errors: ReservationErrors = {}

  if (!data.date) errors.date = 'Choose a date.'
  if (!data.time) errors.time = 'Choose a time.'
  if (!data.guests) errors.guests = 'Choose a party size.'

  if (!data.name.trim()) errors.name = 'Enter the name for the booking.'

  if (!data.email.trim()) {
    errors.email = 'Enter an email address.'
  } else if (!emailPattern.test(data.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!data.phone.trim()) {
    errors.phone = 'Enter a phone number.'
  } else if (!phonePattern.test(data.phone.trim())) {
    errors.phone = 'Enter a valid phone number.'
  }

  return errors
}

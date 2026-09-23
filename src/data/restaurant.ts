export const restaurant = {
  name: 'Lagos Bistro',
  neighbourhood: 'Victoria Island, Lagos',
  addressLines: ['14 Ozumba Mbadiwe Avenue', 'Victoria Island, Lagos'],
  phoneDisplay: '+234 801 234 5678',
  phoneHref: 'tel:+2348012345678',
  emailReservations: 'reservations@lagosbistro.com',
  emailGeneral: 'hello@lagosbistro.com',
  hours: [
    { label: 'Lunch', days: 'Tuesday – Friday', time: '12:00 – 15:00' },
    { label: 'Dinner', days: 'Tuesday – Sunday', time: '18:00 – 23:00' },
    { label: 'Closed', days: 'Monday', time: '—' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
  ],
}

export const faqs = [
  {
    question: 'Is there a deposit for larger tables?',
    answer:
      'For parties of seven or more, we ask for a card to hold the table. It is not charged unless the reservation is missed without notice.',
  },
  {
    question: 'Can you accommodate dietary requirements?',
    answer:
      'Yes — note it under special requests when you book. Most of the menu can be adapted; our team will confirm by email or phone before your visit.',
  },
  {
    question: 'What should I wear?',
    answer: 'Smart, comfortable dress. No trainers or beachwear after 6pm.',
  },
  {
    question: 'Do you host private or corporate dining?',
    answer:
      'We hold a private room for up to eighteen guests, with a set or bespoke menu. Get in touch through the contact page and our events lead will follow up.',
  },
  {
    question: 'How long will you hold my table?',
    answer:
      'Fifteen minutes past your booking time. If you are running later than that, call ahead and we will do what we can.',
  },
]

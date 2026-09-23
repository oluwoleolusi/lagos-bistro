export type DietaryTag = 'vegetarian' | 'vegan' | 'gluten-free' | 'contains-nuts' | 'spicy'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  dietary?: DietaryTag[]
  image?: string
}

export type MenuCategoryId = 'small-plates' | 'mains' | 'sides' | 'desserts' | 'drinks'

export interface MenuCategory {
  id: MenuCategoryId
  label: string
  note?: string
  items: MenuItem[]
}

export interface FeaturedDish {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export interface ReservationFormData {
  date: string
  time: string
  guests: string
  name: string
  email: string
  phone: string
  request: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

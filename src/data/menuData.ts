import type { MenuCategory, FeaturedDish } from '../types'

export const menuCategories: MenuCategory[] = [
  {
    id: 'small-plates',
    label: 'Small Plates',
    note: 'For sharing, or a considered start.',
    items: [
      {
        id: 'sp-1',
        name: 'Smoked pepper prawns',
        description: 'Chargrilled prawns, ata rodo butter, lime, coriander oil.',
        price: 12000,
        dietary: ['spicy', 'gluten-free'],
      },
      {
        id: 'sp-2',
        name: 'Akara, pepper jam',
        description: 'Black-eyed pea fritters, scotch bonnet jam, whipped avocado.',
        price: 6500,
        dietary: ['vegetarian'],
      },
      {
        id: 'sp-3',
        name: 'Beef suya tartare',
        description: 'Hand-cut beef, yaji spice, pickled shallot, crisp plantain crumb.',
        price: 9800,
      },
      {
        id: 'sp-4',
        name: 'Grilled corn, uziza butter',
        description: 'Charred sweetcorn, uziza-brown butter, smoked chilli salt.',
        price: 5800,
        dietary: ['vegetarian', 'gluten-free'],
      },
    ],
  },
  {
    id: 'mains',
    label: 'Mains',
    note: 'Contemporary Nigerian cooking, plated with restraint.',
    items: [
      {
        id: 'mn-1',
        name: 'Suya-spiced short rib',
        description: 'Twelve-hour braise, yaji crust, charred corn purée, pickled onion.',
        price: 24500,
        dietary: ['gluten-free'],
      },
      {
        id: 'mn-2',
        name: 'Ofada rice risotto',
        description: 'Ofada rice, ayamase sauce, confit assorted meats, fried plantain chip.',
        price: 19000,
      },
      {
        id: 'mn-3',
        name: 'Smoked jollof, grilled catfish',
        description: 'Slow-smoked jollof reduction, pan-seared catfish, herb oil.',
        price: 21000,
        dietary: ['gluten-free'],
      },
      {
        id: 'mn-4',
        name: 'Egusi, braised lamb shoulder',
        description: 'Roasted egusi, bitterleaf, slow-cooked lamb shoulder, ofada rice cake.',
        price: 23000,
      },
      {
        id: 'mn-5',
        name: 'Grilled seabream, uziza butter',
        description: 'Whole seabream, uziza-brown butter, charred lime, greens.',
        price: 22000,
        dietary: ['gluten-free'],
      },
    ],
  },
  {
    id: 'sides',
    label: 'Sides',
    items: [
      {
        id: 'sd-1',
        name: 'Grilled plantain, chilli caramel',
        description: 'Sweet plantain, scotch bonnet caramel, sea salt.',
        price: 4500,
        dietary: ['vegetarian', 'gluten-free'],
      },
      {
        id: 'sd-2',
        name: 'Dodo fries, smoked pepper mayo',
        description: 'Plantain fries, smoked ata rodo mayo.',
        price: 4000,
        dietary: ['vegetarian', 'gluten-free'],
      },
      {
        id: 'sd-3',
        name: 'Sautéed greens, crayfish oil',
        description: 'Seasonal greens, crayfish oil, garlic, chilli.',
        price: 4200,
        dietary: ['gluten-free'],
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        id: 'ds-1',
        name: 'Zobo-poached pear',
        description: 'Hibiscus-poached pear, ginger cream, candied orange.',
        price: 6000,
        dietary: ['vegetarian', 'gluten-free'],
      },
      {
        id: 'ds-2',
        name: 'Chin chin crumble',
        description: 'Spiced chin chin crumble, tonka bean ice cream.',
        price: 6500,
        dietary: ['vegetarian'],
      },
      {
        id: 'ds-3',
        name: 'Coconut cashew cake',
        description: 'Toasted coconut sponge, palm sugar caramel, cashew praline.',
        price: 6200,
        dietary: ['vegetarian', 'contains-nuts'],
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    items: [
      {
        id: 'dr-1',
        name: 'Zobo spritz',
        description: 'Hibiscus, ginger, soda, orange peel.',
        price: 5000,
        dietary: ['vegan'],
      },
      {
        id: 'dr-2',
        name: 'Chapman, house bitters',
        description: 'Our take on the Lagos classic, house-made bitters.',
        price: 5500,
      },
      {
        id: 'dr-3',
        name: 'Tigernut horchata',
        description: 'Tigernut, cinnamon, date syrup.',
        price: 4800,
        dietary: ['vegan', 'gluten-free'],
      },
      {
        id: 'dr-4',
        name: 'Palm wine sour',
        description: 'Fermented palm wine, citrus, egg white.',
        price: 6000,
      },
    ],
  },
]

export const featuredDishes: FeaturedDish[] = [
  {
    id: 'feat-1',
    name: 'Suya-spiced short rib',
    description:
      'A twelve-hour braise finished under the grill in a yaji crust, set over charred corn purée.',
    price: 24500,
    image: `${import.meta.env.BASE_URL}images/dish-01.jpg`,
  },
  {
    id: 'feat-2',
    name: 'Smoked pepper prawns',
    description: 'Chargrilled prawns in ata rodo butter, lime, and coriander oil.',
    price: 12000,
    image: `${import.meta.env.BASE_URL}images/dish-02.jpg`,
  },
  {
    id: 'feat-3',
    name: 'Ofada rice risotto',
    description: 'Ofada rice cooked slow in ayamase sauce, confit assorted meats.',
    price: 19000,
    image: `${import.meta.env.BASE_URL}images/dish-03.jpg`,
  },
  {
    id: 'feat-4',
    name: 'Zobo-poached pear',
    description: 'Hibiscus-poached pear, ginger cream, candied orange.',
    price: 6000,
    image: `${import.meta.env.BASE_URL}images/dish-04.jpg`,
  },
]

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString('en-NG')}`
}

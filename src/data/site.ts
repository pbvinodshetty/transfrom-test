// Single source of truth for business details. Everything here was taken
// from the existing website; anything unverified is marked `null` and
// renders as a labelled placeholder.

export const site = {
  name: 'Transform Life Programs',
  legalName: 'Transform Life Programs®',
  descriptor: 'Healing & Counselling Centre',
  founder: 'Dr. Deepa Rani Shekar',
  url: 'https://transformlifeprograms.com',
  description:
    'Transform Life Programs is a healing and counselling centre in Rajarajeshwari Nagar, Bengaluru, led by Dr. Deepa Rani Shekar. Channelled healing programs, counselling, workshops and crystals, by appointment.',

  phones: {
    appointments: { label: 'Appointments', display: '+91 91489 40272', tel: '+919148940272' },
    crystals: { label: 'Crystals & classes', display: '+91 93539 50339', tel: '+919353950339' },
  },
  whatsapp: {
    appointments: '919148940272',
    crystals: '919353950339',
  },
  email: 'tlp.healing@gmail.com',

  address: {
    lines: [
      '#585, Rajarajeshwari Residency',
      'Flat G-3, 37th Main, 25th Cross Road',
      'Ideal Homes Township',
      'Kenchenhalli, Rajarajeshwari Nagar',
      'Bengaluru, Karnataka 560098',
    ],
    landmark: 'Opposite Pyramid',
    street: '#585, Rajarajeshwari Residency, Flat G-3, 37th Main, 25th Cross Rd, Ideal Homes Township, Kenchenhalli',
    locality: 'Rajarajeshwari Nagar',
    city: 'Bengaluru',
    region: 'Karnataka',
    postalCode: '560098',
    country: 'IN',
    mapQuery: 'Rajarajeshwari Residency, 37th Main, Ideal Homes Township, Rajarajeshwari Nagar, Bengaluru 560098',
  },

  hours: [
    { days: 'Monday – Friday', time: '10:30 am – 4:30 pm' },
    { days: 'Saturday & Sunday', time: 'As per scheduled classes' },
  ],
  appointmentNote: 'Consultations by confirmed appointment only. No walk-ins.',

  // The live site shows Facebook, X and Instagram icons with no links.
  // Add the real profile URLs here; empty entries are not rendered.
  social: {
    youtube: 'https://www.youtube.com/watch?v=omO_4gTzDd0&list=PLQJVlpI7w468puRB1zJw_eiDYxtaxeXpJ',
    instagram: '',
    facebook: '',
    x: '',
  },

  // Optional form backend (e.g. Formspree, Web3Forms, or your own API).
  // When empty, forms hand off to WhatsApp with the details pre-filled.
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',

  // Unverified facts. Leave null until confirmed by the business.
  pending: {
    yearsOfPractice: null as number | null,
    clientsServed: null as number | null,
  },
} as const;

export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const waLink = (number: string, text = '') =>
  `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// Show content placeholders (missing testimonials, fees etc.).
// Hidden by default; set PUBLIC_SHOW_PLACEHOLDERS=true to review content gaps.
export const showPlaceholders = import.meta.env.PUBLIC_SHOW_PLACEHOLDERS === 'true';

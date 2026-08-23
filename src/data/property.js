// =============================================================================
// PROPERTY DATA — 16723 Alderwood Mall Pkwy #C6, Lynnwood, WA 98037
// =============================================================================
// All copy, pricing, layout details, photos, FAQs, and contact info live here.
// Update these values and the entire site updates automatically.

export const property = {
  name: 'Trellis Townhouse · Unit C6',
  tagline:
    'Brand-new 4 bed / 4 bath townhouse for rent in Lynnwood — whole home lease, no housemates.',
  shortDescription:
    'A newly built 2025 D.R. Horton townhouse in the Trellis community. Entire 3-level home rental with 4 bedrooms, 4 bathrooms, 1,965 sq ft, attached garage parking, in-unit laundry, fenced yard, and quick access to Alderwood Mall, transit, and major highways.',
  address: {
    line1: '16723 Alderwood Mall Pkwy, Unit C6',
    city: 'Lynnwood',
    state: 'WA',
    zip: '98037',
    mapsEmbedQuery: '16723 Alderwood Mall Pkwy C6, Lynnwood, WA 98037',
  },
  stats: {
    bedrooms: 4,
    bathrooms: 4,
    sqft: 1965,
    yearBuilt: 2025,
    garage: 'Attached garage parking',
  },
  highlights: [
    'Whole home rental (single-family style)',
    'Brand new 2025 build',
    '4 bed / 4 bath / 1,965 sq ft',
    'Chef kitchen with peninsula',
    'Deck + fenced yard',
    'Attached garage parking',
    'In-unit laundry',
    'Close to Alderwood Mall & Light Rail',
  ],
}

// -----------------------------------------------------------------------------
// HERO IMAGES — Rotating hero background.
// -----------------------------------------------------------------------------
export const heroImages = [
  '/photos/exterior.jpg',
  '/photos/kitchen-living.jpg',
  '/photos/living-room.jpg',
]

// -----------------------------------------------------------------------------
// GALLERY — Property photos shown in the gallery section.
// -----------------------------------------------------------------------------
export const galleryImages = [
  {
    src: '/photos/kitchen.jpg',
    alt: 'Modern white kitchen with stainless steel appliances and quartz peninsula',
    caption: 'Chef’s Kitchen',
  },
  {
    src: '/photos/living-room.jpg',
    alt: 'Bright living room with deck access',
    caption: 'Living Room',
  },
  {
    src: '/photos/kitchen-living.jpg',
    alt: 'Open-concept kitchen and dining area',
    caption: 'Open Concept Layout',
  },
  {
    src: '/photos/master-bedroom.jpg',
    alt: 'Spacious 3rd floor master suite with mini-split AC',
    caption: 'Master Suite',
  },
  {
    src: '/photos/master-bathroom.jpg',
    alt: 'Master bathroom with glass shower and double vanity',
    caption: 'Master Bathroom',
  },
  {
    src: '/photos/master-closet.jpg',
    alt: 'Walk-in closet in the master suite',
    caption: 'Walk-In Closet',
  },
  {
    src: '/photos/room-2nd-floor.jpg',
    alt: 'Carpeted 2nd floor bedroom with mini-split AC',
    caption: '2nd Floor Bedroom',
  },
  {
    src: '/photos/bathroom-2nd-floor.jpg',
    alt: 'Private bathroom with tub-shower combo',
    caption: 'Private Bathroom',
  },
  {
    src: '/photos/room-3rd-floor-secondary.jpg',
    alt: '3rd floor secondary bedroom with large window',
    caption: '3rd Floor Bedroom',
  },
  {
    src: '/photos/bathroom-3rd-floor-secondary.jpg',
    alt: '3rd floor private bathroom with tub-shower combo',
    caption: '3rd Floor Bathroom',
  },
  {
    src: '/photos/room-backyard.jpg',
    alt: '1st floor bedroom with private backyard access',
    caption: '1st Floor Backyard Suite',
  },
  {
    src: '/photos/bathroom-backyard.jpg',
    alt: '1st floor private bathroom with glass shower',
    caption: '1st Floor Bathroom',
  },
  {
    src: '/photos/backyard.jpg',
    alt: 'Private fenced backyard with covered patio',
    caption: 'Private Backyard',
  },
  {
    src: '/photos/exterior.jpg',
    alt: 'Trellis townhouse community exterior',
    caption: 'Trellis Community',
  },
]

// -----------------------------------------------------------------------------
// LEASE DETAILS — Displayed in the "Lease Details" section.
// -----------------------------------------------------------------------------
export const rooms = [
  {
    id: 'entire-home',
    name: 'Entire Townhome Rental',
    price: 3595,
    utilities: null,
    utilitiesNote:
      'Utilities & services are tenant-paid (electricity, water, sewer/garbage, internet, and bi-weekly cleaning).',
    period: 'month',
    floor: '3 levels',
    available: 'Available Sep 19, 2026',
    status: 'available',
    image: '/photos/exterior.jpg',
    description:
      'Whole-home lease for a spacious and modern townhome in the Trellis community. Bright interiors, high ceilings, oversized garage, and easy commuter access.',
    features: [
      '4 bedrooms, 4 bathrooms, 1,965 sq ft',
      'Attached garage parking',
      'In-unit washer & dryer',
      'Chef kitchen with peninsula seating',
      'Deck + fenced yard',
      'Soaring ceilings and extra-large windows',
    ],
  },
]

// -----------------------------------------------------------------------------
// AMENITIES — Property-wide features shown with icons.
// Icon names must match keys in Amenities.jsx ICON_MAP.
// -----------------------------------------------------------------------------
export const amenities = [
  { icon: 'Wifi', label: 'High-Speed Internet Ready', detail: 'Ziply Fiber available' },
  { icon: 'Sofa', label: 'Spacious Living Area', detail: 'High ceilings, large windows' },
  { icon: 'ChefHat', label: 'Chef’s Kitchen', detail: 'Quartz counters, stainless appliances' },
  { icon: 'WashingMachine', label: 'In-Unit Laundry', detail: 'Washer & dryer included' },
  { icon: 'Car', label: 'Attached Garage Parking', detail: 'Garage + off-street parking' },
  { icon: 'Trees', label: 'Private Fenced Backyard', detail: 'Plus upper-level deck' },
  { icon: 'ShieldCheck', label: 'Smart Home + Security', detail: 'Landlord-managed systems' },
  { icon: 'Sparkles', label: 'Professional Cleaning Option', detail: 'Can be bundled in utilities/services fee' },
  { icon: 'Zap', label: 'Modern Systems', detail: 'Heat pump + wall unit A/C' },
]

// -----------------------------------------------------------------------------
// ABOUT — Tell renters about the home.
// -----------------------------------------------------------------------------
export const about = {
  heading: 'Brand-new construction, ready for full-home living.',
  paragraphs: [
    'Trellis is a new 2025 D.R. Horton townhouse community in the heart of Lynnwood. Unit C6 offers 1,965 sq ft across three levels with 4 bedrooms and 4 bathrooms — leased as one complete home.',
    'You get an open-concept main living floor with a chef-style peninsula kitchen, stainless appliances, dining/living flow, and abundant natural light. The home also includes a deck, fenced yard, and an oversized attached garage.',
    'Commuter access is excellent: close to Alderwood Mall, Costco, major highways, and Lynnwood City Center Link light rail. Ideal for households looking for a newer, low-maintenance home in a highly connected location.',
  ],
  hostName: 'Listing Manager',
  hostImage: '/photos/exterior.jpg',
}

// -----------------------------------------------------------------------------
// FAQ — Sourced from the active rental listing terms.
// -----------------------------------------------------------------------------
export const faqs = [
  {
    q: 'What is the minimum lease term?',
    a: 'Lease terms are flexible from 6 to 12 months, with 12 months preferred.',
  },
  {
    q: 'What are the move-in costs?',
    a: 'First month’s rent + security deposit (one month’s rent) + application fee (around $45 via Zillow).',
  },
  {
    q: 'Are utilities included in rent?',
    a: 'Utilities/services are tenant-paid. This typically includes electricity, water, sewer/garbage, internet, and optional recurring cleaning services.',
  },
  {
    q: 'Is this a room share or entire home lease?',
    a: 'This listing is for the entire townhouse as a single-family style lease (not a per-room rental).',
  },
  {
    q: 'Are pets allowed?',
    a: 'No. Pets are not allowed.',
  },
  {
    q: 'What are the house rules?',
    a: 'No smoking/vaping and no parties.',
  },
  {
    q: 'Is the home furnished?',
    a: 'The home is offered unfurnished.',
  },
  {
    q: 'How does parking work?',
    a: 'Attached garage parking is available. Ask for current parking details and any community parking restrictions.',
  },
  {
    q: 'What is the earliest move-in date?',
    a: 'Current availability is listed as Sep 19, 2026.',
  },
  {
    q: 'How do I apply or tour the home?',
    a: 'Send a message through the contact form with your move-in timeline and lease term preference. Tours and application details are coordinated directly.',
  },
]

// -----------------------------------------------------------------------------
// CONTACT — How renters reach you.
// -----------------------------------------------------------------------------
// To enable the contact form, create a free form at https://formspree.io and
// paste your endpoint here. Leave empty to use a mailto: fallback.
export const contact = {
  email: 'infy.anirban@gmail.com',
  formspreeEndpoint: 'https://formspree.io/f/xlgyrnvd',
  responseTime: 'Most inquiries answered within 24 hours.',
}

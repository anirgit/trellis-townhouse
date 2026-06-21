// =============================================================================
// PROPERTY DATA — 16723 Alderwood Mall Pkwy #C6, Lynnwood, WA 98037
// =============================================================================
// All copy, pricing, room details, photos, FAQs, and contact info live here.
// Update these values and the entire site updates automatically.

export const property = {
  name: 'Trellis Townhouse · Unit C6',
  tagline:
    'Private bedroom suites in a brand-new 2025 townhouse — just steps from Alderwood Mall in Lynnwood, WA.',
  shortDescription:
    'A brand-new, never-lived-in 2025 townhouse in the Trellis community by D.R. Horton. Three private bedroom suites available with shared modern kitchen, living, and dining areas. All utilities, high-speed internet, and bi-weekly cleaning of common areas included.',
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
    garage: '1-car attached',
  },
  highlights: [
    'Brand new 2025 build',
    'All utilities included',
    'High-speed Ziply Fiber',
    'Bi-weekly cleaning',
    'Smart home access',
    'Home security system',
    'Fenced backyard & deck',
    'Steps from Alderwood Mall',
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
// ROOMS — Each room shown as a card in the Rooms section.
// Pricing: base rent + $150 utilities/services fee = total monthly payment.
// -----------------------------------------------------------------------------
export const rooms = [
  {
    id: 'master',
    name: 'Plan B — 3rd Floor Master Suite',
    price: 1450,
    utilities: 150,
    period: 'month',
    floor: '3rd Floor',
    available: 'Available Now',
    status: 'available', // 'available' | 'soon' | 'rented'
    image: '/photos/master-bedroom.jpg',
    description:
      'Large room with attached private bathroom and walk-in closet.',
    features: [
      'Attached private bathroom with glass shower',
      'Double vanity & quartz counters',
      'Walk-in closet',
      'Top-floor privacy & natural light',
      'Mini-split AC for personal climate control',
    ],
  },
  {
    id: 'backyard',
    name: 'Plan A — 1st Floor Backyard Suite',
    price: 1350,
    utilities: 150,
    period: 'month',
    floor: '1st Floor',
    available: 'Available Now',
    status: 'available',
    image: '/photos/room-backyard.jpg',
    description:
      'Large room with attached private bathroom and private backyard access. No built-in closet.',
    features: [
      'Attached private bathroom with glass shower',
      'Direct private access to fenced backyard',
      'Spacious — among the largest rooms',
      'Ground-floor convenience, separated from common areas',
      'Mini-split AC for personal climate control',
      'Note: no built-in closet (room for a wardrobe)',
    ],
  },
  {
    id: 'private-bath',
    name: 'Plan C — 2nd Floor Private Bath Room',
    price: 1275,
    utilities: 150,
    period: 'month',
    floor: '2nd Floor',
    available: 'Available Now',
    status: 'available',
    image: '/photos/room-2nd-floor.jpg',
    description:
      'Private room with private side bathroom near kitchen and living area.',
    features: [
      'Private side bathroom (just outside the room)',
      'Closest to the kitchen & living area',
      'Bright with large window',
      'Best value of the three rooms',
      'Mini-split AC for personal climate control',
    ],
  },
  {
    id: 'rented-3rd-secondary',
    name: '3rd Floor Bedroom with Private Bath',
    price: null,
    utilities: null,
    period: 'month',
    floor: '3rd Floor',
    available: 'Currently Rented',
    status: 'rented',
    image: '/photos/room-3rd-floor-secondary.jpg',
    description:
      'Cozy 3rd-floor bedroom with attached private bathroom — currently occupied. Join the waitlist below to be notified when it becomes available.',
    features: [
      'Attached private bathroom (tub + shower combo)',
      'Quiet top-floor location, next to master suite',
      'Bright window, peaceful neighborhood views',
      'Mini-split AC for personal climate control',
    ],
  },
]

// -----------------------------------------------------------------------------
// AMENITIES — Property-wide features shown with icons.
// Icon names must match keys in Amenities.jsx ICON_MAP.
// -----------------------------------------------------------------------------
export const amenities = [
  { icon: 'Wifi', label: 'High-Speed Ziply Fiber', detail: 'Gigabit internet, included' },
  { icon: 'Sofa', label: 'Modern Shared Living', detail: 'High ceilings, large windows' },
  { icon: 'ChefHat', label: 'Chef’s Kitchen', detail: 'Quartz counters, stainless appliances' },
  { icon: 'WashingMachine', label: 'In-Unit Laundry', detail: 'Washer & dryer included' },
  { icon: 'Car', label: 'Garage & Driveway Parking', detail: 'Limited — by separate agreement' },
  { icon: 'Trees', label: 'Private Fenced Backyard', detail: 'Plus upper-level deck' },
  { icon: 'ShieldCheck', label: 'Home Security System', detail: 'Smart locks & monitoring' },
  { icon: 'Sparkles', label: 'Bi-Weekly Cleaning', detail: 'Professional service, common areas' },
  { icon: 'Zap', label: 'All Utilities Included', detail: 'Electric, water, sewer, garbage' },
]

// -----------------------------------------------------------------------------
// ABOUT — Tell renters about the home.
// -----------------------------------------------------------------------------
export const about = {
  heading: 'Brand-new construction. Designed for comfortable, modern co-living.',
  paragraphs: [
    'Trellis is a 2025 D.R. Horton townhouse community in the heart of Lynnwood — minutes from Alderwood Mall, top dining, and the new Lynnwood City Center Link light rail station. Our unit, C6, spans 1,965 sq ft across three levels, with four bedrooms and four bathrooms.',
    'Each bedroom is offered as a private suite with its own dedicated bathroom — either attached or just outside the door. Shared areas include the open-concept chef\'s kitchen with quartz counters and stainless appliances, dining room, bright living room, fenced backyard, and upper-level deck. Every room has its own mini-split AC for personal climate control.',
    'The home is fully equipped with a smart home system, security monitoring, and high-speed Ziply Fiber internet. This is a quiet, respectful household of working professionals who appreciate brand-new construction and a clean, well-maintained living space — bi-weekly professional cleaning of shared areas is included.',
  ],
  hostName: 'Property Manager',
  hostImage: '/photos/exterior.jpg',
}

// -----------------------------------------------------------------------------
// FAQ — Sourced from the active rental listing terms.
// -----------------------------------------------------------------------------
export const faqs = [
  {
    q: 'What is the minimum lease term?',
    a: 'Initial 6-month lease preferred, renewable upon mutual written agreement.',
  },
  {
    q: 'What are the move-in costs?',
    a: 'First month’s rent + the $150 utilities/services fee + security deposit (one month’s base rent for your selected room) + a $150 non-refundable cleaning fee.',
  },
  {
    q: 'What does the $150 utilities & services fee cover?',
    a: 'Electricity, water, sewer, garbage, high-speed Ziply internet, bi-weekly professional cleaning of shared areas, smart home access, and home security system. No surprise utility bills.',
  },
  {
    q: 'Is renter’s insurance required?',
    a: 'Yes — renter’s insurance is required for all tenants. Affordable policies typically run $10–$20/month.',
  },
  {
    q: 'Are pets allowed?',
    a: 'No — pets are not allowed in this household.',
  },
  {
    q: 'What about smoking, vaping, and parties?',
    a: 'Smoking and vaping are not permitted anywhere on the property. Parties are not allowed. Quiet, respectful guests are welcome.',
  },
  {
    q: 'Can I have overnight guests?',
    a: 'Yes — overnight guests are allowed for up to 1 week every 6 months with prior approval.',
  },
  {
    q: 'How does parking work?',
    a: 'Parking is limited. One garage spot and one driveway spot may be available by separate agreement — please discuss before move-in. Guest parking is first-come, first-served and not guaranteed. Note: no overnight parking near the mailbox.',
  },
  {
    q: 'Is the room single or double occupancy?',
    a: 'Single occupancy only. Each bedroom is a private suite for one person.',
  },
  {
    q: 'How do I apply or tour the home?',
    a: 'Send a message via the contact form below with your preferred room, ideal move-in date, and a bit about yourself. I’ll get back within 24 hours to schedule a tour and walk through the short application.',
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

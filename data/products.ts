import { Product, Review, InstagramPost } from '@/types/product';

export const curatedProducts: Product[] = [
  {
    id: 'celeste-diamond-ring',
    name: 'Celeste Diamond Ring',
    category: 'rings',
    categoryLabel: 'Rings • 925 Silver',
    price: 18499,
    oldPrice: 22000,
    badge: '-15% OFF',
    badgeType: 'discount',
    image: '/images/prod-celeste-diamond-ring.webp',
    imageAlt:
      'Exquisite brilliant round moissanite solitaire ring mounted on sterling silver band with sparkling micro pave side stones',
    subtitle: 'Solitaire Moissanite Center with micro-pavé bridge',
    description:
      'Hand-cut round brilliant moissanite stone set in hypoallergenic 925 sterling silver with rhodium polish for lifetime radiance.',
    options: ['925 Silver', '18K Gold', 'Rose Gold'],
  },
  {
    id: 'aurelia-pearl-necklace',
    name: 'Aurelia Pearl Necklace',
    category: 'necklaces',
    categoryLabel: 'Necklaces • Fine Pearls',
    price: 34900,
    badge: 'Bestseller',
    badgeType: 'bestseller',
    image: '/images/prod-aurelia-pearl-necklace.webp',
    imageAlt:
      'Lustrous natural South Sea freshwater pearl necklace featuring a hand-carved 18K yellow gold floral filigree clasp',
    subtitle: 'South Sea Pearls with 18K Solid Gold Clasp',
    description:
      'Individually hand-knotted on pure silk thread. Features AAA graded 8-9mm lustrous South Sea pearls finished with an 18K sovereign gold clasp.',
    options: ['925 Silver', '18K Gold', 'Rose Gold'],
  },
  {
    id: 'elan-gold-earrings',
    name: 'Élan Gold Earrings',
    category: 'earrings',
    categoryLabel: 'Earrings • Sculpted Gold',
    price: 12800,
    oldPrice: 14500,
    badge: '-12% OFF',
    badgeType: 'discount',
    image: '/images/prod-elan-gold-earrings.webp',
    imageAlt:
      'Sculpted modern yellow gold teardrop earrings catching ambient studio lighting on off-white textured backdrop',
    subtitle: 'Fluid teardrop silhouette with architectural mirror sheen',
    description:
      'Fluid, sculptural drop silhouettes that move gracefully with every gesture. Hollowed interior for feather-light day-to-night comfort.',
    options: ['925 Silver', '18K Gold', 'Rose Gold'],
  },
  {
    id: 'luna-tennis-bracelet',
    name: 'Luna Tennis Bracelet',
    category: 'bracelets',
    categoryLabel: 'Bracelets • Classic Pavé',
    price: 28500,
    badge: 'Icon',
    badgeType: 'icon',
    image: '/images/prod-luna-tennis-bracelet.webp',
    imageAlt:
      'High jewelry diamond tennis bracelet with continuous line of round stones laid out on sand-colored linen fabric',
    subtitle: 'Pavé brilliant stones with dual safety lock',
    description:
      'Classic four-prong articulation ensures supreme flexibility and continuous sparkle. Finished with an invisible dual-safety clasp.',
    options: ['925 Silver', '18K Gold', 'Rose Gold'],
  },
  {
    id: 'amara-solitaire-ring',
    name: 'Amara Solitaire Ring',
    category: 'rings',
    categoryLabel: 'Rings • Solitaires',
    price: 21000,
    badge: 'Heritage',
    badgeType: 'heritage',
    image: '/images/prod-amara-solitaire-ring.webp',
    imageAlt:
      'Royal six-prong diamond solitaire engagement ring highlighted against a warm cream travertine stone background',
    subtitle: 'Six-prong sovereign setting with knife-edge shank',
    description:
      'Elevated crown architectural prongs maximize natural light refraction across the central 1.5ct cushion-cut precious jewel.',
    options: ['925 Silver', '18K Gold', 'Rose Gold'],
  },
  {
    id: 'serene-pearl-drops',
    name: 'Serene Pearl Drops',
    category: 'earrings',
    categoryLabel: 'Earrings • Baroque Organic',
    price: 9950,
    oldPrice: 11500,
    badge: '-13% OFF',
    badgeType: 'discount',
    image: '/images/prod-serene-pearl-drops.webp',
    imageAlt:
      'Baroque freshwater pearl drop earrings suspended from delicate diamond encrusted huggie hoops on beige silk backdrop',
    subtitle: 'Lustrous one-of-a-kind drops with pavé micro-huggies',
    description:
      'Each pair is distinctly singular. Organic baroque pearls suspended from sparkling pavé huggies in sterling silver.',
    options: ['925 Silver', '18K Gold', 'Rose Gold'],
  },
];

export const newArrivals: Product[] = [
  {
    id: 'solstice-moonbeam-pendant',
    name: 'Solstice Moonbeam Pendant',
    category: 'pendants',
    categoryLabel: 'Pendants',
    price: 14200,
    badge: 'NEW',
    badgeType: 'new',
    image: '/images/arrival-solstice-moonbeam.webp',
    imageAlt:
      'Crescent moonbeam silver pendant adorned with shimmering uncut diamonds on warm silk ground',
    subtitle: 'Fine cable chain with pavé crescent motif',
    description:
      'Fine cable chain with pavé crescent motif cast in 925 sterling silver.',
  },
  {
    id: 'kavya-emerald-studs',
    name: 'Kavya Emerald Studs',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 19800,
    badge: 'NEW',
    badgeType: 'new',
    image: '/images/arrival-kavya-emerald.webp',
    imageAlt:
      'Rich Zambian emerald stud earrings in vintage crown prongs with champagne diamond accents',
    subtitle: 'Natural oval emeralds with diamond halos',
    description:
      'Natural oval Zambian emeralds with sparkling diamond halos.',
  },
  {
    id: 'devi-heritage-bangle',
    name: 'Devi Heritage Bangle',
    category: 'bangles',
    categoryLabel: 'Bangles',
    price: 26400,
    badge: 'NEW',
    badgeType: 'new',
    image: '/images/arrival-devi-heritage.webp',
    imageAlt:
      'Architectural hand-carved heritage bangle bracelet with traditional filigree openwork and delicate pearl finials',
    subtitle: 'Carved Jaipur filigree with concealed spring latch',
    description:
      'Architectural hand-carved heritage bangle with traditional Jaipur filigree and concealed latch.',
  },
  {
    id: 'vesper-diamond-huggies',
    name: 'Vesper Diamond Huggies',
    category: 'huggies',
    categoryLabel: 'Huggies',
    price: 16900,
    badge: 'NEW',
    badgeType: 'new',
    image: '/images/arrival-vesper-diamond.webp',
    imageAlt:
      'Chic diamond encrusted huggie earrings in 18k yellow gold close up on model ear lobe',
    subtitle: 'Seamless hinge with brilliant channel stones',
    description:
      'Chic diamond encrusted huggie earrings in 18k yellow gold with seamless hinge.',
  },
];

export const customerReviews: Review[] = [
  {
    id: 'review-1',
    rating: 5,
    headline: '"Felt like opening Parisian couture."',
    content:
      'The Celeste Ring exceeded all expectations. The packaging alone felt like opening a piece of Parisian couture. The moissanite sparkle is remarkably deep and pure.',
    author: 'Ananya Deshmukh',
    location: 'Mumbai, Maharashtra',
    isVerified: true,
  },
  {
    id: 'review-2',
    rating: 5,
    headline: '"Understated yet stunning."',
    content:
      'I wore the Aurelia Pearl Necklace for my reception dinner. Understated yet received compliments the entire evening. The gold clasp is genuine fine jewelry level art.',
    author: 'Rhea Singhania',
    location: 'New Delhi',
    isVerified: true,
  },
  {
    id: 'review-3',
    rating: 5,
    headline: '"Zero skin irritation, superb hallmark."',
    content:
      'Exceptional silver quality with zero skin irritation for my sensitive skin. Fast insured delivery and authentic hallmarking certificate clearly verifiable online.',
    author: 'Dr. Malini Iyer',
    location: 'Bengaluru, Karnataka',
    isVerified: true,
  },
];

export const instagramPosts: InstagramPost[] = [
  {
    id: 'ig-1',
    image: '/images/ig-1.webp',
    imageAlt:
      'Chic modern Indian woman wearing an ivory linen shirt paired with a delicate gold pendant and stacked pearl rings',
    likes: '1.4k',
    comments: '82',
    url: 'https://instagram.com',
  },
  {
    id: 'ig-2',
    image: '/images/ig-2.webp',
    imageAlt:
      'Behind the scenes high resolution close up of an artisan polishing a solid gold diamond ring in workshop',
    likes: '2.1k',
    comments: '114',
    url: 'https://instagram.com',
  },
  {
    id: 'ig-3',
    image: '/images/ig-3.webp',
    imageAlt:
      'Indian bride wearing subtle luxury solitaire earrings and gold hair jewelry looking into mirror',
    likes: '3.8k',
    comments: '249',
    url: 'https://instagram.com',
  },
  {
    id: 'ig-4',
    image: '/images/ig-4.webp',
    imageAlt:
      'Aurelia Jewels signature black and gold velvet jewelry boxes arranged in artful still life with white orchids',
    likes: '940',
    comments: '42',
    url: 'https://instagram.com',
  },
  {
    id: 'ig-5',
    image: '/images/ig-5.webp',
    imageAlt:
      'Sunlight hitting multiple diamond bracelets and tennis necklaces causing prismatic spectrum flare on silk',
    likes: '4.5k',
    comments: '180',
    url: 'https://instagram.com',
  },
  {
    id: 'ig-6',
    image: '/images/ig-6.webp',
    imageAlt:
      'Young Indian woman styling everyday minimal gold huggies and necklace with casual black blazer in cafe',
    likes: '1.8k',
    comments: '95',
    url: 'https://instagram.com',
  },
];

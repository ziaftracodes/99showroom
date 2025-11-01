import { Product } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Aura Chair',
    description: 'An ergonomic marvel crafted from a single piece of recycled polymer. Its form adapts to your posture, providing unparalleled comfort and a statement of minimalist design.',
    price: '$1,250',
    imageUrls: [
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1200',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200',
      'https://images.unsplash.com/photo-1580480055273-228ff53825b2?q=80&w=1200',
    ],
    category: 'Tech',
    colors: [
        { name: 'Onyx', hex: '#1a1a1a' },
        { name: 'Chalk', hex: '#eeeeee' },
        { name: 'Sage', hex: '#a3b8a3' },
    ],
    sizes: ['One Size'],
  },
  {
    id: 2,
    name: 'Chrono Watch',
    description: 'A timepiece that merges classic mechanics with a futuristic aesthetic. Featuring a transparent dial and a self-winding movement powered by kinetic energy.',
    price: '$3,800',
    imageUrls: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200',
      'https://images.unsplash.com/photo-1547996160-81dfa387245d?q=80&w=1200',
      'https://images.unsplash.com/photo-1620625515032-6ed0a1739554?q=80&w=1200',
    ],
    category: 'Tech',
    bestSeller: true,
    colors: [
        { name: 'Titanium', hex: '#888888' },
        { name: 'Phantom Black', hex: '#222222' },
        { name: 'Rose Gold', hex: '#b76e79' },
    ]
  },
  {
    id: 3,
    name: 'Echo Speaker',
    description: 'A high-fidelity audio system encased in hand-polished concrete. Delivers a rich, immersive soundscape that fills any room with acoustic purity.',
    price: '$990',
    imageUrls: [
      'https://images.unsplash.com/photo-1545454675-3533b3341b89?q=80&w=1200',
      'https://images.unsplash.com/photo-1619551859789-9a63a9254cce?q=80&w=1200',
    ],
    category: 'Tech',
    colors: [
        { name: 'Concrete', hex: '#9a9a9a' },
        { name: 'Graphite', hex: '#444444' },
    ],
    sizes: ['Standard', 'Large'],
  },
  {
    id: 4,
    name: 'Vessel Carafe',
    description: 'A hand-blown glass carafe designed to aerate your favorite beverages. Its unique shape enhances the aroma and flavor profile through elegant fluid dynamics.',
    price: '$320',
    imageUrls: [
      'https://images.unsplash.com/photo-1544890225-2f3faec4446f?q=80&w=1200',
    ],
    category: 'Tech',
    colors: [
      { name: 'Clear', hex: '#ffffff' },
      { name: 'Smoked', hex: '#666666' },
    ],
    sizes: ['750ml'],
  },
  {
    id: 5,
    name: 'Focus Desk Lamp',
    description: 'An intelligent lighting solution that mimics natural daylight. Control brightness and temperature via touchless gestures to create your perfect work environment.',
    price: '$650',
    imageUrls: [
      'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1200',
    ],
    category: 'Tech',
    colors: [
        { name: 'Matte Black', hex: '#1a1a1a' },
        { name: 'Brushed Aluminum', hex: '#cccccc' },
    ]
  },
  {
    id: 6,
    name: 'Nomad Backpack',
    description: 'Constructed from weatherproof technical canvas and Italian leather. A modular design with magnetic closures for the modern urban explorer.',
    price: '$750',
    imageUrls: [
      'https://images.unsplash.com/photo-1581655353026-3a5b05a74368?q=80&w=1200',
      'https://images.unsplash.com/photo-1553062407-98eeb6e0e5c8?q=80&w=1200'
    ],
    category: 'Clothing',
    colors: [
        { name: 'Slate Gray', hex: '#4a5568' },
        { name: 'Desert Tan', hex: '#c3b091' },
    ],
    sizes: ['20L', '30L']
  },
  {
    id: 7,
    name: 'Aether Hoodie',
    description: 'A lightweight, breathable hoodie made from self-regulating smart fabric. Perfect for any climate, it offers both comfort and a futuristic silhouette.',
    price: '$450',
    imageUrls: [
      'https://images.unsplash.com/photo-1620799140408-edc6d5f9650d?q=80&w=1200',
    ],
    category: 'Clothing',
    colors: [
        { name: 'Fog', hex: '#d1d5db' },
        { name: 'Midnight', hex: '#111827' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 8,
    name: 'Slate Tablet',
    description: 'A digital notebook with an e-ink display that feels like paper. Designed for creators who value focus and tactile feedback in a distraction-free device.',
    price: '$1,100',
    imageUrls: [
      'https://images.unsplash.com/photo-1587428128453-e35f6063b516?q=80&w=1200',
    ],
    category: 'Tech',
    colors: [
      { name: 'Charcoal', hex: '#36454F' }
    ]
  },
  {
    id: 9,
    name: 'Momentum Pen',
    description: 'A precision-machined titanium writing instrument with a satisfying magnetic cap. Perfectly balanced for a superior writing experience that lasts a lifetime.',
    price: '$210',
    imageUrls: [
      'https://images.unsplash.com/photo-1583495914285-78755a7cf25a?q=80&w=1200',
    ],
    category: 'Tech',
    colors: [
      { name: 'Titanium', hex: '#888888' },
      { name: 'Obsidian', hex: '#000000' }
    ]
  },
  {
    id: 10,
    name: 'Kinetic Weave Jacket',
    description: 'A jacket woven from responsive fibers that harden on impact. Offers unparalleled protection while remaining flexible and lightweight for daily wear.',
    price: '$1,300',
    imageUrls: [
      'https://images.unsplash.com/photo-1592878912213-f5ad50a3342?q=80&w=1200',
    ],
    category: 'Clothing',
    colors: [
        { name: 'Carbon Fiber', hex: '#262626' },
        { name: 'Lunar Silver', hex: '#e5e7eb' },
    ],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 11,
    name: 'Newton Chess Set',
    description: 'A gravity-defying chess set where weighted, metallic pieces float over a magnetic board. A game of strategy that doubles as a kinetic sculpture.',
    price: '$2,400',
    imageUrls: [
      'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=1200',
    ],
    category: 'Tech',
  },
  {
    id: 12,
    name: 'Oracle Trench',
    description: 'A classic trench coat reimagined with smart fabric that adapts to the weather. It remains breathable in the sun and water-resistant in the rain.',
    price: '$1,950',
    imageUrls: [
      'https://images.unsplash.com/photo-1616766159677-624068345759?q=80&w=1200',
    ],
    category: 'Clothing',
    colors: [
      { name: 'Khaki', hex: '#C3B091' },
      { name: 'Midnight', hex: '#003366' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 13,
    name: 'Gravity Boots',
    description: 'Electromagnetic boots that allow for variable traction control. Designed for urban explorers who defy limits and redefine pathways.',
    price: '$2,100',
    imageUrls: [
      'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1200',
    ],
    category: 'Clothing',
    colors: [
      { name: 'Steel', hex: '#8c8c8c' },
      { name: 'Infrared', hex: '#ff4500' },
    ],
    sizes: ['8', '9', '10', '11', '12'],
  },
  {
    id: 14,
    name: 'Chameleon Sneakers',
    description: 'Sneakers with an e-ink upper that can change color and pattern via a mobile app. Match any outfit, any mood, any time.',
    price: '$850',
    imageUrls: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200',
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1200',
    ],
    category: 'Clothing',
  },
  {
    id: 15,
    name: 'Quantum Scarf',
    description: 'A scarf woven from light-refracting fibers, creating a subtle, shimmering effect. It\'s both a statement piece and a shield from the mundane.',
    price: '$380',
    imageUrls: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200',
    ],
    category: 'Clothing',
    colors: [
        { name: 'Cosmic Dust', hex: '#4a4a4a' },
        { name: 'Nebula Blue', hex: '#52528C' },
    ],
    sizes: ['One Size'],
  },
  {
    id: 16,
    name: 'Stealth T-Shirt',
    description: 'A seamless t-shirt made from sound-dampening fabric. It offers a sleek profile and a pocket of personal silence in a noisy world.',
    price: '$250',
    imageUrls: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200',
    ],
    category: 'Clothing',
    colors: [
        { name: 'Void Black', hex: '#111111' },
        { name: 'Ash Gray', hex: '#b2beb5' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 17,
    name: 'Portal Mirror',
    description: 'A smart mirror that streams curated art and ambient visuals. It doubles as a high-resolution display, seamlessly blending technology into your living space.',
    price: '$2,800',
    imageUrls: [
      'https://images.unsplash.com/photo-1582792153202-7a02d854a851?q=80&w=1200',
    ],
    category: 'Tech',
    colors: [
      { name: 'Silver', hex: '#c0c0c0' },
      { name: 'Graphite', hex: '#383838' },
    ],
    sizes: ['32-inch', '48-inch'],
  },
];
// Crystal catalogue, transcribed from the existing Crystals & Shop pages
// (current selling prices). Health and disease claims from the old copy
// have been removed; traditional associations are kept.

export type ProductCategory = 'bracelet' | 'blend' | 'mala' | 'sacred';

export const productCategories: Record<ProductCategory, string> = {
  bracelet: 'Single-stone bracelets',
  blend: 'Intention blends',
  mala: 'Malas',
  sacred: 'Sacred objects',
};

// Crystal categories reuse the four theme colours.
export const productTones: Record<ProductCategory, string> = {
  bracelet: 'tone-soul',
  blend: 'tone-self',
  mala: 'tone-body',
  sacred: 'tone-signature',
};

export const productBlurbs: Record<ProductCategory, string> = {
  bracelet: 'Classic stretch bracelets, each made from a single stone.',
  blend: 'Combinations of stones chosen for a particular intention.',
  mala: '108-bead malas for meditation, chanting and daily wear.',
  sacred: 'Pyramids, trees, coins and more for your home or workplace.',
};

export interface Product {
  id: string;
  name: string;
  title: string;
  category: ProductCategory;
  price: number;
  image: string;
  associations: string[];
  contains?: string;
  note?: string;
}

export const products: Product[] = [
  // Single-stone bracelets
  { id: 'rose-quartz', name: 'Rose Quartz', title: 'The Cosmic Heart’s First Breath', category: 'bracelet', price: 777, image: 'p-22', associations: ['Unconditional love', 'Peace & harmony', 'Restful sleep', 'Abundance'] },
  { id: 'amethyst', name: 'Amethyst', title: 'The Divine Alchemist & Celestial Guardian', category: 'bracelet', price: 777, image: 'p-2-1', associations: ['A calm, soothed mind', 'Intuition', 'Spiritual awareness', 'Clear thinking'] },
  { id: 'citrine', name: 'Citrine', title: 'The Alchemist’s Sun & Liquid Prosperity', category: 'bracelet', price: 777, image: 'p-9', associations: ['Success & prosperity', 'Clarity & confidence', 'Releasing negativity', 'Cleansing'] },
  { id: 'tigers-eye', name: 'Tiger’s Eye', title: 'The Solar Plexus Sun & Earth Integrator', category: 'bracelet', price: 777, image: 'p-11', associations: ['Action & execution', 'Decision making', 'Clearing clouded emotions'] },
  { id: 'black-tourmaline', name: 'Black Tourmaline', title: 'The Eternal Guardian & Earth’s Purifier', category: 'bracelet', price: 777, image: 'p-7-1', associations: ['Protection', 'Clearing negative energy', 'Grounding'] },
  { id: 'moonstone', name: 'Moonstone', title: 'The Liquid Mirror of the Soul', category: 'bracelet', price: 777, image: 'p-13', associations: ['Emotional calm', 'Spiritual growth', 'Clarity of mind', 'Intuition & dreams'] },
  { id: 'green-aventurine', name: 'Green Aventurine', title: 'The Heart’s Emerald Ray', category: 'bracelet', price: 777, image: 'p-1-1', associations: ['Luck & fortune', 'New ventures & business', 'Optimism', 'Career growth'] },
  { id: 'cats-eye', name: 'Cat’s Eye', title: 'The Seer in the Shadows', category: 'bracelet', price: 777, image: 'p-24', associations: ['Money crystal', 'Clearing money blocks', 'Financial abundance'] },
  { id: 'obsidian', name: 'Obsidian', title: 'The Void Mirror', category: 'bracelet', price: 777, image: 'p-20', associations: ['Releasing negative emotions', 'Easing mental stress', 'A protective shield'] },
  { id: 'turquoise', name: 'Turquoise', title: 'The Sky Stone & The Earth’s True Voice', category: 'bracelet', price: 777, image: 'p-23', associations: ['Good fortune', 'Harmony in relationships', 'Wholeness'] },
  { id: 'green-jade', name: 'Green Jade', title: 'The Celestial Heart Stone', category: 'bracelet', price: 666, image: 'p-12', associations: ['Purification', 'Eternal love', 'Balance'] },
  { id: 'carnelian', name: 'Carnelian', title: 'The Sacred Blood of the Earth', category: 'bracelet', price: 666, image: 'p-17', associations: ['Creative courage', 'Releasing negative emotions', 'Relationships', 'Safety & grounding'] },
  { id: 'clear-quartz', name: 'Clear Quartz', title: 'The Liquid Light of Cosmic Order', category: 'bracelet', price: 666, image: 'p-25', associations: ['A calm, cool mind', 'Amplifies energy & intention', 'Psychic awareness'] },
  { id: 'unakite', name: 'Unakite', title: 'The Heart of the Mountain', category: 'bracelet', price: 666, image: 'p-8-1', associations: ['Nurturing & compassion', 'Emotional balance', 'Clearing karma'] },
  { id: 'lava', name: 'Lava', title: 'The Phoenix Stone of Primordial Rebirth', category: 'bracelet', price: 666, image: 'p-4-1', associations: ['Vitality', 'Courage & strength', 'Inner peace', 'Grounding'] },
  { id: 'yellow-aventurine', name: 'Yellow Aventurine', title: 'The Alchemist’s Sun', category: 'bracelet', price: 666, image: 'p-19', associations: ['Tranquillity', 'Easing stress', 'Dream recall', 'Protection on journeys'] },
  { id: 'lapis-lazuli', name: 'Lapis Lazuli', title: 'The Stone of Celestial Truth', category: 'bracelet', price: 666, image: 'p-3-1', associations: ['Self-awareness & inner truth', 'Clear expression', 'Inspiration'] },
  { id: 'bloodstone', name: 'Bloodstone', title: 'The Warrior’s Heart', category: 'bracelet', price: 666, image: 'p-27', associations: ['Courage', 'Intuition & creativity', 'Grounding & protection'] },
  { id: 'garnet', name: 'Garnet', title: 'The Keeper of Sacred Fire', category: 'bracelet', price: 666, image: 'p-21', associations: ['Vital force', 'Devotion', 'Resolving debts & property matters'] },
  { id: 'red-jasper', name: 'Red Jasper', title: 'The Stone of Endurance', category: 'bracelet', price: 666, image: 'p-18', associations: ['Stamina & energy', 'Confidence & courage', 'Emotional balance'] },

  // Intention blends
  { id: 'money-magnet', name: 'Money Magnet', title: 'The Wrist-Worn Vortex of Abundance', category: 'blend', price: 888, image: 'p-10', associations: ['Attracting money'], contains: 'Green Jade Zibu stone, Tiger’s Eye, Pyrite, Green Jade, Citrine' },
  { id: 'success', name: 'Success Bracelet', title: 'The Conduit of Conscious Manifestation', category: 'blend', price: 888, image: 'p-6', associations: ['Clarity & confidence', 'Success & prosperity', 'Releasing negativity'], contains: 'Pyrite success sigil, Citrine, Pyrite' },
  { id: 'triple-p', name: 'Triple P (3P)', title: 'The Trinity of Sovereign Creation', category: 'blend', price: 888, image: 'p-5-1', associations: ['Protection', 'Prosperity', 'Progress', 'Happiness & peace'], contains: 'Green Aventurine, Clear Quartz, Black Tourmaline, Amethyst, Pyrite, Citrine, Cat’s Eye, Yellow Aventurine' },
  { id: 'balance', name: 'Balance Bracelet', title: 'The Harmonizer’s Circuit', category: 'blend', price: 777, image: 'p-14', associations: ['Heart & crown chakra balance', 'Love & abundance', 'Calm in place of anger and fear'] },
  { id: 'education', name: 'Education Bracelet', title: 'The Luminous Circuit of Learning', category: 'blend', price: 777, image: 'p-6-1', associations: ['Focus & concentration', 'Memory', 'Studies & opportunities'], note: 'Standard kids’ size.' },
  { id: 'seven-chakra', name: '7 Chakra Bracelet', title: 'Your Internal Cosmic Architecture', category: 'blend', price: 666, image: 'p-26', associations: ['Balances all seven chakras', 'General wellbeing', 'Abundance & peace'] },
  { id: 'pyrite-seven-chakra', name: 'Pyrite 7 Chakra', title: 'The Alchemist’s Fire', category: 'blend', price: 666, image: 'p-15', associations: ['Abundance & money', 'Memory & intellect', 'Shielding'] },
  { id: 'chakra-mantra', name: 'Chakra with Mantra', title: 'The Wrist-Worn Symphony of Awakening', category: 'blend', price: 666, image: 'p-16', associations: ['Wealth, with Buddhist chanting'] },

  // Malas
  { id: 'seven-chakra-mala', name: '7 Chakra Mala', title: 'The Ascension Ladder & The Spine of Light', category: 'mala', price: 2222, image: 'p-4', associations: ['Opens & balances the chakras', 'Cleanses the aura', 'Supports mindfulness'] },
  { id: 'money-mala', name: 'Money & Wellness Mala', title: 'For abundance and a healthy body', category: 'mala', price: 2222, image: 'p-5', associations: ['Attracting money & wealth', 'Supports weight-management intentions'] },

  // Sacred objects
  { id: 'seven-chakra-pyramid', name: '7 Chakra Pyramid', title: 'The Stargate of Sovereign Alignment', category: 'sacred', price: 2222, image: 'p-8', associations: ['Balances the chakras', 'Positive vibration', 'Harmony in relationships'] },
  { id: 'evil-eye-pyramid', name: 'Evil Eye Pyramid', title: 'The Sentinel of Sovereignty', category: 'sacred', price: 2222, image: 'p-1', associations: ['Protection for home or business', 'Peace & calm', 'Clearing blocked energy'] },
  { id: 'seven-chakra-tree', name: '7 Chakra Tree', title: 'The Cosmic Arbor Vitae', category: 'sacred', price: 2222, image: 'p-chakra-tree', associations: ['Balances the chakras', 'Cleanses the aura', 'Harmony at home'] },
  { id: 'gomti-tree', name: 'Gomti Tree', title: 'The Spiral of Fortune', category: 'sacred', price: 2222, image: 'p-3', associations: ['Wealth & abundance', 'Family harmony', 'Good fortune', 'Vaastu balance'] },
  { id: 'kanakadhara', name: 'Kanakadhara Liquid', title: 'With gold flakes — The Liquid Sun', category: 'sacred', price: 2222, image: 'p-kanakadhara', associations: ['Prosperity & wealth', 'Removing financial obstacles', 'Divine grace'] },
  { id: 'money-coin-set', name: 'Money Coin Set', title: 'The Sovereign’s Treasury', category: 'sacred', price: 999, image: 'p-7', associations: ['Attracting cash flow', 'Breaking negative money habits', 'Angelic numbers 808 · 520 · 741'], note: 'Set of 2 coins with sigil. Keep in your cash box or money tray.' },
];

export const storePolicy = [
  'Bracelets are available in standard sizes only and cannot be customised.',
  'Once an order is placed it cannot be cancelled or exchanged.',
  'Every order is confirmed personally by our team on WhatsApp before payment.',
];

export const formatINR = (n: number) => `₹${n.toLocaleString('en-IN')}`;

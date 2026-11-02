// Program content adapted from the existing website. Copy has been edited
// for clarity and to remove medical or outcome guarantees. Details marked
// `null` were not published on the old site and must be confirmed.

export type CategoryId = 'signature' | 'body' | 'self' | 'soul';

export const categories: Record<CategoryId, { name: string; blurb: string; tone: string; image: string }> = {
  signature: {
    name: 'Signature modalities',
    blurb: 'Systems channelled by Dr. Deepa Rani Shekar and taught only at Transform Life Programs.',
    tone: 'tone-signature',
    image: 'founder/talk-1',
  },
  body: {
    name: 'Body & natural healing',
    blurb: 'Hands-on practices for the physical body — touch, crystals, colour and the kitchen.',
    tone: 'tone-body',
    image: 'gallery/session-04',
  },
  self: {
    name: 'Abundance & self',
    blurb: 'Workshops on self-worth, money, belief and the questions that open new possibilities.',
    tone: 'tone-self',
    image: 'gallery/session-02',
  },
  soul: {
    name: 'Soul & spirit',
    blurb: 'Deeper spiritual work with karma, the Akashic Records, the angelic realm and the light body.',
    tone: 'tone-soul',
    image: 'gallery/session-08',
  },
};

export interface Program {
  slug: string;
  image: string;
  name: string;
  short: string;
  category: CategoryId;
  tagline: string;
  intro: string;
  quote?: string;
  explore: { title: string; text: string }[];
  forWho: string[];
  process?: { title: string; text: string }[];
  format: string | null;
  duration: string | null;
  mode: string | null;
  fee: string | null;
  healthNote?: boolean;
  featured?: boolean;
  glyph: { n: number; k: number; rings: number; petals: number };
}

export const programs: Program[] = [
  {
    slug: 'evolving-cosmic-communion',
    image: 'founder/talk-1',
    name: 'Evolving Cosmic Communion',
    short: 'ECC — the signature channelled system for healing, clarity and conscious manifestation.',
    category: 'signature',
    tagline: 'A communion with the intelligence of the cosmos.',
    intro:
      'Evolving Cosmic Communion (ECC) is the healing system channelled by Dr. Deepa Rani Shekar and the foundation of the work at Transform Life Programs. Working with sacred geometry, frequency and channelled codes, ECC is designed to help you release old emotional patterns, restore balance and align with your highest potential — gently, and without having to relive the past.',
    quote: 'ECC isn’t just a healing system — it’s a communion with the intelligence of the cosmos.',
    explore: [
      { title: 'Emotional release', text: 'Let go of stored hurt and long-held patterns without re-living painful memories.' },
      { title: 'Balance & alignment', text: 'Bring body, mind and spirit back into harmony through guided energy work.' },
      { title: 'Conscious manifestation', text: 'Learn to hold a clear intention and align your energy with what you wish to create.' },
      { title: 'Expanded awareness', text: 'Interactive exercises, group discussion and energy activations that deepen perception.' },
    ],
    forWho: [
      'Those who feel their spiritual progress has stalled',
      'Seekers wanting a practical system they can use in daily life',
      'Healers and lightworkers looking to extend their practice',
    ],
    process: [
      { title: 'Cosmic alignment', text: 'A short opening that settles and connects your energy field.' },
      { title: 'Healing', text: 'Channelled work guided by what is most needed in the moment.' },
      { title: 'Earth integration', text: 'Grounding so the session settles into everyday life.' },
    ],
    format: 'Workshop & individual sessions',
    duration: null,
    mode: 'In person or remote',
    fee: null,
    featured: true,
    glyph: { n: 12, k: 5, rings: 3, petals: 12 },
  },
  {
    slug: 'eob',
    image: 'founder/talk-2',
    name: 'EOB',
    short: 'The ECC facet focused on physical wellbeing and the body’s energetic blueprint.',
    category: 'signature',
    tagline: 'The ECC facet of healing for the physical body.',
    intro:
      'EOB is a specialised branch of ECC that works with the energy of the physical body. Sessions and classes focus on clearing stagnant energy, releasing stored emotional strain that can show up physically, and supporting the body’s own capacity for vitality. EOB is offered as a complement to — never a replacement for — medical care.',
    quote: 'Your body is a temple of cosmic intelligence — EOB helps it thrive, not just survive.',
    explore: [
      { title: 'Energy scanning', text: 'Locating areas where energy feels stuck, often linked to past strain or trauma.' },
      { title: 'Recoding', text: 'Clearing heavy energy with channelled light-language frequencies.' },
      { title: 'Emotional release', text: 'Letting go of stored stress that the body has been carrying.' },
      { title: 'Preventive care', text: 'Simple practices to keep your energy balanced day to day.' },
    ],
    forWho: [
      'People who want an energetic complement to their medical care',
      'Wellness seekers interested in preventive energy practices',
      'Healers adding body-focused work to their practice',
    ],
    format: 'Sessions & classes',
    duration: null,
    mode: null,
    fee: null,
    healthNote: true,
    glyph: { n: 8, k: 3, rings: 2, petals: 8 },
  },
  {
    slug: 'magic-molecules',
    image: 'founder/talk-3',
    name: 'Magic Molecules',
    short: 'A masterclass on intention, life-force and your relationship with the physical world.',
    category: 'signature',
    tagline: 'Where science and mysticism meet in the body.',
    intro:
      'Magic Molecules is an experiential masterclass exploring the meeting point of esoteric practice and modern ideas about energy. Through guided exercises, you’ll work with intention, breath and life-force (prana), and explore how your inner state shapes the way you meet the world.',
    quote: 'Your DNA is not a fixed code — it’s a responsive antenna. Tune it correctly, and miracles follow.',
    explore: [
      { title: 'Intention training', text: 'Practices to focus and hold intention with clarity.' },
      { title: 'Elemental work', text: 'Experiential exercises with the elements — earth, water, fire and air.' },
      { title: 'Life-force practices', text: 'Hands-on exercises that make prana tangible and felt.' },
      { title: 'Living alchemy', text: 'Turning intention into consistent, everyday action.' },
    ],
    forWho: [
      'Seekers who want to go beyond conventional manifestation techniques',
      'Energy workers ready to deepen their practice',
      'Anyone curious about the meeting of science and spirit',
    ],
    format: 'Masterclass',
    duration: null,
    mode: null,
    fee: null,
    glyph: { n: 6, k: 2, rings: 4, petals: 6 },
  },
  {
    slug: 'crystal-healing',
    image: 'gallery/session-06',
    name: 'Crystal Healing',
    short: 'Personal crystal sessions, a mastery course, and stones chosen and charged by Dr. Deepa.',
    category: 'body',
    tagline: 'When your energy aligns with the cosmos.',
    intro:
      'Crystal Healing at Transform Life Programs brings together personalised sessions, an in-depth course for those who want to work with crystals themselves, and carefully selected stones charged by Dr. Deepa. Each crystal carries its own character; sessions use grids and placements chosen for your energy and intention.',
    quote: 'Your body is a walking galaxy. Crystals are your stars.',
    explore: [
      { title: 'Personal crystal sessions', text: 'Crystal grids and chakra work chosen for your energy and intention.' },
      { title: 'Crystal mastery course', text: 'Programming crystals for intention, layouts for love, wealth and purpose, and crystal elixirs.' },
      { title: 'Singing crystal techniques', text: 'Working with sound and vibration alongside the stones.' },
      { title: 'Sacred crystals', text: 'Stones selected and charged by Dr. Deepa, with activation and placement guidance.' },
    ],
    forWho: [
      'Those who feel energetically stuck, even after other healing',
      'Lightworkers who want to strengthen their practice',
      'Anyone drawn to crystals and ready to learn to use them well',
    ],
    format: 'Sessions & certification course',
    duration: null,
    mode: 'In person',
    fee: null,
    healthNote: true,
    featured: true,
    glyph: { n: 6, k: 1, rings: 2, petals: 6 },
  },
  {
    slug: 'natural-healing-secrets',
    image: 'gallery/session-04',
    name: 'Natural Healing Secrets',
    short: 'Acupressure, colour and seed therapies — self-care tools from your own hands and kitchen.',
    category: 'body',
    tagline: 'Acupressure, colour & seed therapies.',
    intro:
      'A practical, hands-on workshop in traditional self-care. Learn key acupressure points, how colour is used in traditional therapy, and the seeds and spices that have long been part of Indian home care — so you can look after yourself and your family day to day, alongside the guidance of your doctor.',
    quote: 'Your medicine cabinet grows in your garden. Your healing tools are at your fingertips.',
    explore: [
      { title: 'Acupressure', text: 'Key points for everyday comfort — tension, digestion, restlessness and low energy.' },
      { title: 'Colour therapy', text: 'How colour and light are used in traditional practice to support balance.' },
      { title: 'Seed therapy', text: 'Seeds and kitchen spices used in traditional home care.' },
      { title: 'Take-home charts', text: 'Pressure points, colour codes and seed recipes to keep and use.' },
    ],
    forWho: [
      'Families wanting simple, natural self-care routines',
      'Anyone interested in traditional healing practices',
      'Healers expanding their holistic toolkit',
    ],
    process: [
      { title: 'Learn', text: 'The principles behind each therapy.' },
      { title: 'Practise', text: 'Hands-on practice on yourself and others.' },
      { title: 'Take home', text: 'Charts and protocols for daily use.' },
    ],
    format: 'Hands-on workshop',
    duration: null,
    mode: 'In person',
    fee: null,
    healthNote: true,
    glyph: { n: 5, k: 2, rings: 2, petals: 5 },
  },
  {
    slug: 'body-the-magic-you',
    image: 'gallery/session-03',
    name: 'Body, The Magic & You!',
    short: 'A mind–body approach to weight, energy and ease — without extreme diets.',
    category: 'body',
    tagline: 'Your body isn’t your enemy — it’s your most magical ally.',
    intro:
      'A class on the emotional and energetic side of weight and wellbeing. Rather than restrictive diets or punishing workouts, it works with the beliefs, emotions and habits behind how we eat, move and feel — so that caring for your body becomes something you do with it, not against it.',
    quote: 'Your body isn’t your enemy — it’s your most magical ally waiting to awaken.',
    explore: [
      { title: 'Emotional weight', text: 'Understanding how stress and unprocessed emotion show up in the body.' },
      { title: 'Energy & vitality', text: 'Pranic practices for steadier energy through the day.' },
      { title: 'Relationship with food', text: 'A short daily practice to help you eat with awareness.' },
      { title: 'Joyful movement', text: 'Reconnecting with movement as something that feels good.' },
    ],
    forWho: [
      'Those who have tried many diets without lasting results',
      'Anyone wanting a kinder relationship with their body',
      'People looking to complement medical or nutritional advice with mind–body work',
    ],
    format: 'Class',
    duration: null,
    mode: null,
    fee: null,
    healthNote: true,
    featured: true,
    glyph: { n: 7, k: 3, rings: 2, petals: 7 },
  },
  {
    slug: 'magic-massage-class',
    image: 'gallery/session-09',
    name: 'Magic Massage Class',
    short: 'A weekend workshop where therapeutic massage meets conscious, healing touch.',
    category: 'body',
    tagline: 'Where healing touch meets energy work.',
    intro:
      'A warm, practical weekend workshop that teaches therapeutic massage as an act of care. Combining traditional techniques with Dr. Deepa’s approach to energy, you’ll learn to release physical tension and help others feel lighter — and take the skills home for yourself and the people you love.',
    quote: 'Your body holds the memory of every struggle. This massage helps it remember its joy instead.',
    explore: [
      { title: 'Releasing tension', text: 'Techniques for neck, shoulders and areas where stress settles.' },
      { title: 'Conscious touch', text: 'Bringing presence and intention into every stroke.' },
      { title: 'Energy awareness', text: 'Sensing and clearing heaviness as you work.' },
      { title: 'Take-home skills', text: 'Techniques to use on yourself and loved ones.' },
    ],
    forWho: [
      'People carrying stress in their body',
      'Healers wanting to add bodywork to their practice',
      'Anyone ready to feel lighter and more at ease',
    ],
    format: 'Weekend workshop',
    duration: 'One weekend',
    mode: 'In person',
    fee: null,
    glyph: { n: 10, k: 3, rings: 2, petals: 5 },
  },
  {
    slug: 'money-magic',
    image: 'gallery/session-02',
    name: 'Money Magic',
    short: 'Heal your relationship with money and build the energy to create and grow it.',
    category: 'self',
    tagline: 'Creating the energy to create money.',
    intro:
      'Money Magic explores the beliefs, family stories and emotions that shape how money flows in your life. In one focused session you’ll uncover hidden blocks, learn a short daily practice, and leave with a calmer, more confident relationship with earning, receiving and growing money.',
    quote: 'Money flows where energy goes — we’ll redirect yours to abundance.',
    explore: [
      { title: 'A happy relationship with money', text: 'Recognise the beliefs formed early in life and inherited from family.' },
      { title: 'Inviting money in', text: 'Release scarcity patterns and practise receiving.' },
      { title: 'Growing your money', text: 'Bring clarity and steadiness to how you handle what you have.' },
      { title: 'A daily practice', text: 'A short ritual to keep your intention and energy aligned.' },
    ],
    forWho: [
      'Entrepreneurs with inconsistent income',
      'Professionals who feel stuck at a ceiling',
      'Anyone who feels anxious about money or debt',
    ],
    format: 'Single-session class',
    duration: 'One session',
    mode: null,
    fee: null,
    featured: true,
    glyph: { n: 8, k: 3, rings: 3, petals: 4 },
  },
  {
    slug: 'love-yourself-heal-yourself',
    image: 'gallery/session-01',
    name: 'Love Yourself, Heal Yourself',
    short: 'A self-love workshop rooted in the philosophy of Louise L. Hay.',
    category: 'self',
    tagline: 'When you love yourself, healing is a homecoming.',
    intro:
      'Dr. Deepa trained and was internationally certified to lead the Heal Your Life® work of the late Louise L. Hay — the foundation from which Transform Life Programs began. This workshop draws on that philosophy: gently uncovering the beliefs that hold you back, releasing old emotions and building a relationship with yourself based on worth and care.',
    quote: 'When you stop waiting for someone else to love you first, your entire life becomes a miracle.',
    explore: [
      { title: 'Awareness & release', text: 'Identify beliefs like “I’m not good enough” and let them go.' },
      { title: 'Mind–body connection', text: 'Understand how thoughts and emotions affect wellbeing.' },
      { title: 'Mirror work', text: 'Louise Hay’s classic practice, deepened with energy work.' },
      { title: 'Inner child', text: 'Re-parent the younger self who still carries old hurts.' },
    ],
    forWho: [
      'People pleasers who have forgotten their own needs',
      'Anyone caught in cycles of self-criticism or self-sabotage',
      'Those who feel stuck despite trying other approaches',
    ],
    format: 'Workshop',
    duration: null,
    mode: null,
    fee: null,
    featured: true,
    glyph: { n: 9, k: 4, rings: 2, petals: 9 },
  },
  {
    slug: 'you-and-yourself',
    image: 'gallery/session-08',
    name: 'You And Yourself',
    short: 'A one-day masterclass in shadow work, soul retrieval and reclaiming your power.',
    category: 'self',
    tagline: 'A sacred rendezvous with your highest potential.',
    intro:
      'You And Yourself is a one-day masterclass about wholeness. Through shadow work, guided processes and a soul retrieval ceremony, you’ll meet the parts of yourself that have been rejected or left behind — and bring their energy home.',
    quote: 'Your wholeness isn’t a goal — it’s your natural state. We’re just removing what’s fake.',
    explore: [
      { title: 'Your highest timeline', text: 'Visualisation practices to connect with the self you are becoming.' },
      { title: 'Shadow alchemy', text: 'Meet the hidden patterns that quietly run your life — and transform them.' },
      { title: 'Mid-brain activation', text: 'Practices to strengthen intuition and decisiveness.' },
      { title: 'Soul retrieval', text: 'A guided ceremony to reclaim energy lost to past hurts and relationships.' },
    ],
    forWho: [
      'Those tired of healing that doesn’t seem to last',
      'Seekers ready for deeper inner work',
      'Anyone who senses they are living at half capacity',
    ],
    format: 'Masterclass',
    duration: 'One day',
    mode: null,
    fee: null,
    glyph: { n: 11, k: 4, rings: 2, petals: 11 },
  },
  {
    slug: 'connecting-dots',
    image: 'gallery/session-05',
    name: 'Connecting Dots',
    short: 'Learn to ask “What else is possible?” and see the patterns that shape your life.',
    category: 'self',
    tagline: 'What else is possible?',
    intro:
      'Connecting Dots begins with four words: “What else is possible?” This channelled journey helps you question limits you’ve never examined, notice the patterns and synchronicities around you, and trace how past experiences shaped your choices — then reconnect those dots in a new way.',
    quote: 'Your current life is just one possible timeline. Connecting Dots teaches you to switch tracks.',
    explore: [
      { title: 'Quantum curiosity', text: 'The art of asking questions that open new possibilities.' },
      { title: 'Dissolving old beliefs', text: 'Spot “programs” like “I must struggle to succeed.”' },
      { title: 'Your personal dot map', text: 'Trace how past events shaped your limits — and redraw them.' },
      { title: 'Group process', text: 'Collective exercises where shared energy supports each breakthrough.' },
    ],
    forWho: [
      'Visionaries tired of linear thinking',
      'People who feel there is no way forward in some area of life',
      'Seekers who enjoy curiosity and play',
    ],
    format: 'Workshop',
    duration: null,
    mode: null,
    fee: null,
    glyph: { n: 7, k: 2, rings: 3, petals: 7 },
  },
  {
    slug: 'holistic-to-soulistic',
    image: 'gallery/session-08',
    name: 'Holistic to Soulistic',
    short: 'A two-day soul intensive for releasing karmic and ancestral patterns.',
    category: 'soul',
    tagline: 'Break free from the karmic wheel.',
    intro:
      'Holistic to Soulistic is a two-day intensive for those who notice the same painful patterns repeating in their lives or family. Through three channelled processes, Dr. Deepa guides you to release past-life and ancestral imprints, clear old soul contracts, and step forward lighter.',
    quote: 'You’re not healing ‘your’ pain. You’re ending a bloodline’s suffering.',
    explore: [
      { title: 'The great unburdening', text: 'Release past-life and ancestral imprints shaping your present.' },
      { title: 'Recoding', text: 'Replace patterns of struggle with blueprints of ease.' },
      { title: 'Relationship clarity', text: 'Understand karmic ties and release painful attachments.' },
      { title: 'Sealing the work', text: 'Protect your energy so the changes hold.' },
    ],
    forWho: [
      'Those who repeat the same painful lessons',
      'People who sense ancestral patterns in their family',
      'Seekers drawn to past-life work',
    ],
    format: 'Intensive',
    duration: 'Two days',
    mode: null,
    fee: null,
    featured: true,
    glyph: { n: 12, k: 5, rings: 2, petals: 6 },
  },
  {
    slug: 'angelic-consciousness',
    image: 'founder/talk-2',
    name: 'Angelic Consciousness',
    short: 'Meet your angels, learn to read their signs and receive their healing.',
    category: 'soul',
    tagline: 'Angels respond to invitation.',
    intro:
      'A divine connection workshop for anyone who feels guided but isn’t sure by whom. You’ll discover the angels and archangels you resonate with, learn practical ways to recognise their signs and messages, and receive a channelled group healing.',
    quote: 'Angels don’t wait for perfection — they respond to invitation.',
    explore: [
      { title: 'Meet your angels', text: 'Discover the archangels you resonate with and their qualities.' },
      { title: 'Angel communication', text: 'Recognise signs — feathers, numbers, synchronicities — and receive clear messages.' },
      { title: 'Angelic healing', text: 'A channelled group healing with the archangels.' },
      { title: 'Your angel altar', text: 'Create an inner space for ongoing guidance.' },
    ],
    forWho: [
      'Those who keep noticing repeating numbers or signs',
      'People who want to feel supported in daily life',
      'Anyone whose prayer or meditation practice feels flat',
    ],
    format: 'Workshop',
    duration: null,
    mode: null,
    fee: null,
    glyph: { n: 8, k: 1, rings: 3, petals: 8 },
  },
  {
    slug: 'merkaba',
    image: 'gallery/session-08',
    name: 'Merkaba',
    short: 'Levels 1 & 2 — activating the star-tetrahedron light body through sacred geometry.',
    category: 'soul',
    tagline: 'Your light body, awakened.',
    intro:
      'The Merkaba is the light body — a star-tetrahedron field of energy described in many spiritual traditions. Offered in two levels, this workshop teaches meditation and breath practices to activate it, alongside safe, grounded work with Kundalini energy and the third eye.',
    quote: 'Your Merkaba isn’t just energy — it’s your birthright as a cosmic being.',
    explore: [
      { title: 'Merkaba activation', text: 'Breath and meditation practices to activate your light body.' },
      { title: 'Chakra alignment', text: 'Bringing the energy centres into harmony.' },
      { title: 'Kundalini, safely', text: 'Grounded practices to awaken Kundalini energy gently.' },
      { title: 'Third-eye expansion', text: 'Developing intuition and inner sight.' },
    ],
    forWho: [
      'Those who feel drawn to sacred geometry',
      'People who feel “different” and want to understand why',
      'Practitioners ready for a deeper spiritual discipline',
    ],
    format: 'Workshop — Levels 1 & 2',
    duration: null,
    mode: null,
    fee: null,
    glyph: { n: 6, k: 2, rings: 2, petals: 0 },
  },
  {
    slug: 'akashic-records',
    image: 'founder/talk-3',
    name: 'Akashic Records',
    short: 'Learn to open and read your Book of Life for insight and soul-level healing.',
    category: 'soul',
    tagline: 'Your answers lie in the Akasha.',
    intro:
      'The Akashic Records are described as the soul’s library — a record of every lifetime. In this workshop Dr. Deepa safely guides you to open your own Records, understand the patterns and vows that may be holding you back, and gain clarity on your soul’s purpose. No prior experience is needed.',
    quote: 'Your past lives aren’t history — they’re active energy. Heal them, and watch your present shift.',
    explore: [
      { title: 'Opening your Records', text: 'Guided meditations to access your Akashic Records safely.' },
      { title: 'Reading the messages', text: 'Practical techniques to interpret what you receive.' },
      { title: 'Releasing vows & contracts', text: 'Let go of beliefs like “I must struggle to deserve.”' },
      { title: 'Purpose revealed', text: 'Personal insight into your soul’s path.' },
    ],
    forWho: [
      'Those who feel blocked without knowing why',
      'Seekers drawn to déjà vu or past-life experiences',
      'Lightworkers ready to work with karmic patterns',
    ],
    process: [
      { title: 'Access', text: 'Open your Records with guidance — no experience needed.' },
      { title: 'Identify', text: 'Recognise key lifetimes and patterns affecting you now.' },
      { title: 'Heal', text: 'Release what no longer serves you.' },
    ],
    format: 'Workshop',
    duration: null,
    mode: null,
    fee: null,
    glyph: { n: 10, k: 3, rings: 3, petals: 10 },
  },
];

export const programBySlug = (slug: string) => programs.find((p) => p.slug === slug);
export const programsIn = (cat: CategoryId) => programs.filter((p) => p.category === cat);

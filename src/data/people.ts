// Team bios and recognitions, condensed from the existing Team and Awards pages.

export interface Person {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string[];
}

export const founder = {
  name: 'Dr. Deepa Rani Shekar',
  credentials: 'MA, MPhil',
  roles: ['Founder', 'Channeler', 'Counsellor', 'Energy healer'],
  qualifications: [
    'MA, MPhil',
    'Honorary Doctorate in Philosophy (Holistic Healing), American Management University',
    'Certified Heal Your Life® workshop leader (Louise L. Hay philosophy)',
    'Reiki Master',
    'Multi-Instrumental Sound Healing',
  ],
  story: [
    'For almost two decades, Deepa Rani Shekar taught English — from high school through to post-graduation. Alongside teaching, people of every age sought her out for counsel, and she went on to train formally as a counsellor, refining that gift with every person she supported.',
    'Her own turning point came through illness. After five surgeries in a short span left her struggling to recover, she turned to Reiki — and felt her health and life transform. That experience lit a lifelong commitment to healing. She went on to Reiki mastery and began working with individuals and groups.',
    'She then trained and was internationally certified to lead the Heal Your Life® workshop of the late Louise L. Hay, left her academic career, and founded Transform Life Programs® with her daughter, Rekha Datta — at the time the youngest Heal Your Life workshop leader.',
    'Since then she has studied many healing modalities with founders and masters around the world, completing mastery in most and teaching them at the centre. She has also channelled modalities of her own, including Evolving Cosmic Communion (ECC), and works with divination tools such as Tarot, Akashic reading and Mokshapata.',
  ],
};

export const team: Person[] = [
  {
    slug: 'rekha-datta',
    name: 'Rekha Datta',
    role: 'Co-founder & Managing Director',
    image: 'rekha-datta',
    bio: [
      'An engineering graduate with a master’s degree and a passion for technology, Rekha co-founded Transform Life Programs with her mother — and coined its name. She was an active managing partner and healer at the centre alongside her corporate career.',
      'Holistic practice gave her the clarity to move abroad, pursue higher education and build a fulfilling career in the United States. She continues to support the centre she co-founded.',
    ],
  },
  {
    slug: 'drushya-girish',
    name: 'Drushya Girish',
    role: 'Spiritual healer',
    image: 'drushya-girish',
    bio: [
      'A former Miss India–empanelled model and fashion designer, Drushya first came to Dr. Deepa sceptical, while facing serious health challenges. Her own healing journey led her to study the modalities in depth.',
      'She left her design career to join the centre, where she supports clients through energy healing and guided practices for emotional wellbeing and self-discovery.',
    ],
  },
  {
    slug: 'chaithra-prakash',
    name: 'Chaithra Prakash',
    role: 'Front office & client care',
    image: 'chaithra-prakash',
    bio: [
      'Chaithra is the first point of contact at the Healing Centre — the voice you will likely hear when you call to book.',
      'Since joining Team TLP she has been learning healing skills alongside her role, and found a balance between work and family that she brings to every client she welcomes.',
    ],
  },
];

export interface Award {
  title: string;
  detail: string;
  year: string | null;
  image: string;
  issuer?: string;
}

export const awards: Award[] = [
  { title: 'Veera Kannadati Award', issuer: 'Zee Kannada Awards', year: '2024', image: 'veera-kannadati', detail: 'Recognition for her journey with Transform Life Programs and contribution towards language, society and empowerment.' },
  { title: 'Top 10 Women Voices in Mental Health & Well-being', issuer: 'Global Women Inspiration Awards & Conclave', year: '2025', image: 'global-women', detail: 'Recognised among women making a difference in mental health and wellbeing.' },
  { title: 'South India Women Achievers Award — Changemaker', issuer: 'SIWAA', year: '2025', image: 'siwaa-changemaker', detail: 'Honoured in the Changemaker category.' },
  { title: 'Award of Achievement', issuer: 'South India Women Achievers Awards', year: '2025', image: 'siwaa-achievement', detail: 'For contribution towards women’s empowerment.' },
  { title: 'Pride of Nation Excellence Award', year: '2025', image: 'pride-of-nation', detail: 'For work in counselling and healing.' },
  { title: 'Rex Karmaveer Global Fellowship & Karmaveer Chakra Award', issuer: 'iCONGO with the United Nations', year: '2024–25', image: 'karmaveer-chakra', detail: 'A fellowship celebrating real heroes and inspiring change.' },
  { title: 'Karmaveer Chakra Award — Bronze Medal', issuer: 'Rex Karmaveer Global Fellowship', year: '2025', image: 'karmaveer-bronze', detail: 'For compassion, healing and service to humanity.' },
  { title: 'Karnataka Gaurav Samman Award', issuer: 'International Social Awards Ceremony', year: null, image: 'karnataka-gaurav', detail: 'For contributions in health, wellness and counselling.' },
  { title: 'Super Woman 2025', year: '2025', image: 'super-woman', detail: 'Acknowledgement in healing and counselling.' },
  { title: 'Global Excellence Summit', year: '2025', image: 'global-excellence', detail: 'Recognised for dedication and meaningful impact.' },
  { title: 'Karnataka Cultural Program Award', year: '2025', image: 'karnataka-cultural', detail: 'Invited and honoured at a celebration of Karnataka’s heritage.' },
  { title: 'Honorary Doctorate in Philosophy (Holistic Healing)', issuer: 'American Management University', year: null, image: 'honorary-doctorate', detail: 'Honorary doctorate recognising work in holistic healing.' },
  { title: 'Multi-Instrumental Sound Healing', year: null, image: 'sound-healing', detail: 'Completed training in multi-instrumental sound healing.' },
];

export const videos = [
  // Titles are generic until the real video titles are supplied.
  { title: 'Featured video', href: 'https://www.youtube.com/watch?v=2OMuetcw0Bw', image: 'talk-1' },
  { title: 'Video series I', href: 'https://www.youtube.com/watch?v=omO_4gTzDd0&list=PLQJVlpI7w468puRB1zJw_eiDYxtaxeXpJ', image: 'talk-2' },
  { title: 'Video series II', href: 'https://www.youtube.com/watch?v=5emRHocQx8I&list=PLQJVlpI7w46_faZT0LHs5lLpJnratdXTa', image: 'talk-3' },
];

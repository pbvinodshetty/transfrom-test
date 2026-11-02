// FAQ rewritten from the old site. Statistics the old FAQ quoted without a
// source (percentages, "thousands of students", lab findings) were removed.
// Answers marked `pending: true` need confirmation from the business.

export interface Faq {
  q: string;
  a: string;
  pending?: boolean;
}

export const faqGroups: { id: string; title: string; items: Faq[] }[] = [
  {
    id: 'getting-started',
    title: 'Getting started',
    items: [
      {
        q: 'How do I book a consultation?',
        a: 'Consultations are by confirmed appointment only — we don’t take walk-ins. Book online, call +91 91489 40272, or message us on WhatsApp and our team will confirm a time with you.',
      },
      {
        q: 'How do I know which program is right for me?',
        a: 'Start with a consultation. Dr. Deepa will listen to what you’re facing and recommend the session, workshop or program that fits. You can also tell us what you’re looking for when you book.',
      },
      {
        q: 'Are the programs suitable for complete beginners?',
        a: 'Yes. No prior experience with energy work is needed for any of our programs — just an open mind and a willingness to participate.',
      },
      {
        q: 'What are your hours?',
        a: 'The centre is open Monday to Friday, 10:30 am – 4:30 pm. Weekend timings follow the schedule of ongoing classes and workshops.',
      },
      {
        q: 'Where are sessions held? Do you offer online sessions?',
        a: 'Sessions take place at our centre in Rajarajeshwari Nagar, Bengaluru. ECC sessions can also be offered remotely. Please ask about online options for other programs when you enquire.',
        pending: true,
      },
      {
        q: 'How much do programs cost?',
        a: 'Fees vary by program and format. Our team will share current fees and upcoming dates when you enquire.',
        pending: true,
      },
      {
        q: 'Do your programs replace medical treatment?',
        a: 'No. Our work is complementary and is not a substitute for diagnosis or treatment by a qualified medical professional. Please continue to consult your doctor and do not stop any prescribed treatment.',
      },
      {
        q: 'What should I bring?',
        a: 'Comfortable clothing and a journal. Anything specific to a workshop will be shared when your place is confirmed.',
      },
    ],
  },
  {
    id: 'ecc',
    title: 'Evolving Cosmic Communion (ECC)',
    items: [
      {
        q: 'What is ECC?',
        a: 'ECC is the healing system channelled by Dr. Deepa Rani Shekar. It works with multidimensional light frequencies and is designed to adjust to what you need most in each session.',
      },
      {
        q: 'What happens in an ECC session?',
        a: 'A session moves through three phases: a short cosmic alignment, the main healing guided by what is most needed, and a grounding integration at the end. Many people describe feeling lighter afterwards; every experience is personal.',
      },
      {
        q: 'Is ECC too advanced for a newcomer?',
        a: 'Not at all. ECC requires no prior experience, and simple integration practices are included for beginners.',
      },
      {
        q: 'Does ECC require touch, or can it be done at a distance?',
        a: 'No physical touch is required. ECC can be offered in person or remotely, and is also carried through charged crystals and personalised sound.',
      },
    ],
  },
  {
    id: 'crystals',
    title: 'Crystals & orders',
    items: [
      {
        q: 'How do I place an order?',
        a: 'Add crystals to your bag and send your order to us on WhatsApp. Our team will confirm availability, payment and delivery with you personally.',
      },
      {
        q: 'How do I choose the right crystal?',
        a: 'Read the associations in our Crystal Library, notice which stones you feel drawn to, or ask us — we offer crystal matching guidance with every purchase.',
      },
      {
        q: 'Can bracelets be resized or customised?',
        a: 'Bracelets are made in standard sizes only (the Education bracelet is a standard kids’ size) and we are unable to customise them.',
      },
      {
        q: 'Can I cancel or exchange an order?',
        a: 'Once an order has been placed it cannot be cancelled or exchanged, so please ask us any questions before confirming.',
      },
      {
        q: 'How should I care for my crystals?',
        a: 'Crystals should be cleansed before use. Our crystals are cleared before they reach you, and usage guidance is included.',
      },
      {
        q: 'Do you deliver outside Bengaluru?',
        a: 'Delivery areas, charges and timelines will be confirmed with you on WhatsApp when you place your order.',
        pending: true,
      },
    ],
  },
];

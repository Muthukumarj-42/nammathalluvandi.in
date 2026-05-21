export type LocalText = {
  en: string;
  ta: string;
};

export type Cart = {
  slug: string;
  title: LocalText;
  category: LocalText;
  location: LocalText;
  availability: LocalText & { value: "Available" | "Limited" | "Booked" };
  image: string;
  tags: LocalText[];
  dailyPrice: string;
  features: LocalText[];
  specs: Record<string, LocalText>;
};

const placeholderImage = "/brand/full-logo-with-background.png";

export const carts: Cart[] = [
  {
    slug: "premium-fast-food-cart-with-stove",
    title: { en: "Premium Fast Food Cart", ta: "பிரீமியம் ஃபாஸ்ட் ஃபுட் வண்டி" },
    category: { en: "Fast Food", ta: "ஃபாஸ்ட் ஃபுட்" },
    location: { en: "Coimbatore", ta: "கோவை" },
    availability: { value: "Available", en: "Available", ta: "இப்போ கிடைக்கும்" },
    image: placeholderImage,
    tags: [
      { en: "Has Stove", ta: "அடுப்பு இருக்கு" },
      { en: "Has Roof", ta: "மேல் கவர் இருக்கு" },
      { en: "Premium", ta: "பிரீமியம்" }
    ],
    dailyPrice: "₹200/day",
    features: [
      { en: "Has Stove ✓", ta: "அடுப்பு இருக்கு ✓" },
      { en: "Has Roof ✓", ta: "மேல் கவர் இருக்கு ✓" },
      { en: "Storage Space ✓", ta: "சேமிப்பு இடம் இருக்கு ✓" },
      { en: "Night Light Space ✓", ta: "லைட் போட இடம் இருக்கு ✓" }
    ],
    specs: {
      Size: { en: "6 x 3.5 ft", ta: "6 x 3.5 அடி" },
      Material: { en: "Strong steel body", ta: "தரமான ஸ்டீல் உடல்" },
      Stove: { en: "Has stove setup", ta: "அடுப்பு அமைப்பு இருக்கு" },
      Wheels: { en: "Lockable wheels", ta: "லாக் செய்யும் சக்கரம்" }
    }
  },
  {
    slug: "tea-coffee-cart",
    title: { en: "Tea & Coffee Cart", ta: "டீ & காபி வண்டி" },
    category: { en: "Tea Cart", ta: "டீ வண்டி" },
    location: { en: "Coimbatore", ta: "கோவை" },
    availability: { value: "Available", en: "Available", ta: "இப்போ கிடைக்கும்" },
    image: placeholderImage,
    tags: [
      { en: "Tea Cart", ta: "டீ வண்டி" },
      { en: "No Stove", ta: "அடுப்பு இல்லை" },
      { en: "Compact", ta: "சின்ன இடத்துக்கு சரி" }
    ],
    dailyPrice: "₹100/day",
    features: [
      { en: "Small Size ✓", ta: "சின்ன இடத்துக்கும் பொருந்தும் ✓" },
      { en: "Serving Counter ✓", ta: "சர்விங் கவுண்டர் ✓" },
      { en: "Water Can Space ✓", ta: "தண்ணீர் கேன் இடம் ✓" },
      { en: "Easy Setup ✓", ta: "சுலபமா அமைக்கலாம் ✓" }
    ],
    specs: {
      Size: { en: "4 x 3 ft", ta: "4 x 3 அடி" },
      Material: { en: "Steel and laminate", ta: "ஸ்டீல் மற்றும் லாமினேட்" },
      Stove: { en: "No stove", ta: "அடுப்பு இல்லை" },
      Wheels: { en: "Two lockable wheels", ta: "இரண்டு லாக் சக்கரம்" }
    }
  },
  {
    slug: "juice-cart",
    title: { en: "Fresh Juice Cart", ta: "ஃப்ரெஷ் ஜூஸ் வண்டி" },
    category: { en: "Juice Cart", ta: "ஜூஸ் வண்டி" },
    location: { en: "Coimbatore", ta: "கோவை" },
    availability: { value: "Limited", en: "Limited", ta: "சில வண்டிகள் மட்டும்" },
    image: placeholderImage,
    tags: [
      { en: "Juice Cart", ta: "ஜூஸ் வண்டி" },
      { en: "Has Roof", ta: "மேல் கவர் இருக்கு" },
      { en: "Premium", ta: "பிரீமியம்" }
    ],
    dailyPrice: "₹150/day",
    features: [
      { en: "Fruit Display Space ✓", ta: "பழம் வைக்க இடம் ✓" },
      { en: "Has Roof ✓", ta: "மேல் கவர் இருக்கு ✓" },
      { en: "Easy Cleaning ✓", ta: "சுத்தம் செய்ய சுலபம் ✓" },
      { en: "Brand Board Space ✓", ta: "பெயர் பலகை இடம் ✓" }
    ],
    specs: {
      Size: { en: "5.5 x 3 ft", ta: "5.5 x 3 அடி" },
      Material: { en: "Food-safe counter", ta: "உணவுக்கு பாதுகாப்பான கவுண்டர்" },
      Stove: { en: "No stove", ta: "அடுப்பு இல்லை" },
      Wheels: { en: "Smooth wheels", ta: "சுலபமா நகரும் சக்கரம்" }
    }
  },
  {
    slug: "starter-cart-without-stove",
    title: { en: "Starter Sales Cart", ta: "ஆரம்ப விற்பனை வண்டி" },
    category: { en: "No Stove", ta: "அடுப்பு இல்லாத வண்டி" },
    location: { en: "Coimbatore", ta: "கோவை" },
    availability: { value: "Available", en: "Available", ta: "இப்போ கிடைக்கும்" },
    image: placeholderImage,
    tags: [
      { en: "No Stove", ta: "அடுப்பு இல்லை" },
      { en: "Rental", ta: "வாடகை" },
      { en: "Budget", ta: "குறைந்த செலவு" }
    ],
    dailyPrice: "₹100/day",
    features: [
      { en: "Open Counter ✓", ta: "திறந்த கவுண்டர் ✓" },
      { en: "Storage Space ✓", ta: "சேமிப்பு இடம் ✓" },
      { en: "Menu Board Space ✓", ta: "மெனு பலகை இடம் ✓" },
      { en: "Easy to Move ✓", ta: "நகர்த்த சுலபம் ✓" }
    ],
    specs: {
      Size: { en: "5 x 3 ft", ta: "5 x 3 அடி" },
      Material: { en: "Strong frame", ta: "திடமான ஃப்ரேம்" },
      Stove: { en: "No stove", ta: "அடுப்பு இல்லை" },
      Wheels: { en: "Standard wheels", ta: "சாதாரண சக்கரம்" }
    }
  },
  {
    slug: "covered-premium-cart",
    title: { en: "Covered Premium Cart", ta: "மேல் கவர் பிரீமியம் வண்டி" },
    category: { en: "Premium", ta: "பிரீமியம்" },
    location: { en: "Coimbatore", ta: "கோவை" },
    availability: { value: "Limited", en: "Limited", ta: "சில வண்டிகள் மட்டும்" },
    image: placeholderImage,
    tags: [
      { en: "Has Roof", ta: "மேல் கவர் இருக்கு" },
      { en: "Has Stove", ta: "அடுப்பு இருக்கு" },
      { en: "Premium", ta: "பிரீமியம்" }
    ],
    dailyPrice: "₹200/day",
    features: [
      { en: "Has Roof ✓", ta: "மேல் கவர் இருக்கு ✓" },
      { en: "Serving Shelf ✓", ta: "சர்விங் ஷெல்ஃப் ✓" },
      { en: "Cylinder Space ✓", ta: "சிலிண்டர் இடம் ✓" },
      { en: "Light Space ✓", ta: "லைட் இடம் ✓" }
    ],
    specs: {
      Size: { en: "6.5 x 3.5 ft", ta: "6.5 x 3.5 அடி" },
      Material: { en: "Steel and ACP", ta: "ஸ்டீல் மற்றும் ACP" },
      Stove: { en: "Has stove setup", ta: "அடுப்பு அமைப்பு இருக்கு" },
      Wheels: { en: "Heavy wheels", ta: "திடமான சக்கரம்" }
    }
  },
  {
    slug: "mobile-snack-cart",
    title: { en: "Mobile Snack Cart", ta: "மொபைல் ஸ்நாக்ஸ் வண்டி" },
    category: { en: "Fast Food", ta: "ஃபாஸ்ட் ஃபுட்" },
    location: { en: "Coimbatore", ta: "கோவை" },
    availability: { value: "Booked", en: "Booked", ta: "இப்போ புக் ஆனது" },
    image: placeholderImage,
    tags: [
      { en: "Fast Food", ta: "ஃபாஸ்ட் ஃபுட்" },
      { en: "No Stove", ta: "அடுப்பு இல்லை" },
      { en: "Compact", ta: "சின்ன இடத்துக்கு சரி" }
    ],
    dailyPrice: "₹150/day",
    features: [
      { en: "Snack Display ✓", ta: "ஸ்நாக்ஸ் வைக்க இடம் ✓" },
      { en: "Cash Space ✓", ta: "கேஷ் வைக்க இடம் ✓" },
      { en: "Small Roof ✓", ta: "சின்ன மேல் கவர் ✓" },
      { en: "Easy to Move ✓", ta: "நகர்த்த சுலபம் ✓" }
    ],
    specs: {
      Size: { en: "4.5 x 3 ft", ta: "4.5 x 3 அடி" },
      Material: { en: "Steel and wood finish", ta: "ஸ்டீல் மற்றும் மர தோற்றம்" },
      Stove: { en: "Optional", ta: "தேவைப்பட்டால் சேர்க்கலாம்" },
      Wheels: { en: "Compact wheels", ta: "சிறிய சக்கரம்" }
    }
  }
];

export const filters: LocalText[] = [
  { en: "All", ta: "அனைத்தும்" },
  { en: "Has Stove", ta: "அடுப்பு இருக்கு" },
  { en: "No Stove", ta: "அடுப்பு இல்லை" },
  { en: "Has Roof", ta: "மேல் கவர்" },
  { en: "Premium", ta: "பிரீமியம்" },
  { en: "Tea Cart", ta: "டீ வண்டி" },
  { en: "Fast Food", ta: "ஃபாஸ்ட் ஃபுட்" },
  { en: "Juice Cart", ta: "ஜூஸ் வண்டி" }
];

export function getCart(slug: string) {
  return carts.find((cart) => cart.slug === slug);
}

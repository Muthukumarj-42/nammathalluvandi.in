export interface Cart {
  id: string;
  nameEn: string;
  nameTa: string;
  type: string[];
  pricePerDay: number;
  depositAmount: number;
  available: boolean;
  availableCount: number;
  city: string[];
  featuresEn: string[];
  featuresTa: string[];
  images: string[];
  whatsappMessageTa: string;
}

export const carts: Cart[] = [
  {
    id: "premium-fast-food-cart-with-stove",
    nameEn: "Premium Fast Food Cart",
    nameTa: "பிரீமியம் ஃபாஸ்ட் புட் வண்டி",
    type: ["Has Stove", "Has Roof", "Premium", "Fast Food"],
    pricePerDay: 200,
    depositAmount: 2000,
    available: true,
    availableCount: 3,
    city: ["Coimbatore"],
    featuresEn: ["Has Stove", "Has Roof Cover", "Storage Space"],
    featuresTa: [
      "அடுப்பு இருக்கு",
      "மேல் கவர் இருக்கு",
      "சேமிப்பு இடம் இருக்கு",
    ],
    images: [
      "/carts/premium-fast-food-cart-with-stove/photo-1.jpg",
      "/carts/premium-fast-food-cart-with-stove/photo-2.jpg",
      "/carts/premium-fast-food-cart-with-stove/photo-3.jpg",
    ],
    whatsappMessageTa:
      "வணக்கம், நான் பிரீமியம் ஃபாஸ்ட் புட் வண்டி வாடகைக்கு எடுக்க விரும்புகிறேன்.",
  },
  {
    id: "tea-coffee-cart",
    nameEn: "Tea & Coffee Cart",
    nameTa: "தேநீர் மற்றும் காபி வண்டி",
    type: ["Tea Cart", "No Stove", "Compact"],
    pricePerDay: 100,
    depositAmount: 2000,
    available: true,
    availableCount: 3,
    city: ["Coimbatore"],
    featuresEn: ["Fits in Small Spaces", "Serving Counter", "Water Can Holder"],
    featuresTa: [
      "சின்ன இடத்துக்கும் பொருந்தும்",
      "சர்விங் கவுண்டர்",
      "தண்ணீர் கேன் இடம்",
    ],
    images: [
      "/carts/tea-coffee-cart/photo-1.jpg",
      "/carts/tea-coffee-cart/photo-2.jpg",
      "/carts/tea-coffee-cart/photo-3.jpg",
    ],
    whatsappMessageTa:
      "வணக்கம், நான் தேநீர் மற்றும் காபி வண்டி வாடகைக்கு எடுக்க விரும்புகிறேன்.",
  },
  {
    id: "juice-cart",
    nameEn: "Fresh Juice Cart",
    nameTa: "ஜூஸ் வண்டி",
    type: ["Juice Cart", "Has Roof", "Premium"],
    pricePerDay: 150,
    depositAmount: 2000,
    available: true,
    availableCount: 0,
    city: ["Coimbatore"],
    featuresEn: ["Fruit Display Space", "Has Roof Cover", "Easy to Clean"],
    featuresTa: [
      "பழம் வைக்க இடம்",
      "மேல் கவர் இருக்கு",
      "சுத்தம் செய்ய சுலபம்",
    ],
    images: [
      "/carts/juice-cart/photo-1.jpg",
      "/carts/juice-cart/photo-2.jpg",
      "/carts/juice-cart/photo-3.jpg",
    ],
    whatsappMessageTa:
      "வணக்கம், நான் ஜூஸ் வண்டி வாடகைக்கு எடுக்க விரும்புகிறேன்.",
  },
  {
    id: "starter-cart-without-stove",
    nameEn: "Starter Sales Cart",
    nameTa: "சாதாரண வண்டி",
    type: ["No Stove", "Rental", "Budget"],
    pricePerDay: 100,
    depositAmount: 2000,
    available: true,
    availableCount: 3,
    city: ["Coimbatore"],
    featuresEn: ["Open Counter Layout", "Storage Shelf", "Easy to Move"],
    featuresTa: ["திறந்த கவுண்டர்", "சேமிப்பு இடம்", "நகர்த்த சுலபம்"],
    images: [
      "/carts/starter-cart-without-stove/photo-1.jpg",
      "/carts/starter-cart-without-stove/photo-2.jpg",
      "/carts/starter-cart-without-stove/photo-3.jpg",
    ],
    whatsappMessageTa:
      "வணக்கம், நான் சாதாரண வண்டி வாடகைக்கு எடுக்க விரும்புகிறேன்.",
  },
  {
    id: "covered-premium-cart",
    nameEn: "Covered Premium Cart",
    nameTa: "மேல் கவர் பிரீமியம் வண்டி",
    type: ["Has Roof", "Has Stove", "Premium"],
    pricePerDay: 200,
    depositAmount: 2000,
    available: true,
    availableCount: 3,
    city: ["Coimbatore"],
    featuresEn: ["Has Roof Cover", "Serving Shelf", "Gas Cylinder Storage"],
    featuresTa: ["மேல் கவர் இருக்கு", "சர்விங் ஷெல்ஃப்", "சிலிண்டர் இடம்"],
    images: [
      "/carts/covered-premium-cart/photo-1.jpg",
      "/carts/covered-premium-cart/photo-2.jpg",
      "/carts/covered-premium-cart/photo-3.jpg",
    ],
    whatsappMessageTa:
      "வணக்கம், நான் மேல் கவர் பிரீமியம் வண்டி வாடகைக்கு எடுக்க விரும்புகிறேன்.",
  },
  {
    id: "mobile-snack-cart",
    nameEn: "Mobile Snack Cart",
    nameTa: "சாதாரண வண்டி",
    type: ["Fast Food", "No Stove", "Compact"],
    pricePerDay: 150,
    depositAmount: 2000,
    available: true,
    availableCount: 3,
    city: ["Coimbatore"],
    featuresEn: ["Snack Display Box", "Cash Drawer Space", "Easy to Move"],
    featuresTa: ["ஸ்நாக்ஸ் வைக்க இடம்", "கேஷ் வைக்க இடம்", "நகர்த்த சுலபம்"],
    images: [
      "/carts/mobile-snack-cart/photo-1.jpg",
      "/carts/mobile-snack-cart/photo-2.jpg",
      "/carts/mobile-snack-cart/photo-3.jpg",
    ],
    whatsappMessageTa:
      "வணக்கம், நான் சாதாரண வண்டி வாடகைக்கு எடுக்க விரும்புகிறேன்.",
  },
  {
    id: "mobile-snack",
    nameEn: "thallu vandi",
    nameTa: "சாதாரண வண்டி",
    type: ["Fast Food", "No Stove", "Compact"],
    pricePerDay: 150,
    depositAmount: 2000,
    available: true,
    availableCount: 3,
    city: ["Coimbatore"],
    featuresEn: ["Snack Display Box", "Cash Drawer Space", "Easy to Move"],
    featuresTa: ["ஸ்நாக்ஸ் வைக்க இடம்", "கேஷ் வைக்க இடம்", "நகர்த்த சுலபம்"],
    images: [
      "/carts/mobile-snack-cart/photo-1.jpg",
      "/carts/mobile-snack-cart/photo-2.jpg",
      "/carts/mobile-snack-cart/photo-3.jpg",
    ],
    whatsappMessageTa:
      "வணக்கம், நான் சாதாரண வண்டி வாடகைக்கு எடுக்க விரும்புகிறேன்.",
  },
];

export const filters = [
  { en: "All", ta: "அனைத்தும்" },
  { en: "Has Stove", ta: "அடுப்பு இருக்கு" },
  { en: "No Stove", ta: "அடுப்பு இல்லை" },
  { en: "Has Roof", ta: "மேல் கவர்" },
  { en: "Premium", ta: "பிரீமியம்" },
  { en: "Tea Cart", ta: "டீ வண்டி" },
  { en: "Fast Food", ta: "ஃபாஸ்ட் ஃபுட்" },
  { en: "Juice Cart", ta: "ஜூஸ் வண்டி" },
];

export function getCart(id: string) {
  return carts.find((cart) => cart.id === id);
}

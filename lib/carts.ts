export type Cart = {
  slug: string;
  title: string;
  category: string;
  location: string;
  availability: "Available" | "Limited" | "Booked";
  image: string;
  tags: string[];
  dailyPrice: string;
  features: string[];
  specs: Record<string, string>;
};

export const carts: Cart[] = [
  {
    slug: "premium-fast-food-cart-with-stove",
    title: "Premium Fast Food Cart",
    category: "Fast Food",
    location: "Tamil Nadu",
    availability: "Available",
    image: "/brand/stitch-reference.png",
    tags: ["With Stove", "Top Cover", "Premium"],
    dailyPrice: "₹200/day",
    features: ["Dual burner ready", "Stainless worktop", "Storage racks", "Night light mount"],
    specs: { Size: "6 x 3.5 ft", Material: "Powder-coated steel", Power: "LPG ready", Wheels: "Heavy duty lockable" }
  },
  {
    slug: "tea-coffee-cart",
    title: "Tea & Coffee Cart",
    category: "Tea Cart",
    location: "Tamil Nadu",
    availability: "Available",
    image: "/brand/full-logo-with-background.png",
    tags: ["Tea Cart", "Without Stove", "Compact"],
    dailyPrice: "₹100/day",
    features: ["Compact footprint", "Display counter", "Water can space", "Quick setup"],
    specs: { Size: "4 x 3 ft", Material: "Steel and laminate", Power: "Manual setup", Wheels: "Two lockable wheels" }
  },
  {
    slug: "juice-cart",
    title: "Fresh Juice Cart",
    category: "Juice Cart",
    location: "Tamil Nadu",
    availability: "Limited",
    image: "/brand/stitch-reference.png",
    tags: ["Juice Cart", "Top Cover", "Premium"],
    dailyPrice: "₹150/day",
    features: ["Cold display space", "Fruit deck", "Drain-ready top", "Branding panel"],
    specs: { Size: "5.5 x 3 ft", Material: "Food-grade counter", Power: "Mixer-ready", Wheels: "Rubberized wheels" }
  },
  {
    slug: "starter-cart-without-stove",
    title: "Starter Sales Cart",
    category: "Without Stove",
    location: "Tamil Nadu",
    availability: "Available",
    image: "/brand/full-logo-with-background.png",
    tags: ["Without Stove", "Rental", "Budget"],
    dailyPrice: "₹100/day",
    features: ["Open counter", "Storage cabinet", "Menu board slot", "Easy mobility"],
    specs: { Size: "5 x 3 ft", Material: "Powder-coated frame", Power: "Optional wiring", Wheels: "Standard caster" }
  },
  {
    slug: "covered-premium-cart",
    title: "Covered Premium Cart",
    category: "Premium",
    location: "Tamil Nadu",
    availability: "Limited",
    image: "/brand/stitch-reference.png",
    tags: ["Top Cover", "With Stove", "Premium"],
    dailyPrice: "₹200/day",
    features: ["Weather cover", "Serving shelf", "Gas cylinder bay", "LED-ready roof"],
    specs: { Size: "6.5 x 3.5 ft", Material: "Steel and ACP", Power: "LPG and electric ready", Wheels: "Industrial wheels" }
  },
  {
    slug: "mobile-snack-cart",
    title: "Mobile Snack Cart",
    category: "Fast Food",
    location: "Tamil Nadu",
    availability: "Booked",
    image: "/brand/full-logo-with-background.png",
    tags: ["Fast Food", "Without Stove", "Compact"],
    dailyPrice: "₹150/day",
    features: ["Snack display", "Cash drawer space", "Small awning", "Fast movement"],
    specs: { Size: "4.5 x 3 ft", Material: "Steel and wood finish", Power: "Optional", Wheels: "Compact caster" }
  }
];

export const filters = ["All", "With Stove", "Without Stove", "Top Cover", "Premium", "Tea Cart", "Fast Food", "Juice Cart"];

export function getCart(slug: string) {
  return carts.find((cart) => cart.slug === slug);
}

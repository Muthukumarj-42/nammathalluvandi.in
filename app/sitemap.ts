import type { MetadataRoute } from "next";
import { carts } from "@/lib/carts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://thalluvandi.in";
  return [
    "",
    "/explore",
    "/how-it-works",
    "/publish",
    "/about",
    "/contact",
    "/marketplace",
    "/food-cart-rental-tamil-nadu",
    "/rental-thallu-vandi",
    "/juice-cart-rental",
    ...carts.map((cart) => `/carts/${cart.slug}`)
  ].map((url) => ({ url: `${base}${url}`, lastModified: new Date("2026-05-21") }));
}

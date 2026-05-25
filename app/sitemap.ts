import type { MetadataRoute } from "next";
import { carts } from "@/lib/carts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://thethalluvandi.in";
  
  const staticPages = [
    { url: "", priority: 1.0 },
    { url: "/explore", priority: 0.9 },
    { url: "/how-it-works", priority: 0.8 },
    { url: "/publish", priority: 0.8 },
    { url: "/about", priority: 0.8 },
    { url: "/contact", priority: 0.8 },
  ];

  const dynamicPages = carts.map((cart) => ({
    url: `/carts/${cart.id}`,
    priority: 0.8,
  }));

  const allPages = [...staticPages, ...dynamicPages];

  return allPages.map((page) => ({
    url: `${base}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));
}

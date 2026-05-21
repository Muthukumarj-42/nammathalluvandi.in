import { BarChart3, CalendarDays, CreditCard, Database, Lock, Newspaper, PackageSearch, UsersRound } from "lucide-react";

export default function MarketplacePage() {
  const modules = [
    [Database, "PostgreSQL + Prisma"],
    [CreditCard, "Razorpay / Stripe"],
    [Lock, "User authentication"],
    [UsersRound, "Vendor dashboards"],
    [PackageSearch, "Cart listing system"],
    [Newspaper, "CMS and blog"],
    [CalendarDays, "Real-time booking"],
    [BarChart3, "Admin analytics"]
  ];

  return (
    <main className="bg-[#F8F6F2] pt-28">
      <section className="mx-auto max-w-[1200px] px-4 pb-24 md:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Marketplace Placeholder</p>
        <h1 className="mt-3 max-w-4xl font-display text-6xl uppercase leading-none text-ink md:text-8xl">Backend-ready architecture for the next phase</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          This frontend is structured for payment gateways, dashboards, database-backed listings, and multi-city scaling across Tamil Nadu.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {modules.map(([Icon, title]) => (
            <div key={title as string} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
              <Icon className="text-primary" />
              <h2 className="mt-5 font-bold text-ink">{title as string}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

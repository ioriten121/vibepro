// src/app/page.tsx
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/layout/hero";
import { Pricing } from "@/components/layout/pricing";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Pricing />
    </main>
  );
}
// src/components/layout/hero.tsx
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          Build SaaS Apps with AI
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Describe your app idea in plain English and let AI generate a production-ready SaaS application
          with authentication, payments, and deployment.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="/studio">Start Building</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
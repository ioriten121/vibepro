// src/components/layout/pricing.tsx
"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for side projects",
      features: ["5 app generations", "Basic templates", "Community support"],
    },
    {
      name: "Pro",
      price: "$29",
      description: "For serious builders",
      features: [
        "50 app generations",
        "Advanced templates",
        "Priority support",
        "Custom domains",
      ],
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "Scale your business",
      features: [
        "Unlimited generations",
        "Custom templates",
        "Dedicated support",
        "White-label apps",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Simple Pricing</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Choose the plan that fits your needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.name} className="p-6 glass">
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {tier.description}
              </p>
              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="text-sm">
                    ✓ {f}
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full">Get Started</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
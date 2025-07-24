// src/components/layout/navbar.tsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            VibePro
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/pricing" className="text-sm font-medium hover:underline">
              Pricing
            </Link>
            <Link href="/studio" className="text-sm font-medium hover:underline">
              Studio
            </Link>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
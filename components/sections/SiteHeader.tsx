'use client';

import React from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { Menu } from 'lucide-react'; 
import AnimatedLogo  from '@/components/AnimatedLogo';
import Link from 'next/link';

const navigation = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Hampers", href: "#hampers" },
    { name: "Music Services", href: "#music-services" },
    { name: "Testimonials", href: "#testimonials" },
  ]

const SiteHeader: React.FC = () => {
    const scrollToSection = (id: string) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-col items-center justify-between px-6 py-4">
            {/* Logo */}
            <div className="flex items-center gap-4">
                <AnimatedLogo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 mt-2">
                {navigation.map((item) => (
                    <Link
                    key={item.name}
                    href={item.href}
                    className="text-md font-medium transition-colors hover:text-[hsl(var(--primary))]"
                    onClick={() => scrollToSection(item.name)}
                  >
                    {item.name}
                  </Link>
                  
                ))}
            </nav>

            {/* Buttons & Mobile Menu */}
            <div className="flex items-center gap-4">
                <Sheet>
                    <SheetTrigger asChild>
                    <button className="md:hidden text-black/80 hover:text-black transition-colors">
                        <Menu className="w-6 h-6" />
                    </button>
                    </SheetTrigger>

                    {/* Sidebar Content */}
                    <SheetContent side="left" className="bg-background p-6">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <nav className="mt-6 flex flex-col gap-4">
                        {navigation.map((item) => (
                        <SheetClose asChild key={item.name}>
                            <button
                            className="text-lg font-medium transition-colors hover:text-primary"
                            onClick={() => scrollToSection(item.href)}
                            >
                            {item.name}
                            </button>
                        </SheetClose>
                        ))}
                    </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default SiteHeader;

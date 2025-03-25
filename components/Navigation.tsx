"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  return (
    <NavigationMenu className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <NavigationMenuList className="container h-14 px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#engineering" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Engineering
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#photography" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Photography
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[280px]">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="block px-2 py-1 text-lg hover:text-accent-foreground">
                  Home
                </Link>
                <Link href="#engineering" className="block px-2 py-1 text-lg hover:text-accent-foreground">
                  Engineering
                </Link>
                <Link href="#photography" className="block px-2 py-1 text-lg hover:text-accent-foreground">
                  Photography
                </Link>
                <Link href="#contact" className="block px-2 py-1 text-lg hover:text-accent-foreground">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
} 
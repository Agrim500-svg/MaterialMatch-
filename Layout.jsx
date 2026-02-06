
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Home, Search, User, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    title: "Home",
    url: createPageUrl("Landing"),
    icon: Home,
  },
  {
    title: "Generator",
    url: createPageUrl("Generator"),
    icon: Search,
  },
  {
    title: "Dashboard",
    url: createPageUrl("Dashboard"),
    icon: User,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center">
          <Link to={createPageUrl("Landing")} className="mr-8 flex items-center gap-2">
            <Atom className="w-6 h-6 text-teal-600" />
            <span className="font-bold text-lg text-gray-800">MaterialMatch</span>
          </Link>
          
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={`transition-colors hover:text-teal-600 ${
                  location.pathname === item.url ? 'text-teal-600 font-semibold' : 'text-gray-600'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          
          <div className="ml-auto">
            <Button variant="ghost">Log In</Button>
            <Button className="ml-2 bg-teal-600 hover:bg-teal-700">Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {children}
      </main>
    </div>
  );
}
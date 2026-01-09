// Navbar.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button.tsx"
import { CrossIcon, MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="pt-6 text-black font-semibold">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Branding */}
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-semibold tracking-wide">
              Kritika Koirala
            </a>
          </div>

          {/* Menu for large screens */}
          <div className="hidden md:flex space-x-9 text-sm uppercase tracking-wide text-base-color">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#projects" className="hover:text-gray-300">Projects</a>
            <a href="#designs" className="hover:text-gray-300">Designs</a>

            <a href="#experiences" className="hover:text-gray-300">Experience</a>
            <a href="#summary" className="hover:text-gray-300">Contact</a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <Button
              onClick={handleMenuToggle}
              variant="outline"
              size="icon"
              className="p-2"
            >
              {isMenuOpen ? (
                <X />
              ) : (
                <MenuIcon />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-black shadow rounded-md">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#projects" className="hover:text-gray-300">Projects</a>
            <a href="#experiences" className="hover:text-gray-300">Experience</a>
            <a href="#summary" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0D3B66] rounded-lg flex items-center justify-center">
              <span className="text-white">🦁</span>
            </div>
            <span className="text-[#0D3B66]" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
              Leão Tech
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[#0D3B66] hover:text-[#FF7F11] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-[#0D3B66] hover:text-[#FF7F11] transition-colors"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="text-[#0D3B66] hover:text-[#FF7F11] transition-colors"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-[#0D3B66] hover:text-[#FF7F11] transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-[#0D3B66] hover:text-[#FF7F11] transition-colors"
            >
              Contato
            </button>
            <Button 
              className="bg-[#FF7F11] hover:bg-[#e67310] text-white"
              onClick={() => scrollToSection("contato")}
            >
              Solicitar Demonstração
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0D3B66]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[#0D3B66] hover:text-[#FF7F11] transition-colors text-left py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-[#0D3B66] hover:text-[#FF7F11] transition-colors text-left py-2"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="text-[#0D3B66] hover:text-[#FF7F11] transition-colors text-left py-2"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-[#0D3B66] hover:text-[#FF7F11] transition-colors text-left py-2"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-[#0D3B66] hover:text-[#FF7F11] transition-colors text-left py-2"
            >
              Contato
            </button>
            <Button 
              className="bg-[#FF7F11] hover:bg-[#e67310] text-white"
              onClick={() => scrollToSection("contato")}
            >
              Solicitar Demonstração
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

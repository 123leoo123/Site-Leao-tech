import { Instagram, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0D3B66] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#FF7F11] rounded-lg flex items-center justify-center">
                <span>🦁</span>
              </div>
              <span style={{ fontSize: "1.5rem", fontWeight: 700 }}>Leão Tech</span>
            </div>
            <p className="text-sm opacity-80">
              Automatize seu atendimento e venda mais com inteligência artificial.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="mb-4" style={{ fontWeight: 600 }}>Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("home")} className="hover:text-[#FF7F11] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("como-funciona")} className="hover:text-[#FF7F11] transition-colors">
                  Como funciona
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("planos")} className="hover:text-[#FF7F11] transition-colors">
                  Planos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("depoimentos")} className="hover:text-[#FF7F11] transition-colors">
                  Depoimentos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contato")} className="hover:text-[#FF7F11] transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-4" style={{ fontWeight: 600 }}>Contato</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>São Paulo, SP</li>
              <li>Brasil</li>
              <li>contato@leaotech.com.br</li>
              <li>(11) 98765-4321</li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="mb-4" style={{ fontWeight: 600 }}>Redes Sociais</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF7F11] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/5511987654321" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF7F11] transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="mailto:contato@leaotech.com.br"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF7F11] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="mt-6 p-4 bg-[#FF7F11] rounded-lg">
              <p className="text-sm">
                💬 Pronto para automatizar? <br />
                <strong>Fale conosco agora!</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm opacity-80">
            © 2025 Leão Tech - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

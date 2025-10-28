import { Button } from "./ui/button";
import { MessageCircle, Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-[#0D3B66] to-[#1a5490]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-white" style={{ fontSize: "3rem", lineHeight: "1.2" }}>
              Automatize seu atendimento. Responda clientes 24h com inteligência.
            </h1>
            <p style={{ fontSize: "1.25rem", opacity: 0.95 }}>
              Para pequenas e médias empresas que querem vender mais, atender melhor e gastar menos.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-[#FF7F11] hover:bg-[#e67310] text-white"
                onClick={scrollToContact}
              >
                Solicitar Demonstração
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white text-[#0D3B66] hover:bg-gray-100"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Channel Icons */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <span className="text-sm">WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center">
                  <Instagram className="text-white" size={24} />
                </div>
                <span className="text-sm">Instagram</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-[#FF7F11] rounded-full flex items-center justify-center">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <span className="text-sm">Site</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/flagged/photo-1570607008863-da87b9deefa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc3dvbWFuJTIwc21hcnRwaG9uZSUyMGNoYXR8ZW58MXx8fHwxNzYxMTYyMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Empresária usando smartphone com chat"
                className="w-full h-full object-cover"
              />
              {/* Chat Bubbles Overlay */}
              <div className="absolute top-8 right-8 bg-white rounded-lg shadow-lg p-3 animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#25D366] rounded-full"></div>
                  <span className="text-xs text-[#0D3B66]">Cliente online</span>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 bg-white rounded-lg shadow-lg p-3">
                <p className="text-xs text-[#0D3B66]">💬 Atendimento automático ativo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

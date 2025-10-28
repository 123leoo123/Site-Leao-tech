import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

export function Plans() {
  const plans = [
    {
      name: "Básico",
      price: "R$ 297",
      period: "/mês",
      description: "Ideal para quem está começando",
      features: [
        "Chatbot inteligente",
        "Integração WhatsApp",
        "Atendimento 24h",
        "Até 1.000 mensagens/mês",
        "Suporte por e-mail"
      ],
      highlighted: false
    },
    {
      name: "Profissional",
      price: "R$ 597",
      period: "/mês",
      description: "Para negócios em crescimento",
      badge: "Mais Popular",
      features: [
        "Tudo do Básico +",
        "Integração Instagram",
        "Integração com site",
        "Até 5.000 mensagens/mês",
        "Captura e qualificação de leads",
        "Suporte prioritário"
      ],
      highlighted: true
    },
    {
      name: "Premium",
      price: "R$ 997",
      period: "/mês",
      description: "Solução completa para empresas",
      features: [
        "Tudo do Profissional +",
        "Mensagens ilimitadas",
        "Painel de controle avançado",
        "Relatórios e analytics",
        "Múltiplos atendentes",
        "Integrações personalizadas",
        "Suporte 24h dedicado"
      ],
      highlighted: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="planos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#0D3B66] mb-4">Planos que Cabem no Seu Bolso</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para o tamanho e necessidades do seu negócio. Sem taxa de adesão.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 relative ${
                plan.highlighted 
                  ? 'border-[#FF7F11] border-2 shadow-2xl scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FF7F11] text-white">
                  {plan.badge}
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-[#0D3B66] mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-[#0D3B66]" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    {plan.price}
                  </span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <Check className="text-[#FF7F11] flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.highlighted 
                    ? 'bg-[#FF7F11] hover:bg-[#e67310] text-white' 
                    : 'bg-[#0D3B66] hover:bg-[#0a2d4d] text-white'
                }`}
                onClick={scrollToContact}
              >
                Contratar Agora
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Não sabe qual plano escolher? <button onClick={scrollToContact} className="text-[#FF7F11] hover:underline">Fale com nosso time</button>
          </p>
        </div>
      </div>
    </section>
  );
}

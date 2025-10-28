import { Clock, Layers, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

export function Benefits() {
  const benefits = [
    {
      icon: <Clock className="text-[#FF7F11]" size={40} />,
      title: "Atendimento 24h",
      description: "Seu chatbot nunca dorme. Responde clientes a qualquer hora do dia ou da noite, aumentando suas chances de conversão."
    },
    {
      icon: <Layers className="text-[#FF7F11]" size={40} />,
      title: "Multicanal",
      description: "Integração completa com WhatsApp, Instagram e seu site. Centralize todos os atendimentos em um único lugar."
    },
    {
      icon: <TrendingUp className="text-[#FF7F11]" size={40} />,
      title: "Geração de Leads",
      description: "Capture e qualifique leads automaticamente enquanto você foca em fechar vendas e expandir seu negócio."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#0D3B66] mb-4">Por que escolher a Leão Tech?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa solução de chatbot foi desenvolvida especialmente para pequenas e médias empresas que querem automatizar o atendimento sem perder a qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow border-t-4 border-[#FF7F11]">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-[#0D3B66] mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Settings, Brain, Rocket } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <Settings className="text-[#FF7F11]" size={48} />,
      title: "Configuração Simples",
      description: "Nossa equipe configura o chatbot em minutos. Você só precisa nos contar sobre seu negócio e pronto!"
    },
    {
      number: "02",
      icon: <Brain className="text-[#FF7F11]" size={48} />,
      title: "Bot Aprende Seu Negócio",
      description: "O chatbot inteligente aprende sobre seus produtos, serviços e atende clientes com precisão."
    },
    {
      number: "03",
      icon: <Rocket className="text-[#FF7F11]" size={48} />,
      title: "Você Foca nas Vendas",
      description: "Enquanto o bot trabalha 24h capturando leads e respondendo dúvidas, você foca em fechar negócios."
    }
  ];

  return (
    <section id="como-funciona" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#0D3B66] mb-4">Como Funciona?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Em apenas 3 passos simples, seu negócio estará automatizado e pronto para atender clientes 24 horas por dia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-1 bg-[#FF7F11] opacity-20"></div>
              )}
              
              <div className="relative z-10 mb-6">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-[#0D3B66] rounded-full mb-4">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#FF7F11] rounded-full flex items-center justify-center text-white" style={{ fontWeight: 700 }}>
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-[#0D3B66] mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

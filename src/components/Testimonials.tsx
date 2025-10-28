import { Card } from "./ui/card";
import { Quote, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Testimonials() {
  const stats = [
    { number: "500+", label: "Empresas Atendidas" },
    { number: "24h", label: "Atendimento Contínuo" },
    { number: "95%", label: "Satisfação dos Clientes" },
    { number: "3x", label: "Mais Leads Gerados" }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Proprietário - AutoCar Seminovos",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzYxMTIwOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Desde que implementamos o chatbot da Leão Tech, nunca mais perdemos um lead. O bot responde na hora, mesmo de madrugada. Minhas vendas aumentaram 40%!"
    },
    {
      name: "Mariana Costa",
      role: "Gerente - Clínica Vida Saudável",
      image: "https://images.unsplash.com/photo-1753162657329-beced5a7f63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwdGVhbXxlbnwxfHx8fDE3NjExNjIyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "A automação de agendamentos economizou horas da nossa recepcionista. Agora ela foca no atendimento presencial e o bot cuida do WhatsApp."
    },
    {
      name: "Roberto Mendes",
      role: "Dono - Restaurante Sabor & Cia",
      image: "https://images.unsplash.com/photo-1686386084459-8d9d14400a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzYxMTYyMjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Recebi 200% mais pedidos pelo WhatsApp. O chatbot é rápido, educado e nunca erra um pedido. Meus clientes amam!"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-[#FF7F11]" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                {stat.number}
              </div>
              <p className="text-[#0D3B66]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-[#0D3B66] mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empresas de diversos segmentos já transformaram seu atendimento com a Leão Tech.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow relative">
              <Quote className="text-[#FF7F11] opacity-20 absolute top-4 right-4" size={48} />
              
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-[#FF7F11] fill-[#FF7F11]" size={16} />
                ))}
              </div>

              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-3">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-[#0D3B66]" style={{ fontWeight: 600 }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

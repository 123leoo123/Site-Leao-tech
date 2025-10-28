import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Car, Coffee, Stethoscope, ShoppingBag } from "lucide-react";

export function TargetAudience() {
  const audiences = [
    {
      icon: <Car className="text-[#FF7F11]" size={32} />,
      title: "Lojas de Carros",
      description: "Responda dúvidas sobre modelos, agende test-drives e capture leads de compradores interessados.",
      image: "https://images.unsplash.com/photo-1643142314913-0cf633d9bbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZWFsZXJzaGlwJTIwc2hvd3Jvb218ZW58MXx8fHwxNzYxMDk5NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Coffee className="text-[#FF7F11]" size={32} />,
      title: "Bares e Restaurantes",
      description: "Receba pedidos, confirme reservas e informe sobre o cardápio automaticamente via WhatsApp.",
      image: "https://images.unsplash.com/photo-1713547174010-b53fa1cc4b98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2FmZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MTA1MTI4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Stethoscope className="text-[#FF7F11]" size={32} />,
      title: "Clínicas e Consultórios",
      description: "Agende consultas, confirme horários e envie lembretes automáticos para seus pacientes.",
      image: "https://images.unsplash.com/photo-1758656321452-0d3b91acb371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTExNDg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <ShoppingBag className="text-[#FF7F11]" size={32} />,
      title: "E-commerce",
      description: "Tire dúvidas sobre produtos, acompanhe pedidos e recupere carrinhos abandonados.",
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGVjb21tZXJjZXxlbnwxfHx8fDE3NjEwNjE5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#0D3B66] mb-4">Para Quem é o Leão Tech?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nosso chatbot foi desenvolvido para atender diversos segmentos de pequenas e médias empresas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={audience.image}
                  alt={audience.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  {audience.icon}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[#0D3B66] mb-2">{audience.title}</h3>
                <p className="text-gray-600 text-sm">{audience.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

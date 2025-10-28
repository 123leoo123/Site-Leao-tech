import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria a lógica de envio do formulário
    alert("Obrigado pelo contato! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#0D3B66] mb-4">Pronto para Automatizar?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como o Leão Tech pode transformar o atendimento da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0D3B66] rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-[#0D3B66] mb-1">E-mail</h3>
                <p className="text-gray-600">contato@leaotech.com.br</p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0D3B66] rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-[#0D3B66] mb-1">Telefone / WhatsApp</h3>
                <p className="text-gray-600">(11) 98765-4321</p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0D3B66] rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-[#0D3B66] mb-1">Endereço</h3>
                <p className="text-gray-600">São Paulo, SP - Brasil</p>
              </div>
            </Card>

            <div className="bg-gradient-to-br from-[#0D3B66] to-[#1a5490] rounded-lg p-6 text-white">
              <h3 className="mb-2">Horário de Atendimento</h3>
              <p className="text-sm opacity-90">Segunda a Sexta: 9h às 18h</p>
              <p className="text-sm opacity-90">Sábado: 9h às 13h</p>
              <p className="text-sm opacity-90 mt-2">* Chatbot disponível 24h</p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#0D3B66] mb-2 text-sm">
                  Nome *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  className="border-gray-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#0D3B66] mb-2 text-sm">
                  E-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="border-gray-300"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#0D3B66] mb-2 text-sm">
                  Telefone / WhatsApp
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(11) 98765-4321"
                  className="border-gray-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#0D3B66] mb-2 text-sm">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Conte-nos sobre seu negócio e como podemos ajudar..."
                  rows={5}
                  className="border-gray-300"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#FF7F11] hover:bg-[#e67310] text-white"
              >
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

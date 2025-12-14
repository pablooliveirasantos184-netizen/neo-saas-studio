import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Dono de Delivery",
    content: "O sistema de delivery mudou meu negócio! Agora recebo pedidos direto no WhatsApp e organizo tudo com facilidade.",
    rating: 5
  },
  {
    name: "Ana Paula",
    role: "Social Media",
    content: "As artes do Canva são incríveis! Economizo horas de trabalho toda semana. Meus clientes amam os designs.",
    rating: 5
  },
  {
    name: "Rafael S.",
    role: "Empreendedor Digital",
    content: "Os prompts do ChatGPT me ajudam a criar conteúdo que converte. Já recuperei o investimento várias vezes!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Histórias reais de quem já transformou seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

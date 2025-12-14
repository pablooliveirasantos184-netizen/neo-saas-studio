import { Smartphone, DollarSign, Rocket, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Smartphone,
    title: "Ferramentas Prontas",
    description: "Use imediatamente, sem complicação"
  },
  {
    icon: DollarSign,
    title: "Economia Garantida",
    description: "Tempo e dinheiro poupados"
  },
  {
    icon: Rocket,
    title: "Resultados Rápidos",
    description: "Comece a lucrar hoje mesmo"
  },
  {
    icon: Shield,
    title: "Entrega Garantida",
    description: "Receba tudo pelo WhatsApp"
  }
];

const ValueProposition = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Oferta por tempo limitado</span>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
          Não perca essa{" "}
          <span className="gradient-text text-glow">oportunidade!</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Aproveite os preços promocionais e comece a transformar seu negócio hoje mesmo. 
          São produtos que você pode usar imediatamente para gerar resultados.
        </p>

        <Button 
          onClick={scrollToProducts}
          size="lg" 
          className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow text-lg px-10 py-7 group"
        >
          Quero Aproveitar
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <p className="text-muted-foreground text-sm mt-6">
          Pagamento 100% seguro • Entrega imediata • Suporte via WhatsApp
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;

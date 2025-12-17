import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle, Zap } from "lucide-react";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5522997455396?text=Olá! Tenho interesse nos produtos digitais da Pl Digital!";

  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid animate-grid opacity-20" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-36 sm:w-56 md:w-72 h-36 sm:h-56 md:h-72 bg-primary/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] animate-pulse-glow animation-delay-300" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Soluções digitais para seu negócio</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 sm:mb-6 animate-fade-in-up animation-delay-100 px-2">
          Transforme seu negócio com{" "}
          <span className="gradient-text text-glow">soluções digitais</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in-up animation-delay-200 px-4">
          Ferramentas profissionais prontas para usar. Sistemas, artes e prompts 
          que vão acelerar seu crescimento e aumentar seus lucros.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
          <Button 
            onClick={scrollToProducts}
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow text-lg px-8 py-6"
          >
            Ver Produtos
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
          
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary text-lg px-8 py-6"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

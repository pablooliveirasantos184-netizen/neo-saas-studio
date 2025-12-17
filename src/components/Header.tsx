import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import logoPlDigital from "@/assets/logo-pl-digital.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/5522997455396?text=Olá! Tenho interesse nos produtos digitais da PL Digital!";

  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoPlDigital} alt="PL Digital" className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-cover" />
          <span className="font-display font-bold text-lg md:text-xl text-foreground">PL Digital</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={scrollToProducts}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Produtos
          </button>
          <button 
            onClick={() => handleNavClick("como-funciona")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Como Funciona
          </button>
          <button 
            onClick={() => handleNavClick("faq")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            FAQ
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden sm:block">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button 
              onClick={scrollToProducts}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Produtos
            </button>
            <button 
              onClick={() => handleNavClick("como-funciona")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => handleNavClick("faq")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              FAQ
            </button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="sm:hidden">
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

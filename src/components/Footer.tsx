import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logoPlDigital from "@/assets/logo-pl-digital.png";

const Footer = () => {
  const whatsappLink = "https://wa.me/5522997455396?text=Olá! Tenho interesse nos produtos digitais da PL Digital!";

  return (
    <footer className="py-8 sm:py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logoPlDigital} alt="PL Digital" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover" />
            <span className="font-display font-bold text-lg sm:text-xl text-foreground">PL Digital</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
          </div>

          {/* WhatsApp */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contato
            </Button>
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pl Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

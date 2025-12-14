import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappLink = "https://wa.me/5522997455396?text=Olá! Tenho interesse nos produtos digitais da Pl Digital!";

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-lg">Pl</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">Pl Digital</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
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

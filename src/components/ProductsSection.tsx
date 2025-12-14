import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ShoppingBag, Palette, Sparkles, MessageCircle } from "lucide-react";

const products = [
  {
    id: 1,
    icon: ShoppingBag,
    badge: "MAIS VENDIDO",
    badgeColor: "bg-primary text-primary-foreground",
    title: "Sistema SaaS Delivery",
    description: "Sistema completo de pedidos online para delivery. Receba pedidos, gerencie entregas e aumente suas vendas.",
    features: ["Sistema completo", "Pedidos online", "Gestão de entregas"],
    originalPrice: "87,90",
    price: "29,90",
    link: "https://loja.infinitepay.io/pablo-henrique01/dvp8356-sistema-saas-delivery"
  },
  {
    id: 2,
    icon: Palette,
    badge: "SUPER OFERTA",
    badgeColor: "bg-orange-500 text-white",
    title: "Pack 10k Artes Canva",
    description: "+10.000 artes editáveis profissionais para Canva. Posts, stories, banners e muito mais para suas redes.",
    features: ["+10.000 templates", "100% editáveis", "Uso comercial"],
    originalPrice: "24,60",
    price: "9,90",
    link: "https://loja.infinitepay.io/pablo-henrique01/obh0550-packs-artes-editaveis-canva"
  },
  {
    id: 3,
    icon: Sparkles,
    badge: "LUCRE COM IA",
    badgeColor: "bg-purple-500 text-white",
    title: "400 Prompts ChatGPT",
    description: "Prompts apelativos e estratégicos para lucrar com inteligência artificial. Copy, vendas e muito mais.",
    features: ["400 prompts", "Estratégias de lucro", "Uso imediato"],
    originalPrice: "14,99",
    price: "7,90",
    link: "https://loja.infinitepay.io/pablo-henrique01/cba6807-ebook-renda-extra-dicas-para-afiliados"
  }
];

const ProductsSection = () => {
  const whatsappLink = "https://wa.me/5522997455396?text=Olá! Acabei de fazer um pagamento e quero receber meu produto!";

  return (
    <section id="produtos" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Nossos <span className="gradient-text">Produtos Digitais</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha a ferramenta ideal para impulsionar seu negócio. Preços promocionais por tempo limitado!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="bg-card border-border hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative">
                <Badge className={`${product.badgeColor} w-fit mb-4`}>
                  {product.badge}
                </Badge>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground">
                  {product.title}
                </h3>
              </CardHeader>

              <CardContent className="relative">
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-muted-foreground line-through text-lg">
                    R$ {product.originalPrice}
                  </span>
                  <span className="text-4xl font-display font-bold text-primary">
                    R$ {product.price}
                  </span>
                </div>

                {/* Notice */}
                <div className="bg-secondary/50 border border-border rounded-lg p-3 flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    Após o pagamento, entre em contato pelo WhatsApp para receber seu produto!
                  </p>
                </div>
              </CardContent>

              <CardFooter className="relative">
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group-hover:box-glow transition-all">
                    Comprar Agora
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Já fez seu pagamento? Clique abaixo para receber seu produto:
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <MessageCircle className="w-4 h-4 mr-2" />
              Receber meu produto
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

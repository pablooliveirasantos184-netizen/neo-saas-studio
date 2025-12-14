import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import ProductsSection from "@/components/ProductsSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pl Digital - Soluções Digitais para seu Negócio</title>
        <meta 
          name="description" 
          content="Sistemas SaaS, artes editáveis para Canva e prompts para ChatGPT. Ferramentas digitais profissionais com preços promocionais." 
        />
        <meta name="keywords" content="sistema delivery, artes canva, prompts chatgpt, produtos digitais" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ValueProposition />
          <ProductsSection />
          <HowItWorks />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

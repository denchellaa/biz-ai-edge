import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-charcoal opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Обучение <span className="bg-gradient-gold bg-clip-text text-transparent">ИИ</span> для бизнеса
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Повышайте эффективность сотрудников с помощью искусственного интеллекта. 
            Внедряйте передовые технологии и опережайте конкурентов.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="luxury" 
              size="lg" 
              className="px-8 py-6 text-lg w-60 h-16"
              onClick={() => {
                const contactsSection = document.getElementById('contacts');
                contactsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Связаться с нами
            </Button>
            
            <Button 
              variant="luxury-outline" 
              size="lg" 
              className="px-8 py-6 text-lg w-60 h-16"
              onClick={() => {
                const benefitsSection = document.getElementById('ai-benefits');
                benefitsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Узнать больше
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-primary rounded-full animate-pulse opacity-80"></div>
      </div>
    </section>
  );
};

export default Hero;
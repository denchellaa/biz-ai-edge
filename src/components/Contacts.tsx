import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (903) 211-59-99",
    href: "tel:+79032115999",
    description: "Звоните в любое время"
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@denchellaa",
    href: "https://t.me/denchellaa",
    description: "Быстрые ответы в мессенджере"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+7 (903) 211-59-99",
    href: "https://wa.me/79032115999",
    description: "Удобное общение в WhatsApp"
  }
];

const Contacts = () => {
  return (
    <section className="py-20 bg-secondary/20" id="contacts">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Свяжитесь с <span className="bg-gradient-gold bg-clip-text text-transparent">нами</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Готовы начать трансформацию вашего бизнеса с помощью ИИ? 
            Выберите удобный способ связи или оставьте заявку
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border hover:shadow-card-luxury transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-gold rounded-xl flex items-center justify-center group-hover:shadow-gold-glow transition-all duration-300">
                  <method.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {method.label}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {method.description}
                </p>
                
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="luxury-outline" className="font-medium">
                    {method.value}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Консультация</h4>
              <p className="text-sm text-muted-foreground">
                Обсуждаем ваши потребности и возможности
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Планирование</h4>
              <p className="text-sm text-muted-foreground">
                Разрабатываем стратегию внедрения ИИ
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Реализация</h4>
              <p className="text-sm text-muted-foreground">
                Обучаем команду и внедряем решения
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
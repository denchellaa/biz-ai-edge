import { Phone, Send, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              AI2B
            </h3>
            <p className="text-muted-foreground mb-4">
              Обучение искусственному интеллекту для современного бизнеса. 
              Повышайте эффективность с передовыми технологиями.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Контакты</h4>
            <div className="space-y-3">
              <a 
                href="tel:+79032115999" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+7 (903) 211-59-99</span>
              </a>
              <a 
                href="https://t.me/denchellaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>@denchellaa</span>
              </a>
              <a 
                href="https://wa.me/79032115999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Услуги</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Консультации по ИИ</li>
              <li>Корпоративное обучение</li>
              <li>Внедрение ИИ-решений</li>
              <li>Техническая поддержка</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 AI2B. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
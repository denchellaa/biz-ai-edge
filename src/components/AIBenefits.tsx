import { Card, CardContent } from "@/components/ui/card";
import { Brain, TrendingUp, Zap, Users, Target, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Увеличение продаж",
    description: "ИИ помогает анализировать поведение клиентов и оптимизировать процессы продаж, что приводит к росту выручки на 25-40%"
  },
  {
    icon: Zap,
    title: "Автоматизация процессов",
    description: "Освободите сотрудников от рутинных задач: обработка документов, анализ данных, генерация отчетов выполняются автоматически"
  },
  {
    icon: Users,
    title: "Повышение эффективности",
    description: "Сотрудники фокусируются на стратегических задачах, а ИИ берет на себя операционную работу"
  },
  {
    icon: Target,
    title: "Точность решений",
    description: "Принимайте решения на основе данных: ИИ анализирует большие объемы информации и выдает точные прогнозы"
  },
  {
    icon: BarChart3,
    title: "Конкурентное преимущество",
    description: "Компании, внедрившие ИИ, опережают конкурентов на 20% по ключевым показателям эффективности"
  },
  {
    icon: Brain,
    title: "Инновационный подход",
    description: "Создавайте новые продукты и услуги с помощью ИИ-технологий, открывайте новые рынки"
  }
];

const AIBenefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Преимущества <span className="bg-gradient-gold bg-clip-text text-transparent">ИИ</span> в бизнесе
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Искусственный интеллект трансформирует бизнес-процессы, 
            повышает производительность и открывает новые возможности для роста
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border hover:shadow-card-luxury transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-gold rounded-xl flex items-center justify-center group-hover:shadow-gold-glow transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-overlay rounded-2xl p-8 md:p-12 border border-border">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Готовы начать трансформацию?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Наши эксперты помогут внедрить ИИ-решения в вашу компанию
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Консультация</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Внедрение</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Обучение</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Поддержка</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBenefits;
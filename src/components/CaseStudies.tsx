import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const cases = [
  {
    company: "ТехноГрупп Ритейл",
    industry: "Ритейл",
    challenge: "Сотрудники тратили много времени на поиск информации и обработку клиентских запросов",
    solution: "Обучение сотрудников работе с ИИ-помощниками для автоматизации обработки заказов и консультаций",
    results: [
      "Увеличение производительности на 40%",
      "Рост прибыли на 28% за счет ускорения процессов",
      "Автоматизация 70% рутинных задач",
      "Сокращение времени на обработку заказов в 3 раза"
    ],
    testimonial: "Обучение работе с нейросетями помогло нашим сотрудникам работать намного эффективнее. Они теперь фокусируются на важных задачах",
    author: "Анна Петрова, директор по маркетингу ТехноГрупп"
  },
  {
    company: "СтальМаш Производство",
    industry: "Производство",
    challenge: "Инженеры тратили много времени на создание технической документации и анализ данных",
    solution: "Обучение инженерного состава использованию ИИ для генерации документации и анализа производственных данных",
    results: [
      "Ускорение создания документации в 5 раз",
      "Экономия на зарплатах 2.5 млн руб/год",
      "Повышение точности анализа на 45%",
      "Автоматизация 60% аналитических задач"
    ],
    testimonial: "Нейросети стали незаменимым инструментом для наших инженеров. Мы можем обрабатывать гораздо больше данных и принимать лучшие решения",
    author: "Михаил Сидоров, технический директор СтальМаш"
  },
  {
    company: "ДиджиталПро ИТ",
    industry: "Технологии",
    challenge: "Разработчики тратили много времени на написание кода и поиск решений технических проблем",
    solution: "Обучение программистов эффективной работе с ИИ-ассистентами для ускорения разработки",
    results: [
      "Увеличение скорости разработки на 65%",
      "Рост прибыли на 40% за счет быстрой доставки проектов",
      "Автоматизация написания тестов на 80%",
      "Сокращение времени дебага в 3 раза"
    ],
    testimonial: "ИИ помог нашим разработчикам сосредоточиться на архитектуре и бизнес-логике, а рутинный код пишут нейросети",
    author: "Елена Козлова, руководитель разработки ДиджиталПро"
  },
  {
    company: "ФинКонсалт Груп",
    industry: "Финансы",
    challenge: "Аналитики тратили дни на подготовку отчетов и анализ финансовых данных",
    solution: "Обучение финансовых аналитиков работе с ИИ для автоматического анализа данных и генерации отчетов",
    results: [
      "Ускорение подготовки отчетов в 8 раз",
      "Увеличение прибыли на 35% за счет быстрой аналитики",
      "Автоматизация 75% рутинных расчетов",
      "Повышение точности прогнозов на 50%"
    ],
    testimonial: "Обучение нейросетям позволило нашим аналитикам стать в разы продуктивнее. Мы быстрее реагируем на рыночные изменения",
    author: "Дмитрий Волков, директор по аналитике ФинКонсалт"
  },
  {
    company: "МедиЦентр Плюс",
    industry: "Медицина",
    challenge: "Медперсонал тратил много времени на ведение документации и планирование лечения",
    solution: "Обучение врачей и медсестер использованию ИИ для автоматизации документооборота и помощи в диагностике",
    results: [
      "Сокращение времени на документацию на 60%",
      "Увеличение количества принятых пациентов на 40%",
      "Автоматизация составления медкарт на 80%",
      "Повышение точности первичной диагностики на 30%"
    ],
    testimonial: "Нейросети освободили наших врачей от бумажной работы. Теперь они больше времени проводят с пациентами",
    author: "Ольга Смирнова, главврач МедиЦентр Плюс"
  },
  {
    company: "ЛогистикСервис",
    industry: "Логистика",
    challenge: "Логисты вручную планировали маршруты и обрабатывали большое количество заявок",
    solution: "Обучение логистов работе с ИИ для оптимизации маршрутов и автоматизации планирования",
    results: [
      "Увеличение эффективности планирования на 50%",
      "Рост прибыли на 32% за счет оптимизации",
      "Автоматизация 70% планировочных задач",
      "Сокращение времени обработки заявок в 4 раза"
    ],
    testimonial: "ИИ помог нашим логистам работать намного быстрее и точнее. Мы оптимизировали все процессы планирования",
    author: "Андрей Кузнецов, руководитель логистики ЛогистикСервис"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Истории <span className="bg-gradient-gold bg-clip-text text-transparent">успеха</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Реальные результаты компаний, которые обучили сотрудников работе с нейросетями 
            и получили рост прибыли и автоматизацию рутинных задач
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border hover:shadow-card-luxury transition-all duration-500 hover:-translate-y-1 h-full"
            >
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {caseStudy.company}
                  </h3>
                  <Badge variant="outline" className="border-primary text-primary">
                    {caseStudy.industry}
                  </Badge>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-2">Задача:</h4>
                  <p className="text-muted-foreground text-sm">
                    {caseStudy.challenge}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-2">Решение:</h4>
                  <p className="text-muted-foreground text-sm">
                    {caseStudy.solution}
                  </p>
                </div>
                
                <div className="mb-6 flex-grow">
                  <h4 className="font-medium text-foreground mb-3">Результаты:</h4>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-border pt-6 mt-auto">
                  <blockquote className="text-sm italic text-muted-foreground mb-3">
                    "{caseStudy.testimonial}"
                  </blockquote>
                  <cite className="text-xs text-primary font-medium">
                    — {caseStudy.author}
                  </cite>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-overlay rounded-full border border-border">
            <span className="text-muted-foreground">Ваша компания может стать следующей историей успеха</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
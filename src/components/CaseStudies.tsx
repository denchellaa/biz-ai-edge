import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const cases = [
  {
    company: "ТехноГрупп Ритейл",
    industry: "Ритейл",
    challenge: "Низкая конверсия в онлайн-продажах и высокие затраты на консультации",
    solution: "Внедрение ИИ-чат-бота для консультаций и персонализированных рекомендаций покупателям",
    results: [
      "Увеличение конверсии на 35%",
      "Рост среднего чека на 28%",
      "Снижение нагрузки на колл-центр на 60%",
      "ROI проекта: 340% за 8 месяцев"
    ],
    testimonial: "ИИ помог нам понять клиентов лучше и предлагать именно то, что им нужно. Наши продажи выросли значительно",
    author: "Анна Петрова, директор по маркетингу ТехноГрупп"
  },
  {
    company: "СтальМаш Производство",
    industry: "Производство",
    challenge: "Частые поломки оборудования и дорогостоящие простои производства",
    solution: "Система предиктивной аналитики для прогнозирования отказов оборудования и планового ТО",
    results: [
      "Сокращение простоев на 45%",
      "Экономия на ремонте 2.5 млн руб/год",
      "Повышение общей эффективности на 32%",
      "Снижение аварийных ситуаций на 78%"
    ],
    testimonial: "Теперь мы знаем о проблемах до их возникновения и можем действовать заранее. Это полностью изменило наш подход к обслуживанию",
    author: "Михаил Сидоров, технический директор СтальМаш"
  },
  {
    company: "ДиджиталПро ИТ",
    industry: "Технологии",
    challenge: "Медленная обработка заявок клиентов и перегрузка службы поддержки",
    solution: "Автоматизация первой линии техподдержки с помощью ИИ-ассистента",
    results: [
      "Время ответа сокращено на 70%",
      "Удовлетворенность клиентов выросла до 95%",
      "Освобождено 40% времени специалистов",
      "Снижение затрат на поддержку на 35%"
    ],
    testimonial: "ИИ позволил нам масштабировать поддержку без увеличения штата. Клиенты получают быстрые ответы 24/7",
    author: "Елена Козлова, руководитель поддержки ДиджиталПро"
  },
  {
    company: "ФинКонсалт Груп",
    industry: "Финансы",
    challenge: "Долгий процесс анализа кредитных заявок и высокий риск невозвратов",
    solution: "ИИ-система скоринга для автоматического анализа кредитоспособности клиентов",
    results: [
      "Ускорение обработки заявок в 5 раз",
      "Снижение просроченной задолженности на 42%",
      "Увеличение одобрения качественных заявок на 25%",
      "Экономия на персонале 1.8 млн руб/год"
    ],
    testimonial: "ИИ помог нам принимать более точные решения и существенно снизить риски. Качество нашего портфеля значительно улучшилось",
    author: "Дмитрий Волков, директор по рискам ФинКонсалт"
  },
  {
    company: "МедиЦентр Плюс",
    industry: "Медицина",
    challenge: "Сложности с расписанием врачей и длительное время ожидания пациентов",
    solution: "ИИ-система управления расписанием и предварительной диагностики симптомов",
    results: [
      "Сокращение времени ожидания на 50%",
      "Оптимизация загрузки врачей на 30%",
      "Повышение качества диагностики на 28%",
      "Увеличение пропускной способности на 40%"
    ],
    testimonial: "Система помогла нам лучше организовать работу и дать пациентам более качественную медицинскую помощь",
    author: "Ольга Смирнова, главврач МедиЦентр Плюс"
  },
  {
    company: "ЛогистикСервис",
    industry: "Логистика",
    challenge: "Неэффективные маршруты доставки и высокие транспортные расходы",
    solution: "ИИ-оптимизация маршрутов и предсказание спроса для планирования логистики",
    results: [
      "Сокращение расходов на топливо на 32%",
      "Ускорение доставки на 25%",
      "Повышение точности планирования на 45%",
      "Снижение простоя транспорта на 38%"
    ],
    testimonial: "ИИ кардинально изменил нашу логистику. Мы экономим деньги и время, а клиенты получают товары быстрее",
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
            Реальные результаты компаний, которые уже внедрили ИИ-технологии 
            и получили конкретную пользу для бизнеса
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
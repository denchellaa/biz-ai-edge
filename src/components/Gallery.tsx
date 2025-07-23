import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryImages = [
  {
    src: gallery1,
    title: "Корпоративное обучение ИИ",
    description: "Профессиональные тренинги для сотрудников компаний"
  },
  {
    src: gallery2,
    title: "Стратегические сессии",
    description: "Планирование внедрения ИИ-решений в бизнес-процессы"
  },
  {
    src: gallery3,
    title: "Работа с аналитикой",
    description: "Использование ИИ для анализа данных и принятия решений"
  },
  {
    src: gallery4,
    title: "Консультации экспертов",
    description: "Персональные консультации по внедрению ИИ"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Наша <span className="bg-gradient-gold bg-clip-text text-transparent">работа</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Примеры нашей работы: корпоративные тренинги, консультации 
            и успешные внедрения ИИ-технологий в различных отраслях
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-charcoal opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {image.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
                <div className="relative">
                  <img
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].title}
                    className="w-full h-auto rounded-lg"
                  />
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 rounded-lg px-4 py-2">
                    <h3 className="font-semibold text-foreground text-center">
                      {galleryImages[selectedImage].title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center">
                      {galleryImages[selectedImage].description}
                    </p>
                  </div>
                  
                  <div className="absolute top-4 right-4 flex gap-2">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === selectedImage ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
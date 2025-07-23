import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="p-6">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center mb-6 text-foreground">
          Оставить заявку
        </DialogTitle>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-foreground">Имя *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-secondary border-border text-foreground"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-foreground">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-secondary border-border text-foreground"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="phone" className="text-foreground">Телефон</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="bg-secondary border-border text-foreground"
          />
        </div>
        
        <div>
          <Label htmlFor="company" className="text-foreground">Компания</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="bg-secondary border-border text-foreground"
          />
        </div>
        
        <div>
          <Label htmlFor="message" className="text-foreground">Сообщение</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="bg-secondary border-border text-foreground resize-none"
          />
        </div>
        
        <Button 
          type="submit" 
          variant="luxury" 
          className="w-full mt-6"
          size="lg"
        >
          Отправить заявку
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
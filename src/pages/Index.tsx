import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [visibleSection, setVisibleSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'portfolio', 'skills', 'contact'];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
          
          if (scrollY >= elementTop - windowHeight * 0.7 && scrollY < elementTop + elementHeight - windowHeight * 0.3) {
            setVisibleSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: "Веб-приложение E-commerce",
      description: "Современная платформа для онлайн-торговли с интуитивным интерфейсом",
      tech: ["React", "TypeScript", "Node.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Мобильное приложение",
      description: "Кроссплатформенное приложение для управления задачами",
      tech: ["React Native", "Redux", "Firebase"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Дашборд аналитики",
      description: "Интерактивная панель для визуализации данных",
      tech: ["Vue.js", "D3.js", "Python"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    }
  ];

  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "Design Systems", level: 88 },
    { name: "UI/UX", level: 92 }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-['Open_Sans']">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/84ae91f3-6a8d-4248-8222-62a2877f75d2.jpg" 
              alt="Амиго Logo" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold font-['Montserrat'] text-primary">Амиго</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#skills" className="hover:text-primary transition-colors">Навыки</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/84ae91f3-6a8d-4248-8222-62a2877f75d2.jpg" 
                  alt="Амиго" 
                  className="w-32 h-32 rounded-full object-cover shadow-2xl ring-4 ring-primary/20"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold font-['Montserrat'] mb-6 text-foreground">
              <span className="text-primary">Амиго</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Создаю цифровые продукты, которые вдохновляют и решают задачи пользователей
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Смотреть работы
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 rounded-full font-medium border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Связаться
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-primary" />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] mb-4 text-foreground">
              Портфолио
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Избранные проекты, демонстрирующие мой подход к решению задач
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="rounded-full">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold font-['Montserrat'] mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] mb-4 text-foreground">
              Навыки
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Технологии и инструменты, которыми я владею
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] mb-4 text-foreground">
              Контакты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Готов обсудить ваш проект или ответить на вопросы
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold font-['Montserrat'] mb-2">Email</h3>
                <p className="text-muted-foreground">amigo@example.com</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold font-['Montserrat'] mb-2">Telegram</h3>
                <p className="text-muted-foreground">@amigo_dev</p>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Начать проект
                <Icon name="Rocket" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="https://cdn.poehali.dev/files/84ae91f3-6a8d-4248-8222-62a2877f75d2.jpg" 
              alt="Амиго Logo" 
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-lg font-bold font-['Montserrat'] text-primary">Амиго</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Амиго. Создано с 💫 и кодом
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
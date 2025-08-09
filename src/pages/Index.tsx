import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState('about');

  const clanMembers = [
    {
      name: "Тимотя",
      role: "Лидер клана",
      description: "Добрая, справедливая, всегда поможет. Ценит каждый совет и руководит кланом с мудростью.",
      multiplier: "3.2x",
      isLeader: true
    },
    {
      name: "Веренея Лесовская",
      role: "Заместитель",
      description: "Дает полезные советы и поддерживает дружную атмосферу в клане.",
      multiplier: "2.8x",
      isDeputy: true
    },
    {
      name: "Афина",
      role: "Активный игрок",
      description: "Очень активный участник, который ценит каждый совет и помогает новичкам.",
      multiplier: "2.5x",
      isActive: true
    }
  ];

  const gameFeatures = [
    { icon: "Search", title: "24 буквы в кубе", desc: "Ищите слова в кубе из 24 букв" },
    { icon: "Users", title: "15 участников", desc: "Дружная команда единомышленников" },
    { icon: "Zap", title: "Клановые множители", desc: "Увеличивайте очки для команды" },
    { icon: "MessageCircle", title: "Чат", desc: "Общение и обмен советами" }
  ];

  const clanValues = [
    { icon: "Heart", title: "Доброта", desc: "Помогаем друг другу и новичкам" },
    { icon: "Shield", title: "Справедливость", desc: "Честная игра для всех" },
    { icon: "Zap", title: "Сила", desc: "Мощный клан с высокими результатами" },
    { icon: "Gamepad2", title: "Удовольствие", desc: "Играем для радости и веселья" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-['Open_Sans']">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/84ae91f3-6a8d-4248-8222-62a2877f75d2.jpg" 
              alt="Клан Амиго" 
              className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
            />
            <div>
              <h1 className="text-xl font-bold font-['Montserrat'] text-primary">Клан Амиго</h1>
              <p className="text-xs text-muted-foreground">Слово за слово</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="hidden sm:flex">
              <Icon name="Users" size={14} className="mr-1" />
              15 участников
            </Badge>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Присоединиться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center">
              <img 
                src="/img/df2ca357-85bf-4600-b409-b7abc03ac018.jpg" 
                alt="Клан Амиго" 
                className="w-24 h-24 rounded-full shadow-xl ring-4 ring-primary/20 object-cover"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-['Montserrat'] mb-6">
              Добро пожаловать в клан <span className="text-primary">Амиго</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Дружный и мощный клан в игре "Слово за слово". Мы играем в КЗ Грааль Сейф, 
              помогаем друг другу и всегда рады новым игрокам!
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="outline" className="px-4 py-2">
                <Icon name="Target" size={16} className="mr-2" />
                КЗ Грааль Сейф
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Icon name="Users" size={16} className="mr-2" />
                15/40 игроков
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3 font-medium">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Чат
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 font-medium">
                <Icon name="Info" size={20} className="mr-2" />
                О клане
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Game Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat'] mb-4">
              Игра "Слово за слово"
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Увлекательная словесная игра, где нужно находить слова в кубе из 24 букв
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://cdn.poehali.dev/files/15ec7a72-7d76-4a60-bcb2-3c137d3d1533.jpg" 
                  alt="Игра Слово за слово - фасовочный куб из 25 букв" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {gameFeatures.map((feature) => (
                    <Card key={feature.title} className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={feature.icon} size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm">{feature.title}</h3>
                          <p className="text-xs text-muted-foreground">{feature.desc}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Как играть:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Находите слова в кубе из 24 букв</li>
                    <li>• Выполняйте клановые задания</li>
                    <li>• Увеличивайте свой множитель</li>
                    <li>• Помогайте команде набирать очки</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clan Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat'] mb-4">
              Ценности клана
            </h2>
            <p className="text-lg text-muted-foreground">
              То, что делает наш клан особенным
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {clanValues.map((value) => (
              <Card key={value.title} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-['Montserrat'] mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clan Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat'] mb-4">
              Руководство клана
            </h2>
            <p className="text-lg text-muted-foreground">
              Наши лидеры и активные игроки
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {clanMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {member.isLeader && <Icon name="Crown" size={32} className="text-primary" />}
                      {member.isDeputy && <Icon name="Shield" size={32} className="text-primary" />}
                      {member.isActive && <Icon name="Star" size={32} className="text-primary" />}
                    </div>
                    {member.isLeader && (
                      <Badge className="absolute top-0 right-1/2 translate-x-1/2 bg-primary">
                        Лидер
                      </Badge>
                    )}
                    {member.isDeputy && (
                      <Badge variant="secondary" className="absolute top-0 right-1/2 translate-x-1/2">
                        Замести­тель
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-['Montserrat']">{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Множитель</span>
                    <Badge variant="outline" className="font-mono">
                      {member.multiplier}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat'] mb-6">
              Присоединяйся к нам!
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Мы всегда рады новым игрокам! В нашем клане ты найдешь поддержку, 
              полезные советы и дружную атмосферу. Играем для удовольствия и помогаем друг другу расти.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                  <div>
                    <h3 className="font-semibold">Чат</h3>
                    <p className="text-sm text-muted-foreground">Общение и советы</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <Icon name="HelpCircle" size={24} className="text-primary" />
                  <div>
                    <h3 className="font-semibold">Поддержка новичков</h3>
                    <p className="text-sm text-muted-foreground">Поможем освоиться</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <Button size="lg" className="px-8 py-3 text-lg font-medium">
              <Icon name="Users" size={20} className="mr-2" />
              Вступить в клан
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="https://cdn.poehali.dev/files/84ae91f3-6a8d-4248-8222-62a2877f75d2.jpg" 
              alt="Клан Амиго" 
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-lg font-bold font-['Montserrat'] text-primary">Клан Амиго</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Играем в "Слово за слово" с удовольствием • КЗ Грааль Сейф
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 Клан Амиго. Добро, справедливость, сила! 🎮
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
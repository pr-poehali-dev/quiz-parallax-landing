import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [date, setDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quizEvents = [
    {
      id: 1,
      date: '8 февраля',
      time: '18:00',
      price: 600,
      theme: 'КиноКвиз'
    },
    {
      id: 2,
      date: '12 февраля',
      time: '18:00',
      price: 600,
      theme: 'Русский рок'
    },
    {
      id: 3,
      date: '15 февраля',
      time: '18:00',
      price: 600,
      theme: 'Аморе Аморе и все о любви'
    },
    {
      id: 4,
      date: '19 февраля',
      time: '18:00',
      price: 600,
      theme: 'Детективная игра'
    },
    {
      id: 5,
      date: '22 февраля',
      time: '18:00',
      price: 600,
      theme: 'Мужской стиль'
    }
  ];

  const rules = [
    {
      title: 'Состав команды',
      content: 'Команда от 2 до 10 человек. Можно прийти одному — мы поможем найти команду!'
    },
    {
      title: 'Регистрация',
      content: 'Бронируйте место минимум за 24 часа до начала квиза. Оплата на месте или онлайн.'
    },
    {
      title: 'Запрещено',
      content: 'Использование телефонов и гаджетов во время игры. За нарушение — дисквалификация команды.'
    },
    {
      title: 'Призы',
      content: 'Топ-3 команды получают призы от наших партнёров и сертификаты в бар клуба.'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={28} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              БрейнШок
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('quizzes')} className="text-sm hover:text-primary transition-colors">
              Квизы
            </button>
            <button onClick={() => scrollToSection('booking')} className="text-sm hover:text-primary transition-colors">
              Бронирование
            </button>
            <button onClick={() => scrollToSection('rules')} className="text-sm hover:text-primary transition-colors">
              Правила
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Забронировать
          </Button>
        </div>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-glow" />
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in-up">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm px-4 py-1">
            Клуб Адам и Ева
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
            БрейнШок
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Интеллектуальные квизы, которые взрывают мозг! 
            Проверь свои знания и выиграй крутые призы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8"
              onClick={() => scrollToSection('booking')}
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Забронировать место
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
              onClick={() => scrollToSection('quizzes')}
            >
              <Icon name="Sparkles" className="mr-2" size={20} />
              Расписание квизов
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold text-primary mb-2">500₽</div>
              <div className="text-sm text-muted-foreground">Стоимость участия</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.7s' }}>
              <div className="text-4xl font-bold text-primary mb-2">2-10</div>
              <div className="text-sm text-muted-foreground">Человек в команде</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-4xl font-bold text-secondary mb-2">5</div>
              <div className="text-sm text-muted-foreground">Квизов в месяц</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-muted-foreground" size={32} />
        </div>
      </section>

      <section id="quizzes" className="py-24 relative">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-background via-card to-background"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              Предстоящие события
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Расписание квизов</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выбирай дату, собирай команду и готовься к интеллектуальному сражению!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {quizEvents.map((quiz, index) => (
              <Card 
                key={quiz.id} 
                className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{quiz.theme}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-base">
                        <Icon name="Calendar" size={16} />
                        {quiz.date} в {quiz.time}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      {quiz.price}₽
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="Ticket" className="mr-2" size={18} />
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Выбери дату
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Бронирование</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Посмотри календарь предстоящих квизов и забронируй место для своей команды
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur border-border p-6 animate-fade-in-up">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border-none"
              />
            </Card>

            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Card className="bg-card/50 backdrop-blur border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Info" className="text-primary" size={24} />
                    Как забронировать?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      1
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Выбери квиз</div>
                      <div className="text-sm">Посмотри расписание и выбери интересную тему</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      2
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Забронируй место</div>
                      <div className="text-sm">Нажми кнопку "Забронировать" и заполни форму</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      3
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Приходи и выигрывай</div>
                      <div className="text-sm">Собери команду и приходи в клуб за 15 минут до начала</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Gift" className="text-primary" size={24} />
                    Призы победителям
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Победители получают призы от наших партнёров, а также специальные подарки от клуба Адам и Ева!</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="rules" className="py-24 relative overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          style={{ transform: `translate(${scrollY * 0.2}px, ${scrollY * -0.1}px)` }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              Важная информация
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Правила игры</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ознакомься с правилами перед участием в квизе
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {rules.map((rule, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card/50 backdrop-blur border-border rounded-lg px-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="hover:text-primary text-lg font-semibold">
                    {rule.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {rule.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Card className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Icon name="Lightbulb" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-2 text-lg">Совет новичкам</div>
                    <p className="text-muted-foreground">
                      Первый раз на квизе? Не волнуйся! Наши ведущие объяснят все правила перед началом. 
                      Главное — приходи с хорошим настроением и желанием весело провести время!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Свяжись с нами
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Остались вопросы? Мы всегда на связи!
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur border-border animate-fade-in-up">
              <CardHeader>
                <CardTitle>Клуб Адам и Ева</CardTitle>
                <CardDescription>Место проведения квизов БрейнШок</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground text-sm">
                      г. Москва, ул. Примерная, д. 123
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground text-sm">
                      +7 (999) 123-45-67
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground text-sm">
                      brainshock@adameva.club
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-muted-foreground text-sm">
                      Пн-Чт: 18:00 - 02:00<br />
                      Пт-Вс: 18:00 - 06:00
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle>Мы в соцсетях</CardTitle>
                <CardDescription>Следи за новостями и анонсами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start gap-3 h-12 hover:bg-primary/10 hover:border-primary">
                  <Icon name="Instagram" size={20} />
                  <span>@brainshock_quiz</span>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3 h-12 hover:bg-primary/10 hover:border-primary">
                  <Icon name="Send" size={20} />
                  <span>Telegram: @brainshock</span>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3 h-12 hover:bg-primary/10 hover:border-primary">
                  <Icon name="Facebook" size={20} />
                  <span>БрейнШок Квизы</span>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3 h-12 hover:bg-primary/10 hover:border-primary">
                  <Icon name="Youtube" size={20} />
                  <span>БрейнШок TV</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-card/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={24} />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                БрейнШок
              </span>
            </div>
            <div className="text-muted-foreground text-sm text-center md:text-left">
              © 2024 БрейнШок. Все права защищены. Клуб Адам и Ева.
            </div>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary">
                <Icon name="Send" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary">
                <Icon name="Facebook" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
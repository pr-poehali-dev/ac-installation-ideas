import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const conditioners = [
  {
    id: 1,
    name: 'Arctic Pro 3000',
    power: 3.0,
    area: 30,
    price: 45000,
    features: ['Инверторный компрессор', 'Wi-Fi управление', 'Очистка воздуха'],
    image: 'https://cdn.poehali.dev/projects/5f19efee-3ceb-42ec-b544-f2c0f56a7bc7/files/4ab8f459-b3d7-4544-9a3e-7f4468b18437.jpg'
  },
  {
    id: 2,
    name: 'CoolTech Elite 5000',
    power: 5.0,
    area: 50,
    price: 65000,
    features: ['Энергоэффективность A+++', 'Тихий режим', 'Автоматическая очистка'],
    image: 'https://cdn.poehali.dev/projects/5f19efee-3ceb-42ec-b544-f2c0f56a7bc7/files/aa01838e-435c-4311-8dcb-ece515391cab.jpg'
  },
  {
    id: 3,
    name: 'SmartCool 2500',
    power: 2.5,
    area: 25,
    price: 38000,
    features: ['Умное управление', 'Экономичный режим', 'Фильтр с ионизацией'],
    image: 'https://cdn.poehali.dev/projects/5f19efee-3ceb-42ec-b544-f2c0f56a7bc7/files/4ab8f459-b3d7-4544-9a3e-7f4468b18437.jpg'
  }
];

const reviews = [
  { id: 1, name: 'Алексей М.', rating: 5, text: 'Установили кондиционер быстро и качественно. Работает идеально!', date: '15.09.2024' },
  { id: 2, name: 'Мария К.', rating: 5, text: 'Профессиональный подход, чистая работа. Рекомендую!', date: '08.09.2024' },
  { id: 3, name: 'Дмитрий П.', rating: 4, text: 'Хорошая работа, единственное - пришлось подождать монтажников пару дней.', date: '01.09.2024' }
];

const services = [
  { name: 'Стандартный монтаж', price: 'от 8 000 ₽', icon: 'Wrench' },
  { name: 'Монтаж с прокладкой трассы', price: 'от 12 000 ₽', icon: 'Settings' },
  { name: 'Демонтаж старого оборудования', price: 'от 3 000 ₽', icon: 'Trash2' },
  { name: 'Техническое обслуживание', price: 'от 2 500 ₽', icon: 'Tool' }
];

export default function Index() {
  const [area, setArea] = useState([30]);
  const [selectedConditioner, setSelectedConditioner] = useState<string>('');
  const [installationType, setInstallationType] = useState<string>('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const [compareList, setCompareList] = useState<number[]>([]);

  const calculatePrice = () => {
    const conditioner = conditioners.find(c => c.id === parseInt(selectedConditioner));
    const installationCost = installationType === 'standard' ? 8000 : installationType === 'extended' ? 12000 : 0;
    if (conditioner) {
      setCalculatedPrice(conditioner.price + installationCost);
    }
  };

  const toggleCompare = (id: number) => {
    setCompareList(prev => 
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Snowflake" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-foreground">CoolTech Pro</h1>
            </div>
            <div className="flex gap-6">
              <a href="#main" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="main" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-foreground">
                Профессиональный монтаж <span className="text-primary">кондиционеров</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Современные технологии климат-контроля для вашего комфорта. Гарантия качества и надежности.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Связаться
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/50 to-secondary/50 blur-2xl opacity-50"></div>
              <img 
                src="https://cdn.poehali.dev/projects/5f19efee-3ceb-42ec-b544-f2c0f56a7bc7/files/9312fcc3-5291-400f-9292-1ed50f162b73.jpg" 
                alt="Монтаж кондиционера"
                className="relative rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-3xl">
                <Icon name="Calculator" className="text-primary" size={32} />
                Онлайн-калькулятор стоимости
              </CardTitle>
              <CardDescription>Подберите модель и рассчитайте стоимость монтажа</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>Площадь помещения: {area[0]} м²</Label>
                <Slider
                  value={area}
                  onValueChange={setArea}
                  min={10}
                  max={100}
                  step={5}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Выберите модель кондиционера</Label>
                <Select value={selectedConditioner} onValueChange={setSelectedConditioner}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите модель" />
                  </SelectTrigger>
                  <SelectContent>
                    {conditioners.map(c => (
                      <SelectItem key={c.id} value={c.id.toString()}>
                        {c.name} - {c.power} кВт (до {c.area} м²)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Тип монтажа</Label>
                <Select value={installationType} onValueChange={setInstallationType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Стандартный (до 3м трассы)</SelectItem>
                    <SelectItem value="extended">С прокладкой трассы</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculatePrice} 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={!selectedConditioner || !installationType}
              >
                Рассчитать стоимость
              </Button>

              {calculatedPrice && (
                <div className="p-6 bg-primary/10 rounded-lg border border-primary/30">
                  <p className="text-2xl font-bold text-center text-foreground">
                    Итоговая стоимость: <span className="text-primary">{calculatedPrice.toLocaleString()} ₽</span>
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Каталог <span className="text-primary">кондиционеров</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {conditioners.map(conditioner => (
              <Card key={conditioner.id} className="border-primary/20 hover:border-primary/50 transition-all">
                <CardHeader className="p-0">
                  <img 
                    src={conditioner.image} 
                    alt={conditioner.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{conditioner.name}</CardTitle>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Zap" size={16} className="text-primary" />
                      <span>Мощность: {conditioner.power} кВт</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Home" size={16} className="text-primary" />
                      <span>Площадь: до {conditioner.area} м²</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {conditioner.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary">{conditioner.price.toLocaleString()} ₽</p>
                    <Button
                      variant={compareList.includes(conditioner.id) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleCompare(conditioner.id)}
                      className={compareList.includes(conditioner.id) ? "bg-primary" : "border-primary text-primary"}
                    >
                      <Icon name={compareList.includes(conditioner.id) ? "Check" : "Plus"} size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {compareList.length > 0 && (
            <div className="mt-8 p-6 bg-card border border-primary/30 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-foreground">Сравнение моделей</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-2 text-foreground">Характеристика</th>
                      {compareList.map(id => {
                        const c = conditioners.find(cond => cond.id === id);
                        return <th key={id} className="text-left p-2 text-foreground">{c?.name}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-2 text-muted-foreground">Мощность</td>
                      {compareList.map(id => {
                        const c = conditioners.find(cond => cond.id === id);
                        return <td key={id} className="p-2 text-foreground">{c?.power} кВт</td>;
                      })}
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-2 text-muted-foreground">Площадь</td>
                      {compareList.map(id => {
                        const c = conditioners.find(cond => cond.id === id);
                        return <td key={id} className="p-2 text-foreground">{c?.area} м²</td>;
                      })}
                    </tr>
                    <tr>
                      <td className="p-2 text-muted-foreground">Цена</td>
                      {compareList.map(id => {
                        const c = conditioners.find(cond => cond.id === id);
                        return <td key={id} className="p-2 font-bold text-primary">{c?.price.toLocaleString()} ₽</td>;
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="services" className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Наши <span className="text-primary">услуги</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="border-primary/20 hover:border-primary/50 transition-all text-center">
                <CardContent className="p-6">
                  <Icon name={service.icon as any} className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="text-xl font-bold mb-2 text-foreground">{service.name}</h3>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Прозрачное <span className="text-primary">ценообразование</span>
          </h2>

          <Tabs defaultValue="installation" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="installation">Монтаж</TabsTrigger>
              <TabsTrigger value="service">Обслуживание</TabsTrigger>
              <TabsTrigger value="additional">Дополнительно</TabsTrigger>
            </TabsList>
            
            <TabsContent value="installation" className="mt-6">
              <Card className="border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded">
                    <span className="text-foreground">Стандартный монтаж (до 3м трассы)</span>
                    <span className="font-bold text-primary">8 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded">
                    <span className="text-foreground">Монтаж с прокладкой до 5м</span>
                    <span className="font-bold text-primary">12 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded">
                    <span className="text-foreground">Каждый дополнительный метр трассы</span>
                    <span className="font-bold text-primary">1 500 ₽</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="service" className="mt-6">
              <Card className="border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded">
                    <span className="text-foreground">Чистка и заправка фреоном</span>
                    <span className="font-bold text-primary">4 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded">
                    <span className="text-foreground">Диагностика системы</span>
                    <span className="font-bold text-primary">2 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded">
                    <span className="text-foreground">Годовое обслуживание</span>
                    <span className="font-bold text-primary">8 000 ₽</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="additional" className="mt-6">
              <Card className="border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded">
                    <span className="text-foreground">Демонтаж старого оборудования</span>
                    <span className="font-bold text-primary">3 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded">
                    <span className="text-foreground">Установка дренажной помпы</span>
                    <span className="font-bold text-primary">5 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded">
                    <span className="text-foreground">Пробивка отверстия в стене</span>
                    <span className="font-bold text-primary">2 500 ₽</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="portfolio" className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Наши <span className="text-primary">работы</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <Card key={i} className="border-primary/20 overflow-hidden group">
                <div className="relative">
                  <img 
                    src="https://cdn.poehali.dev/projects/5f19efee-3ceb-42ec-b544-f2c0f56a7bc7/files/9312fcc3-5291-400f-9292-1ed50f162b73.jpg"
                    alt={`Проект ${i}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <p className="text-foreground font-bold">Объект {i}</p>
                      <p className="text-muted-foreground text-sm">Монтаж системы кондиционирования</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Отзывы клиентов</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map(review => (
                <Card key={review.id} className="border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <CardDescription>{review.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="border-primary/20 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Гарантия и сертификаты</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="Shield" className="text-primary flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-foreground">Гарантия 3 года</h4>
                  <p className="text-muted-foreground">Полная гарантия на все виды работ и оборудование</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-4">
                <Icon name="Award" className="text-primary flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-foreground">Сертифицированные специалисты</h4>
                  <p className="text-muted-foreground">Все монтажники имеют официальные сертификаты производителей</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-4">
                <Icon name="FileCheck" className="text-primary flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-foreground">Официальный договор</h4>
                  <p className="text-muted-foreground">Заключаем договор с фиксацией всех условий и сроков</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <Card className="border-primary/20 max-w-xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Онлайн-консультация</CardTitle>
              <CardDescription className="text-center">Задайте вопрос нашему специалисту</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Ваше имя</Label>
                <Input placeholder="Введите имя" className="bg-background" />
              </div>
              <div>
                <Label>Телефон</Label>
                <Input placeholder="+7 (___) ___-__-__" className="bg-background" />
              </div>
              <div>
                <Label>Ваш вопрос</Label>
                <Input placeholder="Опишите ваш вопрос" className="bg-background" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Начать чат
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border bg-card/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Snowflake" className="text-primary" size={24} />
              <span className="font-bold text-foreground">CoolTech Pro</span>
            </div>
            <div className="flex gap-6 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">+7 (495) 123-45-67</a>
              <a href="#" className="hover:text-primary transition-colors">info@cooltech.ru</a>
            </div>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                <Icon name="Send" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

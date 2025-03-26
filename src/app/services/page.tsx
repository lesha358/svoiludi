'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Truck, Home, Building, Package, Users, Box, Wrench, Shield, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function ServicesPage() {
  const router = useRouter()

  const handleOrder = (service: string) => {
    router.push('/contacts')
  }

  const handleDetails = (service: string) => {
    switch (service) {
      case 'Упаковочные материалы':
        router.push('/services/packaging')
        break
      case 'Страхование':
        router.push('/services/insurance')
        break
      case 'Сборка мебели':
        router.push('/services/furniture')
        break
      case 'Хранение':
        router.push('/services/storage')
        break
      default:
        router.push('/contacts')
    }
  }

  const services = [
    {
      icon: Building,
      title: 'Офисный переезд',
      description: 'Профессиональная организация переезда офиса любой сложности. Включает упаковку, разборку мебели, погрузку, транспортировку и расстановку на новом месте.',
      features: [
        'Упаковка документов и оргтехники',
        'Разборка и сборка офисной мебели',
        'Погрузка и разгрузка',
        'Транспортировка',
        'Расстановка мебели на новом месте'
      ]
    },
    {
      icon: Home,
      title: 'Квартирный переезд',
      description: 'Быстрый и надежный переезд квартиры с сохранением всех вещей. Наши специалисты аккуратно упакуют и перевезут ваши вещи.',
      features: [
        'Упаковка вещей',
        'Разборка и сборка мебели',
        'Погрузка и разгрузка',
        'Транспортировка',
        'Расстановка мебели'
      ]
    },
    {
      icon: Package,
      title: 'Упаковка и хранение',
      description: 'Профессиональная упаковка вещей с использованием качественных материалов. Возможность временного хранения в надежном месте.',
      features: [
        'Упаковка вещей',
        'Упаковочные материалы',
        'Временное хранение',
        'Страхование груза',
        'Инвентаризация'
      ]
    },
    {
      icon: Users,
      title: 'Грузчики под заказ',
      description: 'Профессиональные грузчики для любых работ. Опытные специалисты с многолетним стажем.',
      features: [
        'Погрузка и разгрузка',
        'Разборка и сборка мебели',
        'Подъем грузов',
        'Такелажные работы',
        'Упаковка вещей'
      ]
    },
    {
      icon: Truck,
      title: 'Грузовые перевозки',
      description: 'Перевозка грузов любой сложности на современных грузовых автомобилях с гидробортом и гидролифтом.',
      features: [
        'Различные типы грузовиков',
        'Гидроборт и гидролифт',
        'Фиксированные цены',
        'Страхование груза',
        'Отслеживание груза'
      ]
    },
    {
      icon: Wrench,
      title: 'Такелажные работы',
      description: 'Профессиональные такелажные работы любой сложности. Безопасная транспортировка тяжелых и габаритных грузов.',
      features: [
        'Подъем грузов',
        'Перемещение оборудования',
        'Разгрузка контейнеров',
        'Монтажные работы',
        'Специальное оборудование'
      ]
    }
  ]

  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="section">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Наши услуги
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Полный спектр услуг для организации переезда любой сложности
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="card flex flex-col h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground">
                        <Check className="w-5 h-5 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-auto" 
                    onClick={() => handleOrder(service.title)}
                  >
                    Заказать услугу
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-8">
                Дополнительные услуги
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="card flex flex-col h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Box className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Упаковочные материалы</h3>
                  <p className="text-muted-foreground flex-grow">Качественные материалы для упаковки вещей</p>
                  <Button 
                    className="w-full mt-4" 
                    variant="outline" 
                    onClick={() => handleDetails('Упаковочные материалы')}
                  >
                    Подробнее
                  </Button>
                </div>
                <div className="card flex flex-col h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Страхование</h3>
                  <p className="text-muted-foreground flex-grow">Страхование груза на время перевозки</p>
                  <Button 
                    className="w-full mt-4" 
                    variant="outline"
                    onClick={() => handleDetails('Страхование')}
                  >
                    Подробнее
                  </Button>
                </div>
                <div className="card flex flex-col h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Сборка мебели</h3>
                  <p className="text-muted-foreground flex-grow">Профессиональная сборка и разборка мебели</p>
                  <Button 
                    className="w-full mt-4" 
                    variant="outline"
                    onClick={() => handleDetails('Сборка мебели')}
                  >
                    Подробнее
                  </Button>
                </div>
                <div className="card flex flex-col h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Box className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Хранение</h3>
                  <p className="text-muted-foreground flex-grow">Временное хранение вещей</p>
                  <Button 
                    className="w-full mt-4" 
                    variant="outline"
                    onClick={() => handleDetails('Хранение')}
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 
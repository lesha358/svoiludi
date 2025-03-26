'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Shield, Clock, Users, Package, Truck, Star, Box, Zap } from 'lucide-react'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const advantages = [
  {
    title: 'Надежность',
    description: 'Мы гарантируем качество наших услуг и соблюдение всех договоренностей',
    icon: Shield
  },
  {
    title: 'Пунктуальность',
    description: 'Строго соблюдаем сроки выполнения работ и доставки',
    icon: Clock
  },
  {
    title: 'Опыт',
    description: 'Более 10 лет успешной работы на рынке',
    icon: Star
  },
  {
    title: 'Профессионализм',
    description: 'Наши специалисты имеют многолетний опыт работы',
    icon: Users
  },
  {
    title: 'Современное оборудование',
    description: 'Используем новейшее оборудование для безопасной транспортировки',
    icon: Package
  },
  {
    title: 'Собственный автопарк',
    description: 'Располагаем современными грузовыми автомобилями',
    icon: Truck
  }
]

const guarantees = [
  {
    title: 'Материальная ответственность',
    description: 'Фиксируем в договоре материальную ответственность за груз'
  },
  {
    title: 'Страхование',
    description: 'Страхуем все грузы в страховой компании'
  },
  {
    title: 'Документы',
    description: 'Все закрывающие документы будут у вас на руках в нужный срок'
  }
]

export default function AdvantagesPage() {
  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="section">
          <div className="container">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши преимущества</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Почему клиенты выбирают нас для организации переезда
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {advantages.map((advantage, index) => (
                <ScrollAnimation key={advantage.title} delay={index * 0.1}>
                  <div className="card h-full flex flex-col">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <advantage.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground flex-grow">{advantage.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Гарантия качества</h2>
                <p className="text-xl text-muted-foreground mt-4">
                  Мы предоставляем дополнительные гарантии для вашего спокойствия
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {guarantees.map((guarantee, index) => (
                <ScrollAnimation key={guarantee.title} delay={index * 0.1}>
                  <div className="card h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-4">{guarantee.title}</h3>
                    <p className="text-muted-foreground flex-grow">{guarantee.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 
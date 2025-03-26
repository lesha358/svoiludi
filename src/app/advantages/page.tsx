'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Shield, Clock, Users, Package, Truck, Star, Box, Zap } from 'lucide-react'

export default function AdvantagesPage() {
  const advantages = [
    {
      icon: Shield,
      title: 'Прозрачные условия',
      description: 'Фиксированная цена без скрытых платежей. Все условия прописаны в договоре.'
    },
    {
      icon: Clock,
      title: 'Фиксированная цена',
      description: 'Стоимость услуг не меняется после подписания договора.'
    },
    {
      icon: Users,
      title: 'Защита груза',
      description: 'Материальная ответственность за груз и страхование.'
    },
    {
      icon: Package,
      title: 'Минимальные сроки',
      description: 'Быстрая организация и выполнение переезда в удобное для вас время.'
    },
    {
      icon: Truck,
      title: 'Собственный автопарк',
      description: 'Современные грузовые автомобили с гидробортом и гидролифтом.'
    },
    {
      icon: Star,
      title: 'Профессиональные грузчики',
      description: 'Опытные и вежливые специалисты с многолетним стажем.'
    },
    {
      icon: Box,
      title: 'Бережная транспортировка',
      description: 'Аккуратная погрузка и разгрузка с использованием специального оборудования.'
    },
    {
      icon: Zap,
      title: 'Временное хранение',
      description: 'Возможность временного хранения мебели и вещей.'
    }
  ]

  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="section">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши преимущества</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Почему клиенты выбирают нас для организации переезда
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="card">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <advantage.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-8">Гарантия качества</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card">
                  <h3 className="text-xl font-bold mb-4">Материальная ответственность</h3>
                  <p className="text-muted-foreground">
                    Фиксируем в договоре материальную ответственность за груз
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold mb-4">Страхование</h3>
                  <p className="text-muted-foreground">
                    Страхуем все грузы в страховой компании
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold mb-4">Документы</h3>
                  <p className="text-muted-foreground">
                    Все закрытые документы будут у вас на руках в нужный срок
                  </p>
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
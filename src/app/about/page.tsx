'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Award, Users, Truck, Clock, Shield, Star } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    {
      icon: Award,
      value: '15+',
      label: 'Лет опыта'
    },
    {
      icon: Users,
      value: '1000+',
      label: 'Довольных клиентов'
    },
    {
      icon: Truck,
      value: '20+',
      label: 'Грузовых машин'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Поддержка'
    }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Надежность',
      description: 'Мы гарантируем безопасность и сохранность ваших вещей'
    },
    {
      icon: Star,
      title: 'Качество',
      description: 'Профессиональный подход к каждому клиенту'
    },
    {
      icon: Clock,
      title: 'Пунктуальность',
      description: 'Строгое соблюдение сроков выполнения работ'
    }
  ]

  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">О компании</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ваш надежный партнер в организации переезда
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Наша история</h2>
                <p className="text-gray-600 mb-4">
                  Компания "Свои Люди" была основана в 2008 году с целью предоставления качественных услуг по организации переездов. За годы работы мы заслужили доверие тысяч клиентов и стали одной из ведущих компаний в сфере перевозок.
                </p>
                <p className="text-gray-600 mb-4">
                  Мы постоянно развиваемся и совершенствуемся, внедряя новые технологии и улучшая качество обслуживания. Наша команда состоит из опытных профессионалов, которые любят свою работу и стремятся к совершенству.
                </p>
                <p className="text-gray-600">
                  Мы гордимся тем, что помогаем людям и компаниям осуществлять переезды без хлопот и стресса. Наша миссия - сделать процесс переезда максимально комфортным и безопасным для каждого клиента.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Наши ценности</h2>
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-center">Почему выбирают нас</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Опыт и профессионализм</h3>
                  <p className="text-gray-600">
                    Наши специалисты имеют многолетний опыт работы и регулярно проходят обучение для повышения квалификации.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Современный автопарк</h3>
                  <p className="text-gray-600">
                    Мы используем современные грузовые автомобили с гидробортом и гидролифтом для безопасной перевозки.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Гибкие цены</h3>
                  <p className="text-gray-600">
                    Мы предлагаем прозрачные цены и различные тарифы для разных потребностей клиентов.
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
'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Box, Check } from 'lucide-react'

export default function PackagingPage() {
  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="section bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Упаковочные материалы
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Качественные материалы для безопасной упаковки ваших вещей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Box className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Что мы предлагаем</h2>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Картонные коробки разных размеров
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Пакеты для одежды
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Стрейч-пленка
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Пузырчатая пленка
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Скотч и малярная лента
                  </li>
                </ul>
              </div>

              <div className="card">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Box className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Преимущества</h2>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Высокое качество материалов
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Доставка к месту переезда
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Оптовые цены
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Возможность возврата неиспользованных материалов
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 
'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Wrench, Check } from 'lucide-react'

export default function FurniturePage() {
  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="section bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Сборка мебели
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Профессиональная сборка и разборка мебели любой сложности
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Wrench className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Наши услуги</h2>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Разборка мебели перед переездом
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Сборка мебели на новом месте
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Ремонт мебели при необходимости
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Установка встроенной мебели
                  </li>
                </ul>
              </div>

              <div className="card">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Wrench className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Преимущества</h2>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Опытные мастера
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Современные инструменты
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Гарантия на работы
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Оперативность выполнения
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

 
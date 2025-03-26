'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Shield, Check } from 'lucide-react'

export default function InsurancePage() {
  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="section bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Страхование груза
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Надежная защита ваших вещей во время переезда
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">Виды страхования</h2>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Полное страхование груза
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Страхование от повреждений
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Страхование от кражи
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Страхование ценных предметов
                  </li>
                </ul>
              </div>

              <div className="card p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">Преимущества</h2>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Быстрое оформление
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Прозрачные условия
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Быстрое возмещение ущерба
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Страхование от всех рисков
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
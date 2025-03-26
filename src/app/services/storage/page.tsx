'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Box, Check } from 'lucide-react'

export default function StoragePage() {
  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="section bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Временное хранение
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Надежное хранение ваших вещей в современных складских помещениях
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Box className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">Условия хранения</h2>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Современные складские помещения
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Климат-контроль
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Круглосуточное видеонаблюдение
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Охрана территории
                  </li>
                </ul>
              </div>

              <div className="card p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Box className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">Преимущества</h2>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Гибкие тарифы
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Возможность доступа к вещам
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Страхование хранимых вещей
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Удобное расположение
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
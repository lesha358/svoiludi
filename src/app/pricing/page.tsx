'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function PricingPage() {
  const router = useRouter()

  const handleOrder = (tariff: string) => {
    router.push('/contacts')
  }

  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="section">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Тарифы на переезд</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Прозрачные цены и фиксированная стоимость услуг
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Тариф "Бюджет" */}
              <div className="card flex flex-col h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Тариф "Бюджет"</h3>
                  <div className="text-4xl font-bold text-primary mb-2">от 6 200 ₽</div>
                  <p className="text-muted-foreground">Аренда автомобиля с гидробортом (8 м³)</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    2 специалиста/грузчика
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    4 часа работы включено
                  </li>
                </ul>
                <Button 
                  className="w-full mt-auto"
                  onClick={() => handleOrder('Бюджет')}
                >
                  Заказать
                </Button>
              </div>

              {/* Тариф "Стандарт" */}
              <div className="card flex flex-col h-full border-2 border-primary relative">
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg rounded-tr-lg">
                  Популярный
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Тариф "Стандарт"</h3>
                  <div className="text-4xl font-bold text-primary mb-2">от 10 500 ₽</div>
                  <p className="text-muted-foreground">Аренда автомобиля с гидробортом (16 м³)</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    2 специалиста/грузчика
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Упаковочные материалы
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Разборка/сборка мебели
                  </li>
                </ul>
                <Button 
                  className="w-full mt-auto"
                  onClick={() => handleOrder('Стандарт')}
                >
                  Заказать
                </Button>
              </div>

              {/* Тариф "Престиж" */}
              <div className="card flex flex-col h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Тариф "Престиж"</h3>
                  <div className="text-4xl font-bold text-primary mb-2">от 17 700 ₽</div>
                  <p className="text-muted-foreground">Аренда автомобиля с гидролифтом (16 м³)</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    2 специалиста/грузчика
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Расширенный набор упаковочных материалов
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Разборка/сборка мебели
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Вывоз мусора после переезда
                  </li>
                </ul>
                <Button 
                  className="w-full mt-auto"
                  onClick={() => handleOrder('Престиж')}
                >
                  Заказать
                </Button>
              </div>
            </div>

            <div className="mt-16 text-center text-muted-foreground">
              <p>* Цена указана за 1 норма час работы</p>
              <p>* Минимальный вызов - 4 часа</p>
              <p>* Мин. аренда а/м: 4 часа работы + 1 час подача</p>
              <p>* Спуск/подъем без лифта - БЕСПЛАТНО</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AnimatedHero } from '@/components/home/AnimatedHero'
import { AnimatedServices } from '@/components/home/AnimatedServices'
import Link from 'next/link'
import { ArrowRight, Shield, Clock, Users } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <AnimatedHero />
        <AnimatedServices />

        {/* Преимущества */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="mb-4">Почему выбирают нас</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Мы предлагаем комплексный подход к переезду с гарантией качества
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4">Гарантия сохранности</h3>
                <p className="text-muted-foreground">
                  Все ваши вещи застрахованы и находятся под постоянным контролем
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4">Пунктуальность</h3>
                <p className="text-muted-foreground">
                  Приезжаем точно в назначенное время и соблюдаем все сроки
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4">Опытная команда</h3>
                <p className="text-muted-foreground">
                  Наши специалисты имеют многолетний опыт работы
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">
                Готовы начать новый этап в жизни?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Свяжитесь с нами прямо сейчас и получите бесплатную консультацию
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacts" className="btn bg-white text-primary hover:bg-white/90">
                  Заказать переезд
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="tel:+79857196200" className="btn border-2 border-white text-white hover:bg-white/10">
                  Позвонить нам
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 
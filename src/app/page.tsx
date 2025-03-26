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
        <section className="section" aria-labelledby="advantages-title">
          <div className="container">
            <div className="text-center mb-16">
              <h2 id="advantages-title" className="mb-4">Почему выбирают нас</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Мы предлагаем комплексный подход к переезду с гарантией качества
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="card">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Надежность</h3>
                <p className="text-muted-foreground">
                  Гарантируем сохранность ваших вещей и безопасность переезда
                </p>
              </article>

              <article className="card">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Пунктуальность</h3>
                <p className="text-muted-foreground">
                  Строгое соблюдение сроков и графиков переезда
                </p>
              </article>

              <article className="card">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Опыт</h3>
                <p className="text-muted-foreground">
                  Профессиональная команда с многолетним опытом
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="section bg-primary text-white" aria-labelledby="cta-title">
          <div className="container">
            <div className="text-center">
              <h2 id="cta-title" className="text-3xl font-bold mb-4">
                Готовы к переезду?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Свяжитесь с нами, и мы поможем организовать ваш переезд быстро и качественно
              </p>
              <Link 
                href="/contacts" 
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Связаться с нами
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AnimatedHero } from '@/components/home/AnimatedHero'
import { AnimatedServices } from '@/components/home/AnimatedServices'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import Link from 'next/link'
import { ArrowRight, Shield, Clock, Users } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <ScrollProgress />
      
      <main>
        <section id="home">
          <AnimatedHero />
        </section>
        <section id="services">
          <AnimatedServices />
        </section>

        {/* Преимущества */}
        <section id="advantages" className="section" aria-labelledby="advantages-title">
          <div className="container">
            <ScrollAnimation className="text-center mb-16">
              <h2 id="advantages-title" className="mb-4">Почему выбирают нас</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Мы предлагаем комплексный подход к переезду с гарантией качества
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation delay={0.2}>
                <article className="card">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Надежность</h3>
                  <p className="text-muted-foreground">
                    Гарантируем сохранность ваших вещей и безопасность переезда
                  </p>
                </article>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <article className="card">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Пунктуальность</h3>
                  <p className="text-muted-foreground">
                    Строгое соблюдение сроков и графиков переезда
                  </p>
                </article>
              </ScrollAnimation>

              <ScrollAnimation delay={0.6}>
                <article className="card">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Опыт</h3>
                  <p className="text-muted-foreground">
                    Профессиональная команда с многолетним опытом
                  </p>
                </article>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="section relative" aria-labelledby="cta-title">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
          </div>
          <div className="container relative z-10">
            <ScrollAnimation className="text-center">
              <h2 id="cta-title" className="text-3xl font-bold mb-4 text-white">
                Готовы к переезду?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-100">
                Свяжитесь с нами, и мы поможем организовать ваш переезд быстро и качественно
              </p>
              <Link 
                href="/contacts" 
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Связаться с нами
                <ArrowRight className="w-5 h-5" />
              </Link>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 
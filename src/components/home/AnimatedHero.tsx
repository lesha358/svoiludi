'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Truck, Shield, Clock } from 'lucide-react'
import Image from 'next/image'

export function AnimatedHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Сделаем ваш переезд простым и приятным
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-xl">
              Мы не просто перевозим вещи — мы помогаем начать новую главу вашей жизни без стресса и хлопот
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacts" className="btn btn-primary text-lg">
                Заказать переезд
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/services" className="btn btn-secondary text-lg">
                Узнать больше
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl transform rotate-3" />
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Truck className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl">Современный автопарк</h3>
                    <p className="text-gray-600">Специально оборудованные грузовики</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl">Страхование груза</h3>
                    <p className="text-gray-600">Полная защита вашего имущества</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl">Точно в срок</h3>
                    <p className="text-gray-600">Гарантия соблюдения времени</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
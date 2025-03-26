'use client'

import { motion } from 'framer-motion'
import { Building2, Home, Box, Truck, Package, Shield } from 'lucide-react'

const services = [
  {
    title: 'Офисный переезд',
    description: 'Профессиональный переезд офиса с минимальными простоями',
    icon: Building2,
    features: ['Упаковка документов', 'Разборка мебели', 'Сборка на новом месте']
  },
  {
    title: 'Квартирный переезд',
    description: 'Быстрый и аккуратный переезд квартиры любой сложности',
    icon: Home,
    features: ['Упаковка вещей', 'Разгрузка', 'Расстановка мебели']
  },
  {
    title: 'Перевозка грузов',
    description: 'Безопасная перевозка грузов любого размера и веса',
    icon: Box,
    features: ['Страхование груза', 'Отслеживание', 'Специальная упаковка']
  }
]

export function AnimatedServices() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем полный спектр услуг по переезду для частных лиц и компаний
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-muted-foreground">
                    <Shield className="h-4 w-4 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
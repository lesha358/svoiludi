'use client'

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const quickLinks = [
    { href: '/services', label: 'Услуги' },
    { href: '/pricing', label: 'Тарифы' },
    { href: '/advantages', label: 'Преимущества' },
    { href: '/faq', label: 'Вопросы' },
    { href: '/about', label: 'О нас' },
    { href: '/contacts', label: 'Контакты' }
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Логотип и контакты */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">СЛ</span>
              </div>
              <span className="text-xl font-bold">Свои Люди</span>
            </div>
            <div className="space-y-3">
              <a 
                href="tel:+79857196200" 
                className="flex items-center group hover:text-primary-light transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>+7 (985) 719-62-00</span>
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="mailto:info@svoiludi.ru" 
                className="flex items-center group hover:text-primary-light transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>info@svoiludi.ru</span>
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-start group">
                <MapPin className="w-5 h-5 mr-2 mt-1" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </div>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Навигация</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center text-sm hover:text-primary-light transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Социальные сети */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/80">© 2024 Свои Люди. Все права защищены.</p>
            <div className="flex space-x-6 text-sm text-white/80">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
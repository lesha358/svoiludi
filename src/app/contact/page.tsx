'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container py-12">
          <h1 className="text-3xl font-bold text-center mb-12">Контакты</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Форма обратной связи */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+7 (900) 123-45-67"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Опишите ваш вопрос или задачу"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition-colors"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>

            {/* Контактная информация */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Наши контакты</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Телефон</h3>
                    <a href="tel:+79857196200" className="text-lg font-medium text-gray-900 hover:text-primary transition-colors">
                      +7 (985) 719-62-00
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <a href="mailto:info@svoiludi.ru" className="text-lg font-medium text-gray-900 hover:text-primary transition-colors">
                      info@svoiludi.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Адрес</h3>
                    <p className="text-lg font-medium text-gray-900">
                      г. Москва, ул. Примерная, д. 123
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Режим работы</h3>
                    <p className="text-lg font-medium text-gray-900">
                      Пн-Вс: 9:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 
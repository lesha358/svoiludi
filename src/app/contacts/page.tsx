'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data:', formData)
    // Здесь будет логика отправки формы
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="section" aria-labelledby="contacts-title">
          <div className="container">
            <div className="text-center mb-16">
              <h1 id="contacts-title" className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Свяжитесь с нами удобным для вас способом
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <article className="card">
                <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Телефон</h3>
                      <a href="tel:+79857196200" className="text-lg font-medium hover:text-primary transition-colors">
                        +7 (985) 719-62-00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                      <a href="mailto:info@svoiludi.ru" className="text-lg font-medium hover:text-primary transition-colors">
                        info@svoiludi.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Адрес</h3>
                      <p className="text-lg font-medium">
                        г. Москва, ул. Примерная, д. 123
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="card">
                <h2 className="text-2xl font-bold mb-6">Обратная связь</h2>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      required
                      aria-required="true"
                      aria-invalid="false"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      required
                      aria-required="true"
                      aria-invalid="false"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      required
                      aria-required="true"
                      aria-invalid="false"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      required
                      aria-required="true"
                      aria-invalid="false"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Отправить сообщение
                  </button>
                </form>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 
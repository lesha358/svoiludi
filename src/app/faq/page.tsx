'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ChevronDown } from 'lucide-react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Когда начинается отсчет выполнения заказа?',
      answer: 'Когда машина приезжает по адресу и начинается погрузка.'
    },
    {
      question: 'Кто во время перевозки отвечает за груз?',
      answer: 'Мы несем ответственность за сохранность груза во время перевозки.'
    },
    {
      question: 'Когда лучше всего выполнить офисный переезд?',
      answer: 'Рекомендуем вам выбирать время, когда на дорогах немного машин: до 7:00 утром и после 19:00 в вечернее время. Также подходящими днями будут суббота и воскресенье.'
    },
    {
      question: 'Какие документы нужны для переезда?',
      answer: 'Для организации переезда нам нужны документы на право собственности или аренды помещения, а также документы, удостоверяющие личность заказчика.'
    },
    {
      question: 'Как происходит оплата услуг?',
      answer: 'Оплата производится после подписания акта выполненных работ. Мы принимаем оплату наличными, банковской картой или по безналичному расчету.'
    },
    {
      question: 'Какие дополнительные услуги вы предоставляете?',
      answer: 'Мы предлагаем упаковку вещей, разборку и сборку мебели, временное хранение, а также страхование груза.'
    },
    {
      question: 'Как происходит оценка стоимости переезда?',
      answer: 'Стоимость переезда зависит от объема груза, расстояния, количества грузчиков и дополнительных услуг. Наш менеджер проведет бесплатную оценку на основе предоставленной вами информации.'
    },
    {
      question: 'Какие гарантии вы предоставляете?',
      answer: 'Мы предоставляем материальную ответственность за груз, страхование и гарантируем сохранность всех вещей во время перевозки.'
    }
  ]

  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ответы на популярные вопросы о наших услугах
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-8">Остались вопросы?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Свяжитесь с нами, и мы ответим на все ваши вопросы
              </p>
              <button className="btn btn-primary">Заказать звонок</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Главная' },
    { href: '/services', label: 'Услуги' },
    { href: '/pricing', label: 'Тарифы' },
    { href: '/advantages', label: 'Преимущества' },
    { href: '/faq', label: 'Вопросы' },
    { href: '/about', label: 'О нас' },
    { href: '/contacts', label: 'Контакты' }
  ]

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    if (typeof window !== 'undefined') {
      // Если это главная страница
      if (href === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.location.href = '/'
        return
      }
    }
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">СЛ</span>
            </div>
            <span className="text-xl font-bold text-primary">Свои Люди</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href === '/') {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }
                }}
                className={`text-base font-medium relative group ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary opacity-0 group-hover:opacity-100"></span>
              </Link>
            ))}
          </nav>

          {/* Call Button - Desktop */}
          <a
            href="tel:+79857196200"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            +7 (985) 719-62-00
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="tel:+79857196200"
              className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              className="p-2 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="py-4 bg-white shadow-lg rounded-lg mt-2">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        if (item.href === '/') {
                          e.preventDefault()
                          handleNavClick(item.href)
                        }
                      }}
                      className="text-lg font-medium text-gray-700 hover:text-primary transition-colors px-4"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
} 
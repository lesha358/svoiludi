import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Свои Люди - Профессиональный переезд',
  description: 'Профессиональные услуги по переезду любой сложности. Гарантируем качество, надежность и безопасность вашего имущества.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
} 
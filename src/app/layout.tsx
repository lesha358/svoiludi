import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://svoiludi.ru'),
  title: {
    default: 'Свои Люди - Профессиональный переезд',
    template: '%s | Свои Люди'
  },
  description: 'Профессиональные услуги по переезду любой сложности. Гарантируем качество, надежность и безопасность вашего имущества.',
  keywords: ['переезд', 'грузчики', 'перевозка', 'транспортные услуги', 'переезд под ключ'],
  authors: [{ name: 'Свои Люди' }],
  creator: 'Свои Люди',
  publisher: 'Свои Люди',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/icons8.png',
    shortcut: '/images/icons8.png',
    apple: '/images/icons8.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://svoiludi.ru',
    siteName: 'Свои Люди',
    title: 'Свои Люди - Профессиональный переезд',
    description: 'Профессиональные услуги по переезду любой сложности. Гарантируем качество, надежность и безопасность вашего имущества.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Свои Люди - Профессиональный переезд',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Свои Люди - Профессиональный переезд',
    description: 'Профессиональные услуги по переезду любой сложности. Гарантируем качество, надежность и безопасность вашего имущества.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ваш-код-верификации-google',
    yandex: 'ваш-код-верификации-yandex',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} bg-background`}>
      <body className="min-h-screen flex flex-col bg-background">
        <div className="flex-1 bg-grid">
          {children}
        </div>
      </body>
    </html>
  )
} 
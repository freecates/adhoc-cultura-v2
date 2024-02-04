import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: { default: 'Adhoc Cultura', template: `%s | Adhoc Cultura` },
    description:
        'La cultura com a motor econòmic i social. Treballem perquè totes les persones puguin gaudir dels beneficis de la cultura',
    alternates: {
        canonical: 'https://adhoc-cultura.com/',
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/icons/android-chrome-96x96.png',
        apple: '/icons/android-chrome-192x192.png',
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

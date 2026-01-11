import type { Metadata } from 'next'
import { Dancing_Script } from "next/font/google";
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: 'Attire Bandhan - Premium Fashion Destination',
  description: 'Discover premium fashion at Attire Bandhan. Shop the latest trends in clothing, accessories, and more. Your ultimate fashion destination with quality products and exceptional service.',
  keywords: 'fashion, clothing, premium fashion, online shopping, attire, bandhan, trendy clothes',
  authors: [{ name: 'Attire Bandhan' }],
  openGraph: {
    title: 'Attire Bandhan - Premium Fashion Destination',
    description: 'Discover premium fashion at Attire Bandhan. Shop the latest trends in clothing, accessories, and more.',
    url: 'https://attirebandhan.com',
    siteName: 'Attire Bandhan',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Attire Bandhan - Premium Fashion',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Attire Bandhan - Premium Fashion Destination',
    description: 'Discover premium fashion at Attire Bandhan. Shop the latest trends in clothing, accessories, and more.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dancingScript.variable}>
      <body className="min-h-screen bg-cream flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
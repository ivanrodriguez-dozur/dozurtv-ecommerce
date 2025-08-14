import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  title: 'Dozurtv - Tienda de Ropa Deportiva | Los Reyes del Fútbol Sala',
  description: 'Descubre la mejor colección de ropa deportiva y zapatillas de fútbol sala. Dozurtv - Diseño creado por los reyes del fútbol sala.',
  keywords: 'ropa deportiva, fútbol sala, zapatillas Nike, Dozurtv, street gato, magos',
  authors: [{ name: 'Dozurtv' }],
  creator: 'Dozurtv',
  publisher: 'Dozurtv',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://dozurtv.com',
    title: 'Dozurtv - Los Reyes del Fútbol Sala',
    description: 'Tienda oficial de ropa deportiva Dozurtv. Encuentra las mejores zapatillas y equipamiento para fútbol sala.',
    siteName: 'Dozurtv',
    images: [
      {
        url: 'https://placehold.co/1200x630?text=Dozurtv+Los+Reyes+del+Futbol+Sala+Magos',
        width: 1200,
        height: 630,
        alt: 'Dozurtv - Los Reyes del Fútbol Sala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dozurtv - Los Reyes del Fútbol Sala',
    description: 'Tienda oficial de ropa deportiva Dozurtv. Las mejores zapatillas y equipamiento para fútbol sala.',
    images: ['https://placehold.co/1200x630?text=Dozurtv+Los+Reyes+del+Futbol+Sala+Magos'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0EA5E9" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dozurtv",
              "description": "Tienda de ropa deportiva especializada en fútbol sala",
              "url": "https://dozurtv.com",
              "logo": "https://dozurtv.com/logo.png",
              "sameAs": [
                "https://instagram.com/dozurtv",
                "https://twitter.com/dozurtv",
                "https://facebook.com/dozurtv"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+34-900-000-000",
                "contactType": "customer service",
                "availableLanguage": "Spanish"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

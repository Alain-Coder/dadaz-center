import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DADAZ CENTER - Unlocking Potential, One Move at a Time',
  description: 'Dynamic institution dedicated to nurturing young minds through Chess, Music, Art, and Computer Lessons.',
  keywords: 'chess academy, music lessons, art classes, computer training, Malawi education',
  authors: [{ name: 'DADAZ Center' }],
  creator: 'DADAZ Center',
  publisher: 'DADAZ Center',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dadazcenter.com'),
  openGraph: {
    title: 'DADAZ CENTER - Unlocking Potential, One Move at a Time',
    description: 'Dynamic institution dedicated to nurturing young minds through Chess, Music, Art, and Computer Lessons.',
    url: 'https://dadazcenter.com',
    siteName: 'DADAZ Center',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DADAZ CENTER - Unlocking Potential, One Move at a Time',
    description: 'Dynamic institution dedicated to nurturing young minds through Chess, Music, Art, and Computer Lessons.',
    creator: '@dadazchess',
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
    <html lang="en" className={roboto.variable}>
      <head>
        <link rel="icon" href="/assets/images/x-icon/Dadaz logo.png" />
        <link rel="apple-touch-icon" href="/assets/images/x-icon/Dadaz logo.png" />
      </head>
      <body className="font-roboto antialiased">
        {children}
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'DADAZ CENTER - Unlocking Potential, One Move at a Time',
  description: 'Dynamic institution dedicated to nurturing young minds through Chess, Music, Art, and Computer Lessons.',
  keywords: 'chess academy, music lessons, art classes, computer training, Malawi education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto antialiased`}>
        {children}
      </body>
    </html>
  )
}
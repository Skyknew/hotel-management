import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins"
 });

export const metadata: Metadata = {
  title: 'Hotel Management App',
  description: 'Discover the best hotels rooms.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        < Header />
        {children}
        < Footer />
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'animate.css'
import { ReactNode } from 'react'
import Header from '@/components/layout/Header'
import Providers from '@/providers/Index'
import Footer from '@/components/layout/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
})
export const metadata: Metadata = {
  title: 'EventHorizon by Juan Sued',
  description: 'Um horizonte de possibilidades',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} animate__animated animate__fadeIn overflow-x-auto bg-[#ADD8E6]  dark:bg-blueTheme-500  text-zinc-900 weig dark:text-slate-50 
        `}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

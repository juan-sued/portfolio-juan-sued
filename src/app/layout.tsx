import '../styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'animate.css'
import { ReactNode } from 'react'
import Providers from './providers'
import Header from '@/components/layout/Header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
})
export const metadata: Metadata = {
  title: 'EventHorizon by Juan Sued',
  description: 'Eficiência em peso',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" >
      <body
        className={`${poppins.className}  bg-indigo-100  dark:bg-blueTheme-500  text-zinc-900 weig dark:text-slate-50 w-screen
        `}
      >
        <Providers>
          <Header />
          {children}
        </Providers>

      </body>
    </html>
  )
}

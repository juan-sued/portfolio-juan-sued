import '../styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'animate.css'
import { ReactNode } from 'react'
import Providers from './providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
})
export const metadata: Metadata = {
  title: 'Juan Sued - Devloper',
  description: 'Eficiência em peso',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" >
      <body
        className={`${poppins.className} bg-red-300   dark:bg-blueTheme-500  text-zinc-900 weig dark:text-slate-50
        `}
      >
        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  )
}

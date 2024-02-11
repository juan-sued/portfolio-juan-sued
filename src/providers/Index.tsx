'use client'
import { IntlProvider } from 'react-intl'

import { queryClient } from '@/services/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import HandleKeyPressProvider from './HandleKeyPress'

export default function Providers({ children }: { children: ReactNode }) {
  console.error = (message) => {
    if (message.includes('Extra attributes from the server: class, style')) {
      // Ignore
    }
  }
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <QueryClientProvider client={queryClient}>
        <IntlProvider locale="pt-BR" defaultLocale="pt-BR">
          <HandleKeyPressProvider>{children}</HandleKeyPressProvider>
        </IntlProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

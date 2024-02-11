'use client'
import { useEffect, useState } from 'react'
import { getScroll } from '@/utils/index'
import { MenuMobile } from './MenuMobile'
import { cn } from '@/lib/utils'
import LogoAndName from './LogoAndName'
import { MenuDesktop } from './MenuDesktop'
import ThemeSwitcher from '@/components/shared/ThemeSwitcher'

export default function Header() {
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(getScroll)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <header
        className={cn(
          'p-6   fixed top-0 bg-transparent left-0 w-full flex justify-between z-10   transition-all  h-[96px] animate__animated animate__fadeInDown  ',
          scrollHeight > 1
            ? 'drop-shadow-lg dark:bg-opacity-90 bg-opacity-70 backdrop-blur-md '
            : 'bg-transparent backdrop-blur-none dark:bg-transparent',
        )}
      >
        <LogoAndName />
        <MenuDesktop />
        <div className="hidden lg:flex relative w-0 right-[80px]">
          <ThemeSwitcher />
        </div>

        <MenuMobile />
      </header>
    </>
  )
}

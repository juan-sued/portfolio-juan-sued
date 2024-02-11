import SwitcherSunAndMoon from '@/components/shared/SwitcherSunAndMoon/SwitcherSunAndMoon'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { CrownIcon, LogIn, Menu, Settings, User } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export function MenuMobile() {
  const { theme, setTheme } = useTheme()
  function alterTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <>
      <div className=" flex lg:hidden justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="  bg-transparent  hover:bg-transparent dark:bg-transparent  rounded-full   ">
              <Menu color="white" size={25} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" w-56 " align="end" forceMount>
            <DropdownMenuGroup>
              <Link href="/">
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Início</span>

                  <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>

              <Link href="/ranking">
                <DropdownMenuItem className="cursor-pointer">
                  <CrownIcon className="mr-2 h-4 w-4" />
                  <span>Ranking</span>
                  <DropdownMenuShortcut>⌘3</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href="/config">
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Configurações</span>
                  <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="justify-between cursor-pointer"
              onClick={alterTheme}
            >
              <span>Alternar tema</span>
              <SwitcherSunAndMoon />
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <Link href="/sign-in">
              <DropdownMenuItem className="cursor-pointer">
                <LogIn className="mr-2 h-4 w-4" />
                Entrar <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}

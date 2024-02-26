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
import { contactList } from '@/data/contact'

import { Code2Icon, CrownIcon, HelpCircleIcon, Menu, User } from 'lucide-react'
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

              <Link href="#services">
                <DropdownMenuItem className="cursor-pointer">
                  <Code2Icon className="mr-2 h-4 w-4" />
                  <span>Serviços</span>
                  <DropdownMenuShortcut>⌘3</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <Link href="#clients">
                <DropdownMenuItem className="cursor-pointer">
                  <CrownIcon className="mr-2 h-4 w-4" />
                  <span>Clientes</span>
                  <DropdownMenuShortcut>⌘3</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <Link href="#about-me">
                <DropdownMenuItem className="cursor-pointer">
                  <HelpCircleIcon className="mr-2 h-4 w-4" />
                  <span>Sobre</span>
                  <DropdownMenuShortcut>⌘3</DropdownMenuShortcut>
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
            <Link href={contactList[0].href}>
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex gap-2">
                  {contactList[0].icon}
                  Entrar em contato
                </div>

                <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}

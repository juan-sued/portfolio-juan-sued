'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { DollarSign } from 'lucide-react'
import { contactList } from '@/data/contact'

export function MenuDesktop() {
  return (
    <>
      <nav className="hidden lg:flex  items-center justify-center  w-full   transition-all">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-opacity-70  backdrop-blur-md     ">
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink
                      asChild
                      className="bg-local-landing-page   animate__animated animate__fadeIn transition-all duration-1000"
                    >
                      <a
                        className="flex gap-4 h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <DollarSign
                          className="text-white drop-shadow"
                          strokeWidth={3}
                        />
                        <h1 className="  text-2xl text-white font-normal drop-shadow shadow-black">
                          Você está
                          <strong className="text-red-500 "> PERDENDO </strong>
                          dinheiro
                        </h1>
                        <p className="text-sm leading-tight font-medium text-slate-300">
                          Conquiste visitantes com landing pages envolventes e
                          persuasivas.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    href="https://wa.me/+5521984980723?text=Quero%20saber%20mais%20sobre%20Landing%20Pages"
                    title="Landing Pages"
                  >
                    Impulsionam vendas em até 47%, conversões 80%, leads 55%.
                  </ListItem>
                  <ListItem
                    href="https://wa.me/+5521984980723?text=Quero%20saber%20mais%20sobre%20Sites%20Institucionais"
                    title="Sites Institucionais"
                  >
                    Confiança, visibilidade e crescimento para sua marca.
                  </ListItem>
                  <ListItem
                    href="https://wa.me/+5521984980723?text=Quero%20saber%20mais%20sobre%20Loja%20Virtual"
                    title="Loja Virtual"
                  >
                    Potencialize lucros, conquiste mercados e fidelize clientes.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contato</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {contactList.map((contact) => (
                    <ListItem
                      key={contact.title}
                      title={contact.title}
                      href={
                        contact.href +
                        `?text=Quero%20saber%20mais%20sobre%20` +
                        contact.title
                      }
                    >
                      {contact.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#clients" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Clientes
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#about-me" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Sobre
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          target="_blank"
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

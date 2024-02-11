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

const contact: { title: string; href: string; description: string }[] = [
  {
    title: 'WhatsApp',
    href: 'https://w.app/yAmfrN',
    description: 'Fale comigo pelo WhatsApp',
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/juan-sued/',
    description: 'Me siga no Likedin',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/juan.sued/',
    description: 'Acesse meu instagram.',
  },
  {
    title: 'Github',
    href: 'https://github.com/juan-sued',
    description: 'Veja meus projetos.',
  },
  {
    title: 'Email',
    href: 'mailto:juansued19@gmail.com?subject=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento',
    description: 'juansued19@gmail.com',
  },
  {
    title: 'Solicitar orçamento pelo site',
    href: '#budget',
    description: 'Formulário contendo suas solicitações de orçamento.',
  },
]

export function MenuDesktop() {
  return (
    <>
      <nav className="hidden lg:flex  items-center justify-center  w-full   transition-all">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-blueTheme-500 bg-opacity-70  backdrop-blur-md     ">
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink
                      asChild
                      className="bg-local-landing-page animate__animated animate__fadeIn transition-all duration-1000"
                    >
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <DollarSign />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Você está perdendo dinheiro
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Conquiste visitantes com landing pages envolventes e
                          persuasivas.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Landing Pages">
                    Impulsionam vendas em até 47%, conversões 80%, leads 55%.
                  </ListItem>
                  <ListItem
                    href="/docs/installation"
                    title="Sites Institucionais"
                  >
                    Confiança, visibilidade e crescimento para sua marca.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
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
                  {contact.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Clientes
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Sobre mim
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

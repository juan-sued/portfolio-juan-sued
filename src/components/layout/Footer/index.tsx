import BackGroundImage from '@/components/shared/BackGroundImage'
import LogoAndName from '../Header/LogoAndName'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { contactList } from '@/data/contact'

export default function Footer() {
  return (
    <>
      <div className="hidden dark:flex">
        <BackGroundImage />
      </div>
      <section className="border-t-2 gap-20 boder-slate-200 border-slate-900 blur-radial-gradient backdrop-blur-md  bg-blueTheme-500 dark:bg-opacity-90 mt-[458px]  md:mt-[360px]  p-20 flex flex-col items-center  w-full">
        <div className="flex flex-col md:flex-row w-full">
          <div className=" flex flex-col gap-6 py-6 md:py-0 justify-between w-full text-white ">
            <LogoAndName />
            <div className="flex flex-wrap">
              {contactList.map((contact, index) => {
                return (
                  <Link key={index} target="_blank" href={contact.href}>
                    <Button variant="ghost" className="text-muted-foreground">
                      {contact.icon}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col md:flex-row  gap-6  w-full justify-start">
            <ul className="w-full grid gap-4 transition-all">
              <li className=" w-fit text-lg font-medium text-white ">
                Serviços
              </li>
              <li className=" w-fit text-muted-foreground hover:font-bold cursor-pointer">
                Landing Page
              </li>
              <li className=" w-fit text-muted-foreground hover:font-bold cursor-pointer">
                Site institucional
              </li>
              <li className=" w-fit text-muted-foreground hover:font-bold cursor-pointer">
                Loja virtual
              </li>
            </ul>
            <ul className="w-full grid gap-4 transition-all">
              <li className=" w-fit text-lg font-medium text-white ">
                Companhia
              </li>
              <li className=" w-fit text-muted-foreground hover:font-bold cursor-pointer">
                Nossos valores
              </li>
              <li className=" w-fit text-muted-foreground hover:font-bold cursor-pointer">
                Nosso time
              </li>
              <li className=" w-fit text-muted-foreground hover:font-bold cursor-pointer">
                Blog
              </li>
            </ul>
            <ul className="grid w-full  gap-4 transition-all">
              <li className=" w-fit text-lg font-medium text-white ">
                Recursos
              </li>
              <li className=" w-fit text-muted-foreground hover:font-bold cursor-pointer">
                Dúvidas frequentes
              </li>
              <li className=" w-fit text-muted-foreground hover:font-bold cursor-pointer">
                Atendimento ao consumidor
              </li>
              <li className=" w-fit text-muted-foreground hover:font-bold cursor-pointer">
                Contato
              </li>
            </ul>
          </div>
        </div>
        <div className=" text-white  gap-4 flex flex-col md:flex-row w-full pt-20 border-t-2 boder-slate-200">
          <div className="w-full flex flex-col md:flex-row justify-start items-center gap-2 ">
            <Link href={'/'}>
              <Button
                variant="link"
                className="w-fit text-white  cursor-pointer"
              >
                Política de Privacidade
              </Button>
            </Link>
            -
            <Link href={'/'}>
              <Button
                variant="link"
                className=" w-fit text-white  cursor-pointer"
              >
                Termos e condições
              </Button>
            </Link>
          </div>
          <div className="w-full flex justify-center md:justify-end md:items-center text-xs">
            Event Horizon. Todos os direitos reservados.
          </div>
        </div>
      </section>
    </>
  )
}

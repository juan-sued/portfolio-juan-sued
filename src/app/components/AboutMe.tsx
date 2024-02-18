import LoaderSpinner from '@/components/shared/Loaders/LoaderSpinner/LoaderSpinner'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { IContactItem, contactList } from '@/data/contact'

function ButtonIconListItem({
  icon,
  title,
  href,
}: Omit<IContactItem, 'description'>) {
  return (
    <li className=" text-muted-foreground">
      <a href={href} target="_blank">
        <Button
          variant="ghost"
          className=" justify-center flex items-center gap-2"
        >
          {icon}
          <div className="w-full text-center">{title}</div>
        </Button>
      </a>
    </li>
  )
}

export default function AboutMe() {
  return (
    <>
      <section className="w-full flex justify-center">
        <div className="contentIntroduction mt-[78px] sm:mt-[70px] w-[90%] max-w-[800px]   p-2  backdrop-blur-md  rounded-3xl shadow-shadow-border-white  border border-white border-opacity-10">
          <div className="contentIntroduction w-full h-full p-6 blur-radial-gradient border rounded-2xl border-white border-opacity-10">
            <section className="w-full flex flex-col items-center gap-6">
              <div className="w-fit h-fit  p-2  backdrop-blur-md  rounded-full shadow-shadow-border-white  border border-white border-opacity-10">
                <div className=" w-fit h-fit p-2 blur-radial-gradient border  border-white border-opacity-10 rounded-full">
                  <Avatar className="w-36 h-36">
                    <AvatarImage
                      src="https://github.com/juan-sued.png"
                      alt="Imagem de perfil"
                      className="animate__animated animate__fadeIn"
                    />
                    <AvatarFallback>
                      <LoaderSpinner />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <span className="flex   gap-1">
                <h3 className="w-full flex items-end min-w-fit ">
                  Olá, meu nome é
                </h3>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button
                      variant="link"
                      className="text-xl sm:text-2xl flex items-end p-0 drop-shadow-lg"
                    >
                      Juan Sued
                    </Button>
                  </HoverCardTrigger>

                  <HoverCardContent className="w-fit">
                    <ul>
                      {contactList.map((button, index) => (
                        <ButtonIconListItem
                          key={index}
                          icon={button.icon}
                          title={button.title}
                          href={button.href}
                        />
                      ))}
                    </ul>
                  </HoverCardContent>
                </HoverCard>
              </span>

              <h1 className="text-justify px-0 sm:px-7">
                Sou formado pela <strong> Driven Education</strong> e graduando
                em Engenharia na
                <strong> UERJ</strong>. Tive a oportunidade de trabalhar na
                <strong> Lumis</strong>, contribuindo no desenvolvimento de
                portais para empresas renomadas, como
                <strong> B3</strong>
                (Bolsa de Valores do Brasil), <strong> Grupo Alliance</strong>,
                <strong> Petrobras</strong>, <strong> Sulamérica</strong>,
                <strong> Banco BMG</strong>, <strong> SHV</strong>
                (SuperGasBras),<strong> Banco Safra</strong>,
                <strong> Banco Guanabara</strong>,<strong> Athena Saúde</strong>
                , <strong> VR</strong> e<strong> Aerorporto Viracopos</strong>.
              </h1>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

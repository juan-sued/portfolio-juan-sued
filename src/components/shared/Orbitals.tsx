import Image from 'next/image'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { tecnologiesList } from '@/data/tecnologies'
import PopUpThreeDots from './Popup/PopUpThreeDots'

export default function Orbitals() {
  return (
    <div className="relative h-full  flex items-center justify-center animate-spin-slow-right  ">
      <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 bg-transparent dark:border-gray-400/50 ">
        {tecnologiesList.map((tecnology, index) => (
          <PopUpThreeDots
            key={index}
            title={tecnology.title}
            description={tecnology.description}
            svg={tecnology.svg}
            className={tecnology.className}
            certificates={tecnology.certificates}
          />
        ))}

        <Dialog>
          <DialogTrigger asChild>
            <Button className="  profile_item bg-transparent hover:bg-transparent w-[200px] h-[200px] p-0 border-2 rounded-full  hover:border-4  dark:border-gray-400/50  cursor-pointer transition-colors duration-500 z-0">
              <div className="w-full bg-transparent h-full flex items-center justify-center p-2 rounded-full active:scale-90  object-cover  animate-spin-slow-left">
                <div className="w-full h-full inline-block  ">
                  <Image
                    alt="imagem de Juan Sued"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="relative w-full h-full rounded-full"
                    src={'/assets/profile.jpeg'}
                  />
                </div>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] ">
            <div className="flex w-full gap-2">
              <div className="rounded-full h-4 w-4 bg-green-500"></div>
              <div className="rounded-full h-4 w-4 bg-yellow-500"></div>
              <div className="rounded-full h-4 w-4 bg-red-500"></div>
            </div>
            <DialogHeader>
              <DialogTitle>Quem é Juan Sued ?</DialogTitle>
              <DialogDescription>É um prazer vê-lo aqui 👋</DialogDescription>
            </DialogHeader>
            <div className="contentDialog grid gap-2">
              <p>
                Minha conexão com a programação teve início aos 16, quando
                assisti uma aula sobre robótica e fiquei fascinado com as
                possibilidades da tecnologia.
              </p>
              <p>
                Ao ingressar na UERJ estudando engenharia, fiquei maravilhado
                com as aulas e cursos propostos pela faculdade, havia desde
                robôs de combate à foguetes, lá me aprofundei ainda mais no
                mundo da programação e aprendi que mesmo cada área utilizando
                uma linguagem diferente, o segredo de aprendizado é uma boa base
                em lógica e boas práticas.
              </p>
              <p>
                Hoje meus hobbies incluem um bom jogo com uma taça de vinho,
                ar-condicionado e uma iluminação suave.
              </p>
              <p>
                Tenho certeza que seremos um ótimo time e que juntos poderemos
                solucionar qualquer problema
              </p>
            </div>

            <DialogFooter>
              <a
                href="https://wa.me/+5521984980723"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant={'sucess'}>Converse comigo</Button>
              </a>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

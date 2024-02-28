import { RocketIcon, HeartHandshakeIcon, PackageCheckIcon } from 'lucide-react'
import { ReactNode } from 'react'

export interface IDifferenceItem {
  icon: ReactNode
  title: string
  description: string
}
export const differencesList: IDifferenceItem[] = [
  {
    title: 'Robustez e Desempenho',
    description:
      'Tecnologias de última geração com camadas de segurança e otimização permitindo soluções sólidas com alto desempenho.',
    icon: <RocketIcon className="w-full h-full" />,
  },
  {
    title: 'Suporte 24h',
    description:
      'Para atender suas necessidades a qualquer momento, garantindo uma experiência confiável e ágil.',
    icon: <HeartHandshakeIcon className="w-full h-full" />,
  },

  {
    title: 'Gestão Ágil',
    description:
      'Uma série de ferramentas e metodologias ágeis para dar mais transparência  para os clientes e tornar o processo de desenvolvimento mais eficiente.',
    icon: <PackageCheckIcon className="w-full h-full" />,
  },
]

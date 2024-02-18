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
      'Suporte 24h para atender suas necessidades a qualquer momento, garantindo uma experiência confiável e ágil.',
    icon: <HeartHandshakeIcon className="w-full h-full" />,
  },

  {
    title: 'Metodologia Ágil',
    description:
      'Práticas ágeis para garantir um desenvolvimento eficiente e adaptável, colaborando de perto com você para entregas rápidas e alinhadas às suas expectativas.',
    icon: <PackageCheckIcon className="w-full h-full" />,
  },
]

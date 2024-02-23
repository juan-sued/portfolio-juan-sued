import {
  BotIcon,
  LandmarkIcon,
  LineChartIcon,
  PanelTopIcon,
  StoreIcon,
} from 'lucide-react'
import { ReactNode } from 'react'

export interface IServiceItem {
  icon: ReactNode
  title: string
  description: string
  href: string
}
export const servicesList: IServiceItem[] = [
  {
    title: 'Landing Page',
    description:
      'Destaque online com sua Landing Page exclusiva e cativante. Conquiste seu público!',
    icon: <PanelTopIcon className="w-full h-full" />,
    href: '',
  },
  {
    title: 'Loja Virtual',
    description:
      'Venda com estilo! Crie uma loja virtual envolvente e atraia mais clientes agora.',
    icon: <StoreIcon className="w-full h-full" />,
    href: '',
  },
  {
    title: 'Site Institucional',
    description:
      'Apresente sua marca de forma única. Tenha um site que impressiona e destaca sua identidade.',
    icon: <LandmarkIcon className="w-full h-full" />,
    href: '',
  },
  {
    title: 'Robô',
    description:
      'Automatize tarefas e ganhe tempo para o que realmente importa. Descubra soluções eficientes agora!',
    icon: <BotIcon className="w-full h-full" />,
    href: '',
  },
  {
    title: 'Análise de Dados',
    description:
      'Transforme dados em ação estratégica. Nossas soluções avançadas proporcionam insights valiosos.',
    icon: <LineChartIcon className="w-full h-full" />,
    href: '',
  },
]

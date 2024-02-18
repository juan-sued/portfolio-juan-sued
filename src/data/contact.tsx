import {
  FlameIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MessageCircleIcon,
} from 'lucide-react'

export interface IContactItem {
  icon: React.ReactNode
  title: string
  href: string
  description: string
}
export const contactList: IContactItem[] = [
  {
    icon: <MessageCircleIcon size={20} />,
    title: 'WhatsApp',
    href: 'https://w.app/yAmfrN',
    description: 'Fale comigo pelo WhatsApp',
  },
  {
    icon: <LinkedinIcon size={20} />,

    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/juan-sued/',
    description: 'Me siga no Likedin',
  },
  {
    icon: <InstagramIcon size={20} />,
    title: 'Instagram',
    href: 'https://www.instagram.com/juan.sued/',
    description: 'Acesse meu instagram.',
  },
  {
    icon: <GithubIcon size={20} />,
    title: 'Github',
    href: 'https://github.com/juan-sued',
    description: 'Veja meus projetos.',
  },
  {
    icon: <MailIcon size={20} />,
    title: 'Email',
    href: 'mailto:juansued19@gmail.com?subject=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento',
    description: 'juansued19@gmail.com',
  },
  {
    icon: <FlameIcon size={20} />,
    title: 'Pelo site',
    href: '#budget',
    description: 'Formulário contendo suas solicitações de orçamento.',
  },
]

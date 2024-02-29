import { Button } from '@/components/ui/button'
import './DoubleFaceHoverCard.css'

export interface IDoubleFaceHoverCard {
  title: string
  description: string
  href: string
}

export default function DoubleFaceHoverCard({
  title,
  description,
  href,
}: IDoubleFaceHoverCard) {
  return (
    <>
      <div className="card-container">
        <div className="card  backdrop-blur-md">
          <div className="front-content p-6">
            <p>{title}</p>
          </div>
          <div className="content">
            <p className="heading">{title}</p>
            <p>{description}</p>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="hover:bg-red-200">
                Visitar
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

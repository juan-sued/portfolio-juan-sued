import { Card } from '@/components/ui/card'
import { IDifferenceItem, differencesList } from '@/data/differences'

export default function Differences() {
  return (
    <>
      <section className="differences pb-10 w-full flex flex-col items-center ">
        <div className="rowCardsDifferences flex flex-col md:flex-row gap-8">
          {differencesList.map((difference, index) => (
            <CardDifference
              key={index}
              title={difference.title}
              icon={difference.icon}
              description={difference.description}
            />
          ))}
        </div>
      </section>
    </>
  )
}

function CardDifference({ icon, title, description }: IDifferenceItem) {
  return (
    <Card className="p-6 max-w-[300px] hover:shadow-2xl  hover:scale-105 transition-all duration-500">
      <figure className="grid gap-2">
        <div className="p-6 text-[#ADD8E6]  dark:text-blueTheme-500  bg-blueTheme-500 dark:bg-[#ADD8E6] w-fit rounded-full h-20">
          {icon}
        </div>

        <figcaption className="grid gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </figcaption>
      </figure>
    </Card>
  )
}

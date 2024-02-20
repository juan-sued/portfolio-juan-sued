import TitleSection from '@/components/shared/TitleSection'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { IServiceItem, servicesList } from '@/data/services'

export default function Services() {
  return (
    <>
      <section className="differences  w-full flex flex-col items-center  ">
        <TitleSection
          title=" Expertise para oferecer as melhores soluções para os seus desafios de
          negócio"
        />

        <Carousel
          opts={{
            align: 'start',
          }}
          className=" w-[99.40vw]  "
        >
          <div className=" flex w-full justify-end gap-2 px-8 ">
            <CarouselPrevious />
            <CarouselNext />
          </div>

          <CarouselContent className=" py-12 pl-2 md:pl-20 ">
            {servicesList.map((service, index) => (
              <CarouselItem
                key={index}
                className=" basis-80 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 min-h-[400px] "
              >
                <div className="mx-5 h-full">
                  <CardService
                    key={index}
                    title={service.title}
                    icon={service.icon}
                    description={service.description}
                    href={service.href}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </>
  )
}

function CardService({ icon, title, description, href }: IServiceItem) {
  const link =
    href ||
    `https://wa.me/5521984980723?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+${title}`

  return (
    <Card className="hover:-translate-y-11  p-6 w-full h-full   hover:shadow-2xl   transition-all duration-500">
      <figure className="flex flex-col h-full justify-between gap-2 ">
        <div className="p-6 text-[#ADD8E6]  dark:text-blueTheme-500  bg-blueTheme-500 dark:bg-[#ADD8E6] w-fit rounded-full h-20">
          {icon}
        </div>

        <figcaption className="grid gap-2 ">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </figcaption>
        <a href={link}>
          <Button variant="sucess">Saiba mais</Button>
        </a>
      </figure>
    </Card>
  )
}

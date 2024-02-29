import DoubleFaceHoverCard from '@/components/shared/Cards/DoubleFaceHoverCard/DoubleFaceHoverCard'
import TitleSection from '@/components/shared/TitleSection'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { clientsList } from '@/data/clients'

export default function Clients() {
  return (
    <>
      <div className=" relative overflow-visible h-0 flex w-full  shadow-inner ">
        <div className="bg-local-bg-galaxy h-[100vh] w-full"></div>
      </div>
      <section
        id="clients"
        className=" differences  w-full flex flex-col items-center gap-5 "
      >
        <TitleSection title="Clientes" />

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className=" w-[99.40vw]  "
        >
          <div className=" flex w-full justify-end gap-2 px-8 ">
            <CarouselPrevious />
            <CarouselNext />
          </div>

          <CarouselContent className=" py-12 pl-2 ">
            {clientsList.map((client, index) => (
              <CarouselItem
                key={index}
                className=" basis-80 sm:basis-1/2 md:basis-1/3 lg:basis-1/4  "
              >
                <div className="mx-5 h-full">
                  <DoubleFaceHoverCard
                    key={index}
                    title={client.title}
                    description={client.description}
                    href={client.href}
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

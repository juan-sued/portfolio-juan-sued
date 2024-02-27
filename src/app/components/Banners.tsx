import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { IAdvertisementsItem, advertisementsList } from '@/data/advertisements'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Banners() {
  return (
    <>
      <section
        id="services"
        className="differences  w-full flex flex-col items-center  "
      >
        <Carousel
          opts={{
            align: 'start',
          }}
          className="  w-[99.40vw]  "
        >
          <div className=" flex w-full justify-end gap-2 px-8 ">
            <CarouselPrevious />
            <CarouselNext />
          </div>

          <CarouselContent className=" py-12 pl-2 md:pl-20 ">
            {advertisementsList.map((advertisement, index) => (
              <CarouselItem
                key={index}
                className=" basis-80 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 min-h-[400px] "
              >
                <div className="mx-5 h-full">
                  <CardBanner
                    key={index}
                    image={advertisement.image}
                    href={advertisement.href}
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

function CardBanner({ image, href }: IAdvertisementsItem) {
  return (
    <Link href={href}>
      <Card
        className={cn(
          'hover:-translate-y-11  p-6 w-full h-full   hover:shadow-2xl   transition-all duration-500',
          `bg-[url(${image})]`,
        )}
      ></Card>
    </Link>
  )
}

import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { IAdvertisementsItem, advertisementsList } from '@/data/advertisements'
import Image from 'next/image'
import Link from 'next/link'

export default function Banners() {
  return (
    <>
      <section
        id="advertisements"
        className=" mt-[-10px]   w-full flex flex-col items-center  "
      >
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          className="w-full  "
        >
          <div className="   hidden md:flex w-full justify-end gap-2 px-8 ">
            <CarouselPrevious className="" />
            <CarouselNext />
          </div>

          <CarouselContent className=" py-12  -ml-20 ">
            {advertisementsList.map((advertisement, index) => (
              <CarouselItem key={index} className="pl-20  basis-1/1  ">
                <div className="w-full h-fit">
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
    <Link href={href} target="_blank">
      <Card className=" shadow hover:shadow-lg transition-all delay-500 overflow-hidden  border-none  flex justify-center items-center   ">
        <Image
          src={image}
          alt="banner"
          width="0"
          height="0"
          sizes="100vw"
          className=" w-full h-full object-cover max-w-[90vw]  rounded-lg"
        />
      </Card>
    </Link>
  )
}

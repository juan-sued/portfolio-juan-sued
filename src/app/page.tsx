import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-content-center gap-4 p-4">
      <h1>Eficiência em <strong>PESO</strong></h1>
      <section className="black-hole">
        <video preload="false" muted loop width="600">
          <source src="/assets/black-hole.webm" type="video/webm" />
          Seu navegador não suporta a exibição de vídeos.
        </video>
      </section>

      <Link className=" grid place-content-center" href='./login'>
        <Button variant={'outline'}
          className="text-white hover:bg-white hover:text-pinkLightBrand-100 active:scale-95 transition-all">
          IR PARA O LOGIN
        </Button>
      </Link>
    </div>

  )
}

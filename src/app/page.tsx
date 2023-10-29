import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid place-content-center gap-4 p-4 mt-14">
      <h1>Eficiência em <strong>PESO</strong></h1>
      <section className="overflow-hidden max-w-full"  >
        <video preload="false" autoPlay muted loop src="/assets/black-hole.webm" typeof="video/webm" />
      </section>

      <Link className="grid place-content-center" href='./login'>
        <Button variant={'outline'}
          className="text-white hover:bg-white hover:text-pinkLightBrand-100 active:scale-95 transition-all">
          IR PARA O LOGIN
        </Button>
      </Link>
    </main>

  )
}

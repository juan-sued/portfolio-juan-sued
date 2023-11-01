'use client'


import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import ButtonsMenu from "./ButtonsMenu"
import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"


export default function ContentMenu() {

  const LINK_WHATSAPP = 'https://api.whatsapp.com/send?phone=5521984980723&text=Ol%C3%A1,%20Juan!%20Tenho%20uma%20prop%C3%B3sta%20irrecus%C3%A1vel!'

  return (
    <SheetContent className="bg-blueTheme-500 bg-opacity-80 shadow transition delay-200  border-0  opacity-0 animate__animated animate__fadeInRight">
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
        <SheetDescription>
          A definição de "Pronto para ontem", nunca foi tão real.
        </SheetDescription>
      </SheetHeader>
      <ButtonsMenu />
      <SheetFooter>
        <SheetClose asChild>
          <a href={LINK_WHATSAPP} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" type="submit" >
              <div className="row flex gap-2 justify-center items-center">
                <Smartphone />
                <h4>
                  Entrar em contato
                </h4>
              </div>
            </Button>
          </a>

        </SheetClose>
      </SheetFooter>

    </SheetContent>


  )
}
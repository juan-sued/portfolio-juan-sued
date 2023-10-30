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
import { axiosWhatsAppContact } from "@/services/axios"
import { useEffect } from "react"

export default function ContentMenu() {
  async function sendMessage() {
    useEffect(() => {

      const link = 'Ol%C3%A1,%20Juan!%20Tenho%20uma%20prop%C3%B3sta%20irrecus%C3%A1vel!'

      axiosWhatsAppContact
        .get(link)
        .then(({ data }) => {
          console.log(data)

        })
        .catch(err => {
          console.error('erro ao enviar mensagem', err);
        });

    }, [])

    // Se você não precisa retornar nada, pode omitir o return ou retornar null
    return null;
  }

  return (

    <>
      <form onSubmit={sendMessage}>
        <SheetContent className="bg-blueTheme-500 bg-opacity-80 shadow transition delay-500  border-0  opacity-0 animate__animated animate__fadeInRight">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              A definição de "Pronto para ontem", nunca foi tão real.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <ButtonsMenu />
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline" type="submit">
                <div className="row flex gap-2 justify-center items-center">
                  <Smartphone />
                  <h4>
                    Entrar em contato
                  </h4>
                </div>
              </Button>
            </SheetClose>
          </SheetFooter>

        </SheetContent>

      </form>

    </>
  )
}
import ThemeSwitcher from "@/components/shared/ThemeSwitcher";
import LogoAndName from "./LogoAndName";
import MenuNavBar from "./MenuNavBar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
export default function Header() {
  return (
    <>
      <header className="px-5 py-4 bg-opacity-10 backdrop-blur-md fixed top-0 left-0 w-full z-10 flex justify-between" >
        <LogoAndName />
        <MenuNavBar />
        <div className="hidden md:block">
          <ThemeSwitcher />
        </div>
        <nav className="menuMobile block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-700 bg-opacity-50 shadow transition delay-500  border-0">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">

              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

        </nav>

      </header>
    </>
  )

};





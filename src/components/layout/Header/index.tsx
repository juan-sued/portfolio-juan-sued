import ThemeSwitcher from "@/components/shared/ThemeSwitcher";
import LogoAndName from "./LogoAndName";
import MenuNavBar from "./MenuNavBar";
import MenuMobile from "./MenuMobile";

export default function Header() {
  return (
    <>
      <header className="px-5 py-6 bg-opacity-10 backdrop-blur-md fixed top-0 left-0 w-full z-10 flex justify-between" >
        <LogoAndName />
        <MenuNavBar />
        <div className="hidden md:flex md:w-1/3 md:justify-end">
          <ThemeSwitcher />
        </div>
        <MenuMobile />
      </header>
    </>
  )

};





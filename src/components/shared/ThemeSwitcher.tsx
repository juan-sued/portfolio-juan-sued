'use client'

import { useTheme } from 'next-themes';
import SwitcherSunAndMoon from "./SwitcherSunAndMoon/SwitcherSunAndMoon";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  function alterTheme() {
    if(theme === 'dark' ){ 
      setTheme('light')} 
    else{
      setTheme('dark')
    }
  }
  return (
    <div>
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger  asChild>
          <div className="tooltip">
          <SwitcherSunAndMoon checked={theme === 'dark'? true : false} onChange={alterTheme}/>
          </div>
        </TooltipTrigger>
        <TooltipContent className='bg-white dark:bg-white dark:text-brownDarkBrand-100'>
          <p>Mudar tema</p>
        </TooltipContent>
      </Tooltip>
      </TooltipProvider>
    </div>
  );
}

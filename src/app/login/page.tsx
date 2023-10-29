'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import handsCake from '@/assets/hands-cake.svg'

import Image from 'next/image'
import ThemeSwitcher from '@/components/shared/ThemeSwitcher'

export default function Login() {
  return (
    <div className="flex place-content-center  h-screen  overflow-x-hidden  ">
      <div className="containerWith3d   w-full ">
        <Image
          src={handsCake}
          className="relative  left-0 animate__animated w-full max-w-lg animate__fadeInLeftBig"
          alt=""
          loading="eager"
        />

      </div>

      <div className="fixed flex place-content-center container mt-56">
        <Card className="w-full glassEffect flex flex-col place-items-center max-w-2xl  shadow-red-400 dark:shadow-black  shadow-md ">
          <CardHeader className='w-full place-items-center'>
            <div className="w-full grid place-items-end">
              <ThemeSwitcher />
            </div>
            <h1 className="text-white font-extrabold">Login</h1>
          </CardHeader>
          <CardContent className="flex flex-col place-items-center">
          </CardContent>
          <CardFooter>Outros Logins</CardFooter>
        </Card>
      </div>
    </div>


  )
}

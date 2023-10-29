import Image from "next/image";

export default function LogoAndName() {
  return (
    <>
      <div className="flex space-x-2  w-fit items-center">
        <Image
          src='/assets/logo.png'
          width="1080"
          height="1080"
          className="animate__animated animate__fadeInLeftBig w-16"
          alt="Ir para Home"
          loading="eager"
        />
        <h4 className='text-sm '>
          <strong className="text-lg">
            EventHorizon
          </strong>
          <br />
          by Juan Sued
        </h4>
      </div>
    </>
  )
}

import Image from 'next/image'

export default function LogoAndName() {
  return (
    <>
      <a
        href="/"
        className="flex gap-2 items-center justify-start relative left-0 w-0 cursor-pointer"
      >
        <Image
          src="/assets/logo.png"
          width="1080"
          height="1080"
          className="animate__animated animate__fadeInLeftBig w-16 min-w-[64px]"
          alt="Ir para Home"
          loading="eager"
        />
        <h4 className="text-sm">
          <strong className="text-lg">EventHorizon</strong>
          <br />
          by Juan Sued
        </h4>
      </a>
    </>
  )
}

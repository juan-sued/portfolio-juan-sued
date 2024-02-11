import Image from 'next/image'

export default function BackGroundImage() {
  return (
    <>
      <section className="overflow-hidden absolute top-0  left-0 right-0 w-full h-full z-[-1] animate__animated animate__fadeIn ">
        <video
          className="w-full h-full object-cover hidden dark:block "
          preload="false"
          autoPlay
          muted
          loop
          src="/assets/black-hole.webm"
          typeof="video/webm"
        />

        <Image
          className="w-full h-full object-cover block dark:hidden  "
          src="/assets/ondas.gif"
          alt="Meu GIF"
          layout="fill"
        />
      </section>
    </>
  )
}

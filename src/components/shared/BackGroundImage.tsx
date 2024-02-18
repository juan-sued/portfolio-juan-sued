export default function BackGroundImage() {
  return (
    <>
      <section className="overflow-visible relative top-0  left-0 right-0 w-full h-0 z-[-1] animate__animated animate__fadeIn ">
        <video
          className="w-screen h-screen object-cover hidden dark:block "
          placeholder="blur"
          autoPlay
          muted
          loop
          src="/assets/black-hole.webm"
          typeof="video/webm"
        />

        <div className="lightBackground w-[99.99%] h-screen relative dark:hidden"></div>
      </section>
    </>
  )
}

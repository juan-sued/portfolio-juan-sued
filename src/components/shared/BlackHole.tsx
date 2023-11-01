export default function BlackHole() {
  return (
    <>
      <section className="overflow-hidden absolute top-24 left-0 w-full h-full z-[-1]">

        <video className="w-full h-full object-cover" preload="false" autoPlay muted loop src="/assets/black-hole.webm" typeof="video/webm" />
      </section>
    </>

  )
}
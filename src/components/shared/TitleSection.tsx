export default function TitleSection({ title }: { title: string }) {
  return (
    <>
      <div className="w-full flex justify-center md:px-24">
        <h1 className="text-5xl font-bold drop-shadow text-start ">{title}</h1>
      </div>
    </>
  )
}

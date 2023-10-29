import ListItem from "./ListItem";

export default function MenuNavBar() {
  return (
    <>
      <nav className="hidden md:block">
        <ul className="headerNav bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full flex px-4 py-2 space-x-4 w-96 justify-around items-center">
          <ListItem title="Início" link="#" />
          <ListItem title="Tecnologias" link="#" />
          <ListItem title="Refêrencias" link="#" />
          <ListItem title="Feedbacks" link="#" />
        </ul>
      </nav>
    </>
  )
}
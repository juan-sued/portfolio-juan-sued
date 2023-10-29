interface IListItem {
  title: string,
  link: string
}

export default function ListItem({ title, link }: IListItem) {
  return (
    <>
      <li className="text-sm font-light hover:text-purple-500 hover:scale-105  active:scale-95 duration-200">
        <a href={link}>
          {title}
        </a>
      </li>
    </>
  )
}
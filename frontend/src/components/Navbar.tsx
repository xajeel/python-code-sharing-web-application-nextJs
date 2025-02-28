import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
        <div className="font-bold text-xl">Code Snipper</div>
        <div className="flex gap-4 font-bold">
            <Link className=" hover:text-blue-500" href='/'>Snippets</Link>
            <Link className=" hover:text-blue-500" href='/snippets/new'>New</Link>
            <Link className=" hover:text-blue-500" href='/#'>About</Link>
            <Link className=" hover:text-blue-500" href='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
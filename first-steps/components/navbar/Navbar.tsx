import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' },
]

export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded-lg">
            <Link className="flex items-center p-2" href={"/"}><HomeIcon className="mr-2" /> <span >Home</span></Link>

            <div className="flex flex-1">

            </div>

            {navItems.map((item) => (
                <ActiveLink key={item.path} {...item} />
            ))}
        </nav>
    )
}

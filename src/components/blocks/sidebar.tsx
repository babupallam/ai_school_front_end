import react from 'react';
import Link from "next/link";
import { Home, LineChart, Package, ShoppingCart, Users} from "lucide-react";

export const SideBar = () => {

    const links = [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: <Home className="h-4 w-4"/>
        },
        {
            title: "Courses",
            href: "/courses",
            icon: <ShoppingCart className="h-4 w-4"/>
        },
        {
            title: "Classes",
            href: "/classes",
            icon:  <Package className="h-4 w-4"/>
        },
        {
            title: "Profile",
            href: "/profile",
            icon:  <Users className="h-4 w-4"/>
        },
        {
            title: "tracking",
            href: "/tracking",
            icon: <LineChart className="h-4 w-4"/>
        }
    ]
    return (
        <nav className="items-start px-2 text-sm font-medium min-h-dvh border-r-2 w-1/6">
            {
                links.map((link, index) => (
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-4"
                        key={link.title}
                    >
                        {link.icon}
                        {link.title}
                    </Link>
                ))
            }
        </nav>
    )
}



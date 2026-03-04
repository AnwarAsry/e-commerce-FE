import { Link } from "react-router";

interface NavLinkProps {
    menu?: boolean;
    onClick?: () => void;
    pos?: number;
    link: {
        label: string;
        href: string;
    };
}

export const NavLink = ({ link, menu, pos, onClick }: NavLinkProps) => {

    if (menu) {
        return (
            <Link
                to={link.href}
                onClick={onClick}
                style={{ transitionDelay: menu ? `${pos! * 40}ms` : "0ms" }}
                className={`py-3 border-b border-gray-100 last:border-none text-sm font-medium uppercase tracking-widest 
                    text-gray-600 hover:text-gray-950 transition-all duration-200 
                    ${menu ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}
                    `}
            >
                {link.label}
            </Link>
        )
    }

    return (
        <Link
            to={link.href}
            className="relative shrink-0 text-[0.8rem] font-medium uppercase tracking-widest whitespace-nowrap text-gray-500 hover:text-gray-950 transition-colors group"
        >
            {link.label}
            <span className="w-0 h-px absolute -bottom-[0.6rem] left-0 bg-gray-950 transition-all duration-300 group-hover:w-full" />
        </Link>
    );
};
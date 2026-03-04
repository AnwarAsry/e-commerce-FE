import { Link } from "react-router"

interface HeaderActionProps {
    children: React.ReactNode;
    linkHref: string;
    text: string;
}

export const HeaderAction = ({ children, linkHref, text }: HeaderActionProps) => {
    return (
        <Link
            to={linkHref}
            className="py-2 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded-md"
            aria-label={text}
        >
            {children}
            <span className="sr-only md:not-sr-only">{text}</span>
        </Link>
    )
}
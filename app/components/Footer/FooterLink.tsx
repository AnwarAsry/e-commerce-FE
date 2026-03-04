import { Link } from "react-router";

interface FooterLinkProps {
    link: {
        label: string;
        href: string;
    };
}

export const FooterLink = ({ link }: FooterLinkProps) => {
    return (
        <li>
            <Link
                to={link.href}
                className="text-sm text-gray-600 hover:text-blue-500 transition-colors"
            >
                {link.label}
            </Link>
        </li>
    );
};
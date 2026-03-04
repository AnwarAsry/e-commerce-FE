interface SocialIconLinkProps {
    href: string;
    children: React.ReactNode;
}

export const SocialIconLink = ({ href, children }: SocialIconLinkProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-gray-700 transition-colors"
        >
            {children}
        </a>
    );
};
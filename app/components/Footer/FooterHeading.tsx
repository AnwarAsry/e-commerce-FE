interface FooterHeadingProps {
    heading: string;
}

export const FooterHeading = ({ heading }: FooterHeadingProps) => {
    return (
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            {heading}
        </p>
    );
};
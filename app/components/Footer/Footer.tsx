import { BsGithub } from "react-icons/bs";
import { SocialIconLink } from "./SocialIconLink";
import { FooterLink } from "./FooterLink";
import { FooterHeading } from "./FooterHeading";

const footerLinks = [
    {
        heading: "Explore",
        links: [
            { label: "Electronics", href: "/products/electronics" },
            { label: "Clothing", href: "/products/clothing" },
            { label: "Home & Garden", href: "/products/home-garden" },
        ],
    },
    {
        heading: "Account",
        links: [
            { label: "Log In", href: "/login" },
            { label: "Register", href: "/register" },
            { label: "My Cart", href: "/cart" },
        ],
    },
];

export const Footer = () => {
    return (
        <footer className="mt-auto bg-gray-100">
            <div className="w-full max-w-[1170px] mx-auto py-10 px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <p className="text-xl font-semibold tracking-tight text-gray-900">
                            MarketNest
                        </p>
                        <p className="max-w-xs mt-3 text-sm leading-relaxed text-gray-500">
                            A modern e-commerce platform built with React and TypeScript, designed to provide a seamless shopping experience.
                            Explore our wide range of products and enjoy secure transactions.
                        </p>

                        <div className="mt-5 flex items-center gap-4">
                            <SocialIconLink href="https://github.com/AnwarAsry">
                                <BsGithub className="w-5 h-5" />
                            </SocialIconLink>
                        </div>
                    </div>

                    {
                        footerLinks.map((col) => (
                            <div key={col.heading}>
                                <FooterHeading heading={col.heading} />

                                <ul className="mt-4 space-y-2">
                                    {
                                        col.links.map((link) => (
                                            <FooterLink key={link.label} link={link} />
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>

                <div className="mt-10 pt-6 flex flex-col items-center gap-2 border-t border-gray-400 sm:flex-row sm:justify-between">
                    <div className="container mx-auto text-xs text-center text-gray-400">
                        <p>
                            Made by{" "}
                            <a
                                href="https://github.com/AnwarAsry"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pb-0.5 font-medium text-gray-600 shadow-underline hover:shadow-underlineHover hover:text-blue-500 transition-shadow duration-200"
                            >
                                Anwar Asry
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};


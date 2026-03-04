import logo from "@public/Group 1.png";
import { FaRegUser } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import { Link } from "react-router";
import { useState } from "react";

import { SearchInput } from "../SearchInput";
import { AmountLabel } from "../AmountLabel";
import { HeaderAction } from "./HeaderAction";
import { NavLink } from "./NavLink";

const NAV_LINKS = [
    { label: "Electronics", href: "/electronics" },
    { label: "Books", href: "/books" },
    { label: "Home & Garden", href: "/home-garden" },
    { label: "Beauty", href: "/beauty" },
    { label: "Sports", href: "/sports" },
    { label: "Clothing", href: "/clothing" },
];

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
            <div className="py-2 text-xs text-center font-light tracking-widest uppercase text-white bg-gray-950">
                Free shipping on orders over $50
            </div>

            <div className="w-full max-w-[1170px] mx-auto px-6">
                <div className="h-16 flex items-center gap-8">
                    <button
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        {
                            menuOpen
                                ? <IoCloseOutline className="w-5 h-5 text-gray-700" />
                                : <RxHamburgerMenu className="w-5 h-5 text-gray-700" />
                        }
                    </button>

                    <Link to="/" className="mr-2 shrink-0 hidden sm:block">
                        <img
                            src={logo}
                            alt="MarketNest Logo"
                            className="w-auto h-8 object-contain"
                        />
                    </Link>

                    <div className="max-w-md flex-1 hidden sm:block">
                        <SearchInput />
                    </div>

                    {/* Actions */}
                    <div className="ml-auto flex items-center gap-2">
                        <HeaderAction linkHref="/favourites" text="Favourites">
                            <span className="p-2 flex items-center justify-center relative rounded-full hover:bg-gray-100 transition-colors">
                                {/* <AmountLabel amount={2} /> */}
                                <BsHeart className="size-[1.1rem] text-gray-700" />
                            </span>
                        </HeaderAction>

                        <HeaderAction linkHref="/cart" text="Cart">
                            <span className="p-2 flex items-center justify-center relative rounded-full hover:bg-gray-100 transition-colors">
                                {/* <AmountLabel amount={5} /> */}
                                <MdOutlineShoppingBag className="size-[1.1rem] text-gray-700" />
                            </span>
                        </HeaderAction>

                        <HeaderAction linkHref="/login" text="Log in">
                            <span className="p-2 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                                <FaRegUser className="size-[1.1rem] text-gray-700" />
                            </span>
                        </HeaderAction>
                    </div>
                </div>
            </div>

            <div className="hidden border-t border-gray-100 md:block">
                <div className="w-full max-w-[1170px] mx-auto px-6">
                    <nav className="h-10 flex items-center gap-6">
                        {
                            NAV_LINKS.map((link) => (
                                <NavLink key={link.label} link={link} />
                            ))
                        }
                    </nav>
                </div>
            </div>

            {/* Mobile search */}
            <div className="px-6 py-3 border-t border-gray-100 sm:hidden">
                <SearchInput />
            </div>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <nav className="px-6 py-4 flex flex-col border-t border-gray-100">
                    {
                        NAV_LINKS.map((link, i) => (
                            <NavLink
                                key={i}
                                link={link}
                                pos={i}
                                menu={menuOpen}
                                onClick={() => setMenuOpen(false)}
                            />
                        ))
                    }
                </nav>
            </div>
        </header>
    );
};
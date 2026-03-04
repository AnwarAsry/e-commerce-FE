import logo from "@public/Group 1.png";
import { SearchInput } from "../SearchInput";
import { FaRegUser } from "react-icons/fa";
import { BsCart4, BsHeart } from "react-icons/bs";
import { Link } from "react-router";
import { AmountLabel } from "../AmountLabel";
import { HeaderAction } from "../HeaderAction";

export const Header = () => {
    return (
        <header className="border-b">
            <div className="w-full max-w-[1170px] mx-auto px-4">
                <div className="py-4 flex flex-wrap items-center gap-x-6 gap-y-4 md:py-6">
                    <Link to="/" className="shrink-0">
                        <img
                            src={logo}
                            alt="MarketNest Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    <div className="w-full mt-4 order-3 lg:max-w-xl lg:mt-0 lg:mx-8 lg:flex-1 lg:order-2">
                        <SearchInput />
                    </div>

                    <div className="ml-auto flex items-center gap-4 order-2 md:gap-5 lg:order-3">
                        <HeaderAction linkHref="/favourites" text="Favourites">
                            <span className="relative">
                                {/* <AmountLabel amount={2} /> */}
                                <BsHeart className="w-6 h-6" />
                            </span>
                        </HeaderAction>

                        <HeaderAction linkHref="/login" text="Log in">
                            <FaRegUser className="w-6 h-6" />
                        </HeaderAction>

                        <HeaderAction linkHref="/cart" text="Cart">
                            <span className="relative">
                                {/* <AmountLabel amount={5} /> */}
                                <BsCart4 className="w-6 h-6" />
                            </span>
                        </HeaderAction>
                    </div>
                </div>
            </div>
        </header>
    );
};
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface WishButtonProps {
    wished: boolean;
    className?: string;
    onToggle: () => void;
}

export const WishButton = ({ wished, className, onToggle }: WishButtonProps) => {
    return (
        <button
            onClick={onToggle}
            aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
            className={`size-11 rounded-full flex items-center justify-center hover:cursor-pointer transition-all duration-200 active:scale-90
                ${wished ? "bg-rose-500 hover:bg-rose-600" : "bg-white/90 border border-gray-200 hover:border-gray-300 hover:bg-white"}
                ${className}
            `}
        >
            {wished
                ? <BsHeartFill className="w-4 h-4 text-white" />
                : <BsHeart className="w-4 h-4 text-gray-500" />
            }
        </button>
    );
};
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface IStarsProps {
    rating: number;
}

export const Stars = ({ rating }: IStarsProps) => {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((n) => {
                const filled = rating >= n;
                const half = !filled && rating >= n - 0.5;
                return filled ? (
                    <BsStarFill key={n} className="w-3 h-3 text-amber-400" />
                ) : half ? (
                    <BsStarHalf key={n} className="w-3 h-3 text-amber-400" />
                ) : (
                    <BsStar key={n} className="w-3 h-3 text-gray-300" />
                );
            })}
        </div>
    );
}
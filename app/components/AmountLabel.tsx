export const AmountLabel = ({ amount }: { amount: number }) => {
    return (
        <span className="min-w-[1.1rem] h-[1.1rem] px-[0.2rem] grid place-items-center absolute -top-1 -right-1 rounded-full text-[0.6rem] text-white font-semibold leading-none bg-gray-950 shadow-sm ring-2 ring-white">
            {amount > 99 ? "99+" : amount}
        </span>
    )
}
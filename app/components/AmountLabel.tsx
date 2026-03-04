export const AmountLabel = ({ amount }: { amount: number }) => {
    return (
        <span className="w-5 h-5 grid place-items-center absolute -top-2 -right-2 rounded-full text-[0.65rem] bg-gray-200">
            {amount}
        </span>
    )
}
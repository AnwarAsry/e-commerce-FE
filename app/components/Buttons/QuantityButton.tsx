interface QuantityButtonProps {
    onClick: () => void;
    text: string;
}

export const QuantityButton = ({ onClick, text }: QuantityButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="w-10 h-11 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors text-lg font-light"
        >
            {text}
        </button>
    );
};
interface SecondaryButtonProps {
    text: string;
    onClick: () => void;
}

export const SecondaryButton = ({ text, onClick }: SecondaryButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="px-5 py-2.5 border rounded-xl border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 cursor-pointer transition-colors"
        >
            {text}
        </button>
    );
};
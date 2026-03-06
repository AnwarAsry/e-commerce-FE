interface PrimaryButtonProps {
    icon?: React.ReactNode;
    text: string;
    className?: string;
    disabled?: boolean;
    onClick: () => void;
}

export const PrimaryButton = ({ text, disabled, onClick, icon, className }: PrimaryButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-3 py-2 flex items-center justify-center gap-1.5 rounded-xl text-xs font-semibold transition-all duration-200
                ${disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-950 text-white hover:cursor-pointer hover:bg-gray-700 active:scale-95"}
                ${className}
            `}
        >
            {icon}
            {text}
        </button>
    );
};
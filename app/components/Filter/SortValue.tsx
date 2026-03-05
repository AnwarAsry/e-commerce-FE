interface SortValueProps {
    opt: {
        value: string;
        label: string;
    };
    currentSort: string;
    handleSort: (value: string) => void;
}

export const SortValue = ({ opt, currentSort, handleSort }: SortValueProps) => {
    return (
        <li>
            <button
                onClick={() => handleSort(opt.value)}
                className={`w-full px-3 py-1.5 rounded-lg text-left text-sm transition-colors cursor-pointer
                                            ${currentSort === opt.value
                        ? "bg-gray-950 text-white font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
            >
                {opt.label}
            </button>
        </li>
    );
};
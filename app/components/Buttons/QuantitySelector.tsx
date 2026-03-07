import { QuantityButton } from "./QuantityButton";

interface QuantitySelectorProps {
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

export const QuantitySelector = ({ quantity, onDecrement, onIncrement }: QuantitySelectorProps) => {
    return (
        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
            <QuantityButton onClick={onDecrement} text="-" />
            <span className="w-10 text-center text-sm font-semibold text-gray-900">
                {quantity}
            </span>
            <QuantityButton onClick={onIncrement} text="+" />
        </div>
    );
};
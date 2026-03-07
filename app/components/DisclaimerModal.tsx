import { useState, useEffect } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { PrimaryButton } from "./Buttons/PrimaryButton";

const STORAGE_KEY = "marketnest_disclaimer_seen";

export const DisclaimerModal = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const seen = localStorage.getItem(STORAGE_KEY);
        if (!seen) setVisible(true);
    }, []);

    const handleDismiss = () => {
        localStorage.setItem(STORAGE_KEY, "true");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            className="p-6 flex items-center justify-center fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
        >
            <div className="max-w-md w-full p-8 flex flex-col gap-5 rounded-3xl shadow-2xl bg-white">

                <div className="w-12 h-12 flex items-center justify-center rounded-2xl shrink-0 bg-red-500">
                    <BsInfoCircle className="size-5 text-white" />
                </div>

                <div className="flex flex-col gap-2">
                    <h2
                        id="disclaimer-title"
                        className="text-lg font-bold text-gray-950 leading-snug"
                    >
                        This is a demo project
                    </h2>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        MarketNest is a personal portfolio project and not a real store.
                        You're welcome to browse and explore, but please note:
                    </p>
                    <ul className="mt-1 flex flex-col gap-1.5">
                        {
                            [
                                "No real products are being sold",
                                "All transactions are simulated, no money will be charged",
                                "Any account data you enter is not used commercially or any other reason",
                            ].map((point) => (
                                <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="size-1.5 mt-1 rounded-full shrink-0 bg-gray-400" />
                                    {point}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <PrimaryButton text="Got it, let me explore" onClick={handleDismiss} className="w-full h-11 mt-1 text-sm!" />
            </div>
        </div>
    );
};
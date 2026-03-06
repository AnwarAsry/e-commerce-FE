import { Link, useNavigate } from "react-router";
import { SecondaryButton } from "~/components/Buttons/SecondaryButton";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-[80vh] px-6 flex flex-col items-center justify-center text-center">
            <div className="mb-6 select-none">
                <span className="text-[9rem] font-black leading-none tracking-tighter text-gray-950">
                    4
                    <span className="text-gray-200">0</span>
                    4
                </span>
            </div>
            <h1 className="mb-2 text-xl font-semibold text-gray-900">
                Page not found
            </h1>
            <p className="max-w-xs mb-8 text-sm text-gray-400 leading-relaxed">
                The page you're looking for doesn't exist or may have been moved.
            </p>

            <div className="flex items-center gap-3">
                <SecondaryButton text="Go back" onClick={() => navigate(-1)} />
                <Link
                    to="/"
                    className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-gray-950 hover:bg-gray-700 transition-colors"
                >
                    Back to home
                </Link>
            </div>
        </div>
    );
};
import { Link } from "react-router";

const CATEGORIES = [
    {
        label: "Electronics",
        href: "/electronics",
        bg: "bg-blue-50",
        emoji: "🎧",
        description: "Gadgets & devices",
    },
    {
        label: "Clothing",
        href: "/clothing",
        bg: "bg-rose-50",
        emoji: "👕",
        description: "Fashion & apparel",
    },
    {
        label: "Home & Living",
        href: "/home-living",
        bg: "bg-slate-50",
        emoji: "🏠",
        description: "Furniture & Decoration",
    },
    {
        label: "Garden",
        href: "/garden",
        bg: "bg-green-50",
        emoji: "🌿",
        description: "Outdoor & Tools",
    },
    {
        label: "Books",
        href: "/books",
        bg: "bg-amber-50",
        emoji: "📚",
        description: "Fiction & non-fiction",
    },
    {
        label: "Sports",
        href: "/sports",
        bg: "bg-sky-50",
        emoji: "⚽",
        description: "Gear & equipment",
    },
    {
        label: "Beauty",
        href: "/beauty",
        bg: "bg-pink-50",
        emoji: "✨",
        description: "Skincare & cosmetics",
    },
];

export const CategoryGrid = () => {
    return (
        <section className="w-full max-w-[1170px] mx-auto px-6 py-16">

            <div className="mb-8 flex items-end justify-between">
                <h2 className="text-2xl font-bold text-gray-950 tracking-tight">
                    Browse by category
                </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {
                    CATEGORIES.map((cat) => (
                        <Link
                            key={cat.label}
                            to={cat.href}
                            className={`p-5 flex flex-col gap-3 rounded-2xl ${cat.bg} hover:scale-[1.02] transition-transform duration-200 active:scale-100`}
                        >
                            <span className="text-3xl">{cat.emoji}</span>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">{cat.label}</p>
                                <p className="mt-0.5 text-xs text-gray-400">{cat.description}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    );
};
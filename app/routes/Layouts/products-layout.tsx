import { Outlet, useLocation, useSearchParams } from "react-router";
import { FilterHeading } from "~/components/Filter/FilterHeading";
import { SortValue } from "~/components/Filter/SortValue";

const CATEGORY_TITLES: Record<string, string> = {
    electronics: "Electronics",
    clothing: "Clothing",
    "home-living": "Home & Living",
    garden: "Garden",
    books: "Books",
    sports: "Sports",
    beauty: "Beauty",
    search: "Search Results",
};

const SORT_OPTIONS = [
    { label: "Relevance", value: "relevance" },
    { label: "Price: Low–High", value: "price_asc" },
    { label: "Price: High–Low", value: "price_desc" },
    { label: "Top Rated", value: "rating" },
    { label: "Newest", value: "newest" },
];

export default function ProductsLayout() {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    // Take current category from the URL
    const segment = location.pathname.replace("/", "");

    // Get current sort and search query from URL
    const currentSort = searchParams.get("sort") ?? "relevance";
    const searchQuery = searchParams.get("q");

    const handleSort = (value: string) => {
        setSearchParams((prev) => {
            prev.set("sort", value);
            return prev;
        });
    };

    const handleInStockToggle = () => {
        setSearchParams((prev) => {
            if (prev.get("inStock") === "true") {
                prev.delete("inStock");
            } else {
                prev.set("inStock", "true");
            }
            return prev;
        });
    };

    return (
        <div className="w-full max-w-[1170px] mx-auto px-6 py-8">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-950 tracking-tight">
                    {/* If search query is present, display it, otherwise display the category title */}
                    {searchQuery ? `Results for "${searchQuery}"` : CATEGORY_TITLES[segment]}
                </h1>
            </div>

            <div className="flex gap-8">
                <aside className="w-52 hidden lg:flex flex-col gap-6 shrink-0">
                    <div>
                        <FilterHeading title="Sort By" />
                        <ul className="flex flex-col gap-1">
                            {
                                SORT_OPTIONS.map((opt, i) => (
                                    <SortValue key={i} opt={opt} currentSort={currentSort} handleSort={handleSort} />
                                ))
                            }
                        </ul>
                    </div>

                    <hr className="border-gray-100" />

                    <div>
                        <FilterHeading title="Filter" />
                        <label className="flex items-center gap-2.5 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={searchParams.get("inStock") === "true"}
                                onChange={handleInStockToggle}
                                className="size-4 rounded accent-gray-950 cursor-pointer"
                            />
                            <span className="text-sm text-gray-600 group-hover:text-gray-950 transition-colors">
                                In Stock Only
                            </span>
                        </label>
                    </div>
                </aside>

                <main className="min-w-0 flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
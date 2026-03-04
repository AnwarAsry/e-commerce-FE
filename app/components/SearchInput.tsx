import { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { getSearchResults } from "~/actions/SearchAction";

export const SearchInput = () => {
    // Timer to keep track how long user is not typing
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Clear timer if there is one
        if (timerRef.current) clearTimeout(timerRef.current);

        // Create a timeout on 1000ms
        timerRef.current = setTimeout(async () => {
            try {
                // Trigger the fetch call here
                getSearchResults(e.target.value)
            } catch (error) {
                console.log("[Search error] Could not send query:", error);
            }
        }, 1000);
    }

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        }
    }, [])

    return <form className="w-full h-full relative flex items-center">
        <input name="searchQuery" type="text" placeholder="Search..."
            className="w-full h-full py-3 pl-3 pr-12 rounded-full border border-gray-400 focus:outline-none focus:border-blue-500"
            onChange={handleSearchOnChange} />
        <IoSearch className="text-lg absolute right-4 top-1/2 z-10 transform -translate-y-1/2" />
    </form>;
}
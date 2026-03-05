import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    // Default route (home page)
    index("routes/home.tsx"),

    // All Categories share the same layout
    layout("routes/category/category-layout.tsx", [
        route("electronics", "routes/category/electronics.tsx"),
        route("clothing", "routes/category/clothing.tsx"),
        route("home-living", "routes/category/home-living.tsx"),
        route("garden", "routes/category/garden.tsx"),
        route("books", "routes/category/books.tsx"),
        route("sports", "routes/category/sports.tsx"),
        route("beauty", "routes/category/beauty.tsx"),

        // Search results page
        route("search", "routes/search.tsx"),
    ]),

    // Product details ex. /product/electronics/42
    route("product/:category/:id", "routes/product-detail.tsx"),

    // Account related routes
    ...prefix("account", [
        route("login", "routes/account/login.tsx"),
        route("register", "routes/account/register.tsx"),
    ]),

    // Other routes
    route("cart", "routes/cart.tsx"),
    route("favourites", "routes/favourites.tsx"),

    // 404 Not Found
    route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;

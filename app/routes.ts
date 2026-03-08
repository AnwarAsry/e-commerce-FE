import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    // Default route (home page)
    index("routes/home.tsx"),

    // All Categories and search results share the same layout
    layout("routes/Layouts/products-layout.tsx", [
        route("electronics", "routes/Category/electronics.tsx"),
        route("clothing", "routes/Category/clothing.tsx"),
        route("home-living", "routes/Category/home-living.tsx"),
        route("garden", "routes/Category/garden.tsx"),
        route("books", "routes/Category/books.tsx"),
        route("sports", "routes/Category/sports.tsx"),
        route("beauty", "routes/Category/beauty.tsx"),
        route("featured", "routes/Category/featured.tsx"),

        // Search results page
        route("search", "routes/search.tsx"),
    ]),

    // Product details ex. /product/electronics/42
    route("product/:category/:id", "routes/Product/product-detail.tsx"),

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

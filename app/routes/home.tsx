import { DisclaimerModal } from "~/components/DisclaimerModal";
import type { Route } from "./+types/home";
import { CategoryGrid } from "~/components/CategoryGrid";
import { FeaturedProducts } from "~/components/FeaturedProducts";
import type { IProduct } from "~/model/Product";
import { useLoaderData } from "react-router";
import { getFeaturedProducts } from "~/actions/ProductsAction";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

interface HomeLoaderData {
	featured: IProduct[];
}

export async function loader(): Promise<HomeLoaderData> {
	const response = await getFeaturedProducts();
	return {
		featured: response.success && response.data ? response.data : [],
	};
}

export default function Home() {
	const { featured } = useLoaderData<HomeLoaderData>();

	return <>
		<DisclaimerModal />
		<CategoryGrid />
		<FeaturedProducts products={featured} />
	</>;
}

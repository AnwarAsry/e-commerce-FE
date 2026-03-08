import { DisclaimerModal } from "~/components/DisclaimerModal";
import type { Route } from "./+types/home";
import { CategoryGrid } from "~/components/CategoryGrid";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return <>
		<DisclaimerModal />
		<CategoryGrid />
	</>;
}

import Counter from "~/components/counter";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<div className="flex flex-1 flex-col h-screen justify-center content-center align-middle">
			<Counter />
		</div>
	);
}

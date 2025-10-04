import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function Counter() {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const socket = io("ws://localhost:8080");

		socket.on("counter:request", (callback: (count: number) => void) => {
        console.log('server requested counter ', counter);
				callback(counter)
			},
		);

		return () => {
			socket.close();
		};
	}, [counter]);

	function handleButtonClick() {
		setCounter((prev) => prev + 1);
	}

	return (
		<div className="flex flex-col p-10 bg-white border rounded-2xl max-w-70">
			<button
				className="bg-black rounded-2xl p-10 text-white font-bold cursor-pointer"
				type="button"
				onClick={handleButtonClick}
			>
				Click-me
			</button>

			<p className="font-bold text-3xl text-black text-center">{counter}</p>
		</div>
	);
}

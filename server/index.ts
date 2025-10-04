import { Server } from "socket.io";

const io = new Server();
const INTERVAL_MS = 1000;

io.on("connection", (socket) => {
	console.log("is connected? ", socket.connected);

	setInterval(() => {
		socket.emit("counter:request", (counterValue: number) => {
			console.log(counterValue);
		});
	}, INTERVAL_MS);
});

io.listen(8080, {
	cors: {
		origin: "*",
	},
});

import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./App.css";

function App() {
	const handleLoginSuccess = async (response) => {
		console.log("response:", response);
		const token = response.credential;

		// Send the token to the backend
		const res = await fetch("https://localhost:44366/api/User/google-sign-in", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ tokenId: token }),
		});

		const data = await res.json();
		console.log("User info:", data);
	};

	const handleLoginError = () => {
		console.log("Login Failed");
	};

	return (
		<div className="App">
			<h1>Google Login</h1>
			<GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
		</div>
	);
}

export default App;

// 	useEffect(() => {
// 		// waleed
// 		var token =
// 			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndhbGVlZEBnbWFpbC5jb20iLCJuYW1laWQiOiIxMzNjYWJlNy1iMGVlLTRiZTYtODVhZC1lMWZkMzAxNDAwNDIiLCJuYmYiOjE3MjM1NjIyMDEsImV4cCI6MTcyNDE2NzAwMSwiaWF0IjoxNzIzNTYyMjAxfQ.pYlUccC-EeTYR9maT8LDlWP3Jrvli78pXB_JYyYy1Tw";
// 		// zeyad
// 		// var token =
// 		// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InpleWFkQGdtYWlsLmNvbSIsIm5hbWVpZCI6IjU3YTk0NWU2LTY3MmUtNDRiMS04NTE2LWUwZmM2MDgyZjcwZSIsIm5iZiI6MTcyMzU1MzA3MywiZXhwIjoxNzI0MTU3ODczLCJpYXQiOjE3MjM1NTMwNzN9.wcahtE3VztkYSb0U6s41W5XwNmZYsikkFr25Emp7jYc";
// 		// abdo
// 		// var token =
// 		// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiZG9AZ21haWwuY29tIiwibmFtZWlkIjoiY2ZhOTc4MGQtNTVlYy00MzU2LWI3NzgtZjg5MjU4OTMwMGY5IiwibmJmIjoxNzIzNTUzMjIyLCJleHAiOjE3MjQxNTgwMjIsImlhdCI6MTcyMzU1MzIyMn0.1koGWC3m_xhBdd4i1k1PXAq5d7My5ul-MgyIsC5_4ew";
// 		const connection = new HubConnectionBuilder()
// 			.withUrl("https://localhost:44366/notification", {
// 				accessTokenFactory: () => token,
// 				withCredentials: true, // Ensure credentials like cookies are sent
// 			})
// 			.withAutomaticReconnect()
// 			.configureLogging(LogLevel.Information)
// 			.build();
// 		console.log("connection: ", connection);
// 		connection
// 			.start()
// 			.then(() => console.log("Connected to SignalR hub"))
// 			.catch((err) => console.error("Error connecting to hub:", err));
// 		connection.on("ReceiveNotification", (Notification) => {
// 			console.log("Received Notification:", Notification);
// 		});
// 	}, []);
// 	return <div>Test SignalR</div>;

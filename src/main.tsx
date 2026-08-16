import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// ---------------------------------------------------------------------------
// APPLICATION ENTRY POINT
// This is where React connects with the HTML Document Object Model (DOM).
// It searches for <div id="root"> in index.html to render the React tree.
// ---------------------------------------------------------------------------
const container = document.getElementById("root");

// The 'if' check ensures TypeScript knows 'container' is found before mounting
if (container) {
	const root = ReactDOM.createRoot(container);
	root.render(
		// StrictMode is a React tool that activates additional checks and warnings
		// during development to highlight potential bugs and side-effects.
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
}

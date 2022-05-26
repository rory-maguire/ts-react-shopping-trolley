import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

//create an instance of react query to help us handle fetching and using data in app
//wrap the client provider around the app
const client = new QueryClient();

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>
);

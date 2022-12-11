import { QueryClientProvider } from "@tanstack/react-query";
import { setupWorker } from "msw";
import { RouterProvider } from "react-router-dom";

import { queryClient } from "@/shared/api";
import { isDevEnv } from "@/shared/utils";

import { router } from "@/pages";
import { server } from "@/test";

import "./styles/index.css";

if (isDevEnv) {
	const worker = setupWorker(...server);
	worker.start();
}

export const App = () => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</>
	);
};

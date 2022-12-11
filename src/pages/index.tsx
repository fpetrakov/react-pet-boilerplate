import { createBrowserRouter } from "react-router-dom";

import { RootPage } from "./root-page";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootPage />,
	},
]);

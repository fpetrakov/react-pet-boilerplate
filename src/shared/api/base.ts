import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

import { API_URL } from "@/shared/utils";

export const api = axios.create({
	baseURL: API_URL,
});

export const queryClient = new QueryClient();

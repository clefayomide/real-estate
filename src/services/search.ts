// Need to use the React-specific entry point to import createApi
import apiBaseQuery from "../baseQuery/apiBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { quickSearchSelectProps } from "../types";

// Define a service using a base URL and expected endpoints
export const searchApi = createApi({
	reducerPath: "searchApi",
	baseQuery: apiBaseQuery,
	endpoints: (builder) => ({
		getQuickSearch: builder.query<quickSearchSelectProps, void>({
			query: () => ({
				url: "search/quick",
				method: "GET",
			}),
		}),
		quickSearch: builder.mutation<
			Record<string, unknown>,
			{
				searchType: string;
				location: string;
				type: string;
				range: string;
			}
		>({
			query: (payload) => ({
				url: "search/quick",
				method: "POST",
				body: payload,
			}),
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQuickSearchQuery, useQuickSearchMutation } = searchApi;

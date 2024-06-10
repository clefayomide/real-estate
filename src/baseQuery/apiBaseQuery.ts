// Need to use the React-specific entry point to import createApi
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { RootState } from "../lib/store";
import { ErrorType } from "../types";
import { notifyError } from "../utils/notification";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:8000/v1/",
	prepareHeaders: (headers, { getState }) => {
		const {
			user: {
				// @ts-ignore
				user: { data, isAuthenticated },
			},
		} = getState() as RootState;
		headers.set("Content-type", "application/json; charset=UTF-8");
		return headers;
	},
	credentials: "include",
});

//   Simulating axios-like interceptors with a custom base query, this is for response interception. make sure to import this in all createApi instances and use as baseQuery
const apiBaseQuery: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	const result = await baseQuery(args, api, extraOptions);
	const error: ErrorType = result.error?.data as ErrorType;

	const defaultStatus = ["FETCH_ERROR", "PARSING_ERROR"];

	if (defaultStatus.includes(result.error?.status as string)) {
		notifyError("Unknown error occurred");
	}
	if (result.error && Number(result?.error.status) > 299) {
		if (error.error && error.error.length > 0) {
			notifyError(error.error.join(", "), error?.message);
		} else {
			notifyError(error.message);
		}
	}

	return result;
};
export default apiBaseQuery;

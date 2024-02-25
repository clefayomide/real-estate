// Need to use the React-specific entry point to import createApi
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { IUSER } from "@/constants/types";
import { RootState } from "@/lib/store";

interface ErrorData {
	[key: string]: any;
	message: string;
}

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:8000/",
	prepareHeaders: (headers, { getState }) => {
		const {}: IUSER = getState() as RootState;

		headers.set("Content-type", "application/json; charset=UTF-8");
		headers.set("authorization", `Bearer ${"d"}`);
		return headers;
	},
});

//   Simulating axios-like interceptors with a custom base query, this is for response interception. make sure to import this in all createApi instances and use as baseQuery
const apiBaseQuery: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result.error?.status === "FETCH_ERROR") {
		console.log("An error occured");
	}
	if (result.error && Number(result.error.status) > 299) {
		if (typeof result.error.data === "object" && result.error.data !== null) {
			const { errors, message } = result.error.data as ErrorData;
			// if (result.error.data?.hasOwnProperty("errors")) {
			// 	const getErrorArray = Object.keys(errors);
			// 	for (let i = 0; i < getErrorArray.length; i++) {
			// 		errors[getErrorArray[i]].forEach((error: string) =>
			// 			console.log(error)
			// 		);
			// 	}
			// } else {
			// 	console.log(message);
			// }
		}
	}

	return result;
};
export default apiBaseQuery;

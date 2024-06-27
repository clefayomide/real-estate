import apiBaseQuery from "../baseQuery/apiBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: apiBaseQuery,
	endpoints: (build) => ({
		register: build.mutation({
			query: (payload) => ({
				url: "auth/register",
				method: "POST",
				body: payload,
			}),
		}),
		login: build.mutation({
			query: (payload) => ({
				url: "auth/login",
				method: "POST",
				body: payload,
			}),
		}),
		verificationRequest: build.mutation({
			query: (payload) => ({
				url: "/verification/request",
				method: "POST",
				body: payload,
			}),
		}),
		verifyOtp: build.mutation({
			query: (payload) => ({
				url: "/verification/verify",
				method: "POST",
				body: payload,
			}),
		}),
	}),
});

export const {
	useRegisterMutation,
	useLoginMutation,
	useVerificationRequestMutation,
	useVerifyOtpMutation,
} = authApi;

import { createSlice } from "@reduxjs/toolkit";
import { IUSER } from "../../types";

const initialState: IUSER = {
	data: {},
	isAuthenticated: false,
	showLoginForm: false,
	showSignupForm: false,
	scroll: window.scrollY,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (_, action) => {
			return {
				data: action.payload,
				isAuthenticated: true,
			};
		},

		toggleLoginForm: (state, action) => {
			return {
				...state,
				showLoginForm: action.payload,
			};
		},

		toggleSignupForm: (state, action) => {
			return {
				...state,
				showSignupForm: action.payload,
			};
		},
		updateScroll: (state, action) => {
			return {
				...state,
				scroll: action.payload,
			};
		},
	},
});

// Action creators are generated for each case reducer function
export const { login, toggleLoginForm, toggleSignupForm, updateScroll } =
	userSlice.actions;

export default userSlice.reducer;

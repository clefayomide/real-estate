import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { IUSER, userDetails } from "@/constants/types";


const initialState: IUSER = {
	data: {},
	isAuthenticated: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<userDetails>) => {
			return {
				...state,
				data: action.payload,
				isAuthenticated: true,
			};
		},
	},
});

export const { login } = userSlice.actions;

export const accessUser = (state: RootState) => state.user;

export default userSlice.reducer;

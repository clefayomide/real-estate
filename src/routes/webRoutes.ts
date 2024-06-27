import AppLayout from "../layout";
// import { AppHome } from "../views";
import { AppHome, AppOtpRequest, AppVerifyOtp } from "../views";
import { path } from "./path";

export const routes = [
	{ path: path.home, protected: false, component: AppHome, layout: AppLayout },
	{
		path: path.otpRequest,
		protected: true,
		component: AppOtpRequest,
		layout: AppLayout,
	},
	{
		path: path.verifyOtp,
		protected: true,
		component: AppVerifyOtp,
		layout: AppLayout,
	},
];

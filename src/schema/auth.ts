import * as yup from "yup";

export const register = yup.object().shape({
	email: yup
		.string()
		.required()
		.matches(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/), {
			message: "Please provide a valid email",
		}),
	password: yup.string().required().min(8),
	username: yup.string().required(),
	checkbox: yup.boolean(),
});

export const login = yup.object().shape({
	email: yup
		.string()
		.required()
		.matches(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/), {
			message: "Please provide a valid email",
		}),
	password: yup.string().required(),
	checkbox: yup.boolean(),
});

export const otpVerification = yup.object().shape({
	otp: yup
		.number()
		.typeError("otp must be a number")
		.required()
		.min(6)
		.test("otp", "otp must be a number", (value) => typeof value === "number"),
});

import * as yup from "yup";

export const auth = yup.object().shape({
	email: yup
		.string()
		.required()
		.matches(new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"), {
			message: "Please provide a valid email",
		}),
	password: yup.string().required(),
	checkbox: yup.boolean(),
});

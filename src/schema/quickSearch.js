import * as yup from "yup";

export const quickSearch = yup.object().shape({
	location: yup.string().required(),
	type: yup.string().required(),
	range: yup.string().required(),
});

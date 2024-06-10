import * as yup from "yup";

export const quickSearch = yup.object().shape({
	location: yup.string().required("location is required"),
	type: yup.string().required("type is required"),
	range: yup.string().required("range is required"),
});

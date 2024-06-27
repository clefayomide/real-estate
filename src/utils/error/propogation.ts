import { ErrorPropogationType } from "../../types";

export const propogateError = (error: ErrorPropogationType) => {
	const { data: { message = "" } = {} } = error ?? {};
	throw new Error(message);
};

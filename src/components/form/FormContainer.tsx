import { classnames } from "../../utils/classnames";
import React from "react";

interface IForm {
	children: React.ReactNode;
	onSubmit: React.FormEventHandler<HTMLFormElement>;
	className?: string;
	[key: string]: any;
}

const FormContainer = (props: IForm) => {
	const { className = "", onSubmit, children, ...rest } = props;
	return (
		<form
			{...rest}
			className={classnames("", className)}
			onSubmit={onSubmit}
			noValidate
		>
			{children}
		</form>
	);
};

export default FormContainer;

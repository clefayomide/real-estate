import React from "react";
import { Button as NextButton } from "@nextui-org/react";
import { classnames } from "../../utils";

interface IButton {
	children: React.ReactNode;
	color?:
		| "default"
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "danger";
	className?: string;
	disabled?: boolean;
	[key: string]: any;
}

const Button = (props: IButton) => {
	const { children = "", className = "", disabled = false, ...rest } = props;
	return (
		<NextButton {...rest} className={classnames(className)} disabled={disabled}>
			{children}
		</NextButton>
	);
};

export default Button;

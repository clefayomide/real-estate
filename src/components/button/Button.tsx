import React from "react";
import { Button as NextButton } from "@nextui-org/react";
import { classnames } from "../../utils/classnames";
import { AppLoader } from "..";

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
	loading?: boolean;
	[key: string]: any;
}

const Button = (props: IButton) => {
	const {
		children = "",
		className = "",
		disabled = false,
		loading = false,
		...rest
	} = props;
	return (
		<NextButton
			{...rest}
			className={classnames("bg-btn_blue rounded-md h-[48px]", className)}
			disabled={disabled}
		>
			{loading ? <AppLoader /> : children}
		</NextButton>
	);
};

export default Button;

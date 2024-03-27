import React from "react";
import { Input as NextInput } from "@nextui-org/react";
import { classnames } from "@/utils";

type InputProps = {
	endContent?: React.ReactNode;
	label: string;
	placeholder: string;
	variant?: "bordered" | "flat" | "faded" | "underlined" | undefined;
	autoFocus?: boolean;
	className?: string;
	size?: "sm" | "md" | "lg";
	errorMessage: string;
	[key: string]: any;
};
const Input = (props: InputProps) => {
	const {
		endContent = "",
		size = "md",
		label = "",
		placeholder = "",
		variant = "bordered",
		className = "",
		autoFocus = false,
		errorMessage = "",
		...rest
	} = props;
	return (
		<NextInput
			{...rest}
			size={size}
			className={classnames("", className)}
			autoFocus={autoFocus}
			endContent={endContent}
			label={label}
			placeholder={placeholder}
			variant={variant}
			errorMessage={errorMessage}
			isInvalid={Boolean(errorMessage)}
		/>
	);
};

export default Input;

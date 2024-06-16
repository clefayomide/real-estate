import React from "react";
import { Input as NextInput } from "@nextui-org/react";
import { classnames } from "../../utils/classnames";

type classNamesPropType =
	| "base"
	| "label"
	| "inputWrapper"
	| "innerWrapper"
	| "mainWrapper"
	| "input"
	| "clearButton"
	| "helperWrapper"
	| "description"
	| "errorMessage";

type InputProps = {
	endContent?: React.ReactNode;
	label?: string;
	placeholder: string;
	variant?: "bordered" | "flat" | "faded" | "underlined";
	autoFocus?: boolean;
	className?: string;
	size?: "sm" | "md" | "lg";
	errorMessage: string;
	classNames?: Partial<Record<classNamesPropType, string>>;
	type: string;
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
		classNames: {
			base = "",
			label: inputLabel = "",
			inputWrapper = "",
			innerWrapper = "",
			mainWrapper = "",
			input = "",
			clearButton = "",
			helperWrapper = "",
			description = "",
			errorMessage: inputErrorMessage = "",
		} = {},
		autoFocus = false,
		errorMessage = "",
		type,
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
			type={type}
			isInvalid={Boolean(errorMessage)}
			classNames={{
				base: classnames("", base),
				label: classnames("", inputLabel),
				inputWrapper: classnames("mt-5 h-[48px]", inputWrapper),
				mainWrapper: classnames("", mainWrapper),
				innerWrapper: classnames("", innerWrapper),
				input: classnames("", input),
				clearButton: classnames("", clearButton),
				helperWrapper: classnames("", helperWrapper),
				description: classnames("", description),
				errorMessage: classnames("", inputErrorMessage),
			}}
		/>
	);
};

export default Input;

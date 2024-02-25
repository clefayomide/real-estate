import { classnames } from "@/utils";
import React from "react";

interface ITypography {
	className?: string;
	children: React.ReactNode;
	[key: string]: any;
}

interface IParagraph extends ITypography {}

interface IHeading extends ITypography {
	type: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = (props: IHeading) => {
	const { children, className = "", type, ...rest } = props;

	const elementProps = {
		className: classnames("font-semibold", className),
		...rest,
	};

	const elementType = "h" + (type < 1 || type > 6 ? 1 : type);

	return React.createElement(elementType, elementProps, children);
};

export const Paragraph = (props: IParagraph) => {
	const { children = "", className = "", ...rest } = props;
	return (
		<p
			{...rest}
			className={classnames(
				"font-normal text-paragraph leading-[24px]",
				className
			)}
		>
			{children}
		</p>
	);
};

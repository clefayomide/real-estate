import React from "react";
import { Link as NextUILink } from "@nextui-org/react";
import { classnames } from "../../utils/classnames";

interface ILink {
	text: React.ReactNode;
	anchorIcon?: React.ReactNode;
	color?:
		| "foreground"
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "danger";
	[key: string]: any;
}

export default function Link(prop: ILink) {
	const { text = "", className = "", ...props } = prop;
	return (
		<NextUILink
			className={classnames(
				"outline-none border-none focus:border-none focus:outline-none",
				className
			)}
			{...props}
		>
			{text}
		</NextUILink>
	);
}

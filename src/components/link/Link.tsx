"use client"

import React, { useState } from "react";
import { Link as NextUILink } from "@nextui-org/react";
import { classnames } from "../../utils";

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
	const [showIcon, setShowIcon] = useState(false);

	const showAnchorIcon = () => {
		setShowIcon((prev) => !prev);
	};
	const { text = "", className = "", ...props } = prop;
	return (
		<NextUILink
			{...props}
			className={classnames(
				"outline-none border-none focus:border-none focus:outline-none",
				className
			)}
			showAnchorIcon={showIcon}
			onMouseEnter={showAnchorIcon}
			onMouseLeave={showAnchorIcon}
		>
			{text}
		</NextUILink>
	);
}

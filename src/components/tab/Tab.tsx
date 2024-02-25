import { classnames } from "@/utils";
import { Tabs as NextTabs, Tab as NextTab } from "@nextui-org/react";
import React from "react";
import { AppCard } from "..";

interface ITabs {
	id: string;
	label: string;
	content?: React.ReactNode;
}

interface ITabItems extends ITabs {
	className?: string;
	children: React.ReactNode;
}

interface ITab {
	tabs?: Array<ITabs>;
	className?: string;
	children: React.ReactNode;
	[key: string]: any;
}

export const Tab = (props: ITab) => {
	const { className = "", children = "", ...rest } = props;
	return (
		<NextTabs {...rest} color="primary" className={classnames("", className)}>
			{children}
		</NextTabs>
	);
};

export const TabItem = (props: ITabItems) => {
	const { id = "", label = "", className = "", children } = props;
	return (
		<NextTab key={id} title={label}>
			<AppCard className={classnames("", className)}>{children}</AppCard>
		</NextTab>
	);
};

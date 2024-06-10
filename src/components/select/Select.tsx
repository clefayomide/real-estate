import {
	Select as NextSelect,
	SelectItem as NextSelectItem,
} from "@nextui-org/react";
import { classnames } from "../../utils/classnames";

type selectItems = {
	value: string;
	label: string;
	description: string;
};

interface ISelect {
	size?: "sm" | "md" | "lg";
	className?: string;
	label: string;
	selectItems: Array<selectItems>;
	errorMessage: string;
	[key: string]: any;
}

export const Select = (props: ISelect) => {
	const {
		className = "",
		size = "sm",
		selectItems = [],
		errorMessage = "",
		...rest
	} = props;
	return (
		<NextSelect
			{...rest}
			isInvalid={Boolean(errorMessage)}
			errorMessage={errorMessage}
			items={selectItems}
			size={size}
			className={classnames("", className)}
		>
			{({ value, label }) => (
				<NextSelectItem key={value} value={value} color="primary">
					{label}
				</NextSelectItem>
			)}
		</NextSelect>
	);
};

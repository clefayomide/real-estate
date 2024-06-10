import React from "react";
import { User as NextUser } from "@nextui-org/react";
import { classnames } from "../../utils/classnames";

interface IUSer {
	name: string;
	description: React.ReactNode;
	className?: string;
	avatarProps: {
		src: string;
		[key: string]: any;
	};
	[key: string]: any;
}

const User = (props: IUSer) => {
	const {
		name = "",
		description = "",
		avatarProps,
		className = "",
		...rest
	} = props;
	return (
		<NextUser
			{...rest}
			name={name}
			description={description}
			avatarProps={avatarProps}
			className={classnames("", className)}
		/>
	);
};

export default User;

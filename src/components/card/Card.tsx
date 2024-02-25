import { classnames } from "@/utils";
import { Card as NextCard, CardBody as NextCardBody } from "@nextui-org/react";
import React from "react";

interface ICard {
	children: any;
	className?: string;
	[key: string]: any;
}

const Card = (props: ICard) => {
	const { children = "", className = "", ...rest } = props;
	return (
		<NextCard {...rest} className={classnames("", className)}>
			<NextCardBody>{children}</NextCardBody>
		</NextCard>
	);
};

export default Card;

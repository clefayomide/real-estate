import React from "react";
import { Checkbox as NextCheckbox } from "@nextui-org/react";

type CheckboxProps = {
	text: string;
};

const Checkbox = (props: CheckboxProps) => {
	const { text } = props;
	return (
		<NextCheckbox
			classNames={{
				label: "text-small",
			}}
		>
			{text}
		</NextCheckbox>
	);
};

export default Checkbox;

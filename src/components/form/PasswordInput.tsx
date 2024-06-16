"use client";

import { useMemo, useState } from "react";
import { AppInput } from "..";
import { EyeIcon, EyeSlashIcon } from "../../assets";

const PasswordInput = ({
	errorMessage,
	label = "Password",
	...rest
}: {
	errorMessage: string;
	label?: string;
	[key: string]: any;
}) => {
	const [type, setType] = useState("password");

	const handleTypeChange = () => {
		if (type === "password") {
			setType("text");
		} else {
			setType("password");
		}
	};

	const eyeIcon = useMemo(() => {
		if (type === "password") {
			return <EyeIcon hasError={Boolean(errorMessage)} />;
		} else {
			return <EyeSlashIcon hasError={Boolean(errorMessage)} />;
		}
	}, [type, errorMessage]);
	return (
		<AppInput
			errorMessage={errorMessage}
			type={type}
			isRequired={true}
			className="mt-4"
			label={label}
			placeholder="xyz123"
			endContent={
				<button
					className="bg-none outline-none focus:outline-none border-none focus:border-none p-0 w-fit h-fit"
					onClick={handleTypeChange}
					type="button"
				>
					{eyeIcon}
				</button>
			}
			labelPlacement={"outside"}
			{...rest}
		/>
	);
};

export default PasswordInput;

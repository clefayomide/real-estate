import React from "react";
import {
	AppButton,
	AppCheckbox,
	AppFormContainer,
	AppInput,
	AppLink,
	AppModal,
} from "..";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { EmailIcon, PadlockIcon } from "@/assets";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth } from "@/schema/auth";

interface IFormInput {
	email: string;
	password: string;
	checkbox?: boolean;
}

const SignUp = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const {
		control,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(auth),
		defaultValues: {
			email: "",
			password: "",
			checkbox: false,
		},
	});

	const handleCloseSignupForm = () => {
		setOpen(false);
		reset();
	};

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		console.log("called");
		console.log(data);
	};
	return (
		<AppModal
			isOpen={open}
			close={handleCloseSignupForm}
			header="Sign up"
			modalBody={
				<>
					<AppFormContainer onSubmit={handleSubmit(onSubmit)}>
						<Controller
							name="email"
							control={control}
							render={({ field }) => (
								<AppInput
									{...field}
									type={"email"}
									isRequired={true}
									errorMessage={errors.email?.message as string}
									label="Email"
									placeholder="joe@gmail.com"
									endContent={<EmailIcon />}
								/>
							)}
						/>

						<Controller
							name="password"
							control={control}
							render={({ field }) => (
								<AppInput
									{...field}
									type={"password"}
									isRequired={true}
									className="mt-4"
									errorMessage={errors.password?.message as string}
									label="Password"
									placeholder="xyz123"
									endContent={<PadlockIcon />}
								/>
							)}
						/>

						<div className="flex py-2 px-1 justify-between">
							<Controller
								name="checkbox"
								control={control}
								render={({ field }) => (
									<div className="relative">
										<AppCheckbox {...field} text={"Remember me"} />
										<span className="absolute">{errors.checkbox?.message}</span>
									</div>
								)}
							/>
							<AppLink
								color="primary"
								href="#"
								size="sm"
								text="Forgot password?"
							/>
						</div>
						<div className="flex justify-end mt-6">
							<AppButton
								type="submit"
								className={`w-full rounded-md text-white text-sm bg-btn_blue`}
							>
								Sign Up
							</AppButton>
						</div>
					</AppFormContainer>
				</>
			}
		/>
	);
};

export default SignUp;

import {
	AppButton,
	AppCheckbox,
	AppFormContainer,
	AppInput,
	AppLink,
	AppModal,
	AppPasswordInput,
} from "..";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { EmailIcon } from "../../assets";
import { yupResolver } from "@hookform/resolvers/yup";
import { register as registerSchema } from "../../schema/auth";
import { useRegisterMutation } from "../../services/auth";
import { notifySuccess } from "../../utils/notification";
import { SuccessType } from "../../types";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { toggleLoginForm, toggleSignupForm } from "../../lib/feature/user";

interface IFormInput {
	email: string;
	password: string;
	username: string;
	checkbox?: boolean;
}

const SignUp = () => {
	const user = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const [register, { isLoading }] = useRegisterMutation();
	const {
		control,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(registerSchema),
		defaultValues: {
			email: "",
			password: "",
			username: "",
			checkbox: false,
		},
	});

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		register(data)
			.unwrap()
			.then((response: SuccessType) => {
				notifySuccess(response.message);
				handleCloseSignupForm();
				dispatch(toggleLoginForm(true));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleCloseSignupForm = () => {
		dispatch(toggleSignupForm(false));
		reset();
	};
	return (
		<AppModal
			isOpen={user.user?.showSignupForm}
			close={handleCloseSignupForm}
			header="Sign Up"
			modalBody={
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
								endContent={
									<EmailIcon hasError={Boolean(errors.email?.message)} />
								}
								labelPlacement={"outside"}
								classNames={{
									inputWrapper: "mt-0",
								}}
							/>
						)}
					/>

					<Controller
						name="username"
						control={control}
						render={({ field }) => (
							<AppInput
								{...field}
								type={"text"}
								isRequired={true}
								errorMessage={errors.username?.message as string}
								label="Username"
								className="mt-4"
								placeholder="alex1234"
								endContent={
									<EmailIcon hasError={Boolean(errors.username?.message)} />
								}
								labelPlacement={"outside"}
							/>
						)}
					/>

					<Controller
						name="password"
						control={control}
						render={({ field }) => (
							<AppPasswordInput
								{...field}
								errorMessage={errors.password?.message as string}
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
							loading={isLoading}
							disabled={isLoading}
							type="submit"
							className={`w-full rounded-md text-white text-sm bg-btn_blue`}
						>
							Sign up
						</AppButton>
					</div>
				</AppFormContainer>
			}
		/>
	);
};

export default SignUp;

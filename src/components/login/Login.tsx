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
import { login as loginSchema } from "../../schema/auth";
import { useLoginMutation } from "../../services/auth";
import { SuccessType } from "../../types";
import { notifySuccess } from "../../utils/notification";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { login as loginReducer, toggleLoginForm } from "../../lib/feature/user";

interface IFormInput {
	email: string;
	password: string;
	checkbox?: boolean;
}

const Login = () => {
	const user = useAppSelector((state) => state.user);
	const [login, { isLoading }] = useLoginMutation();
	const {
		control,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
			checkbox: false,
		},
	});

	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		login(data)
			.unwrap()
			.then((response: SuccessType) => {
				dispatch(loginReducer(response.data));
				notifySuccess(response.message);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleCloseLoginForm = () => {
		dispatch(toggleLoginForm(false));
		reset();
	};
	return (
		<AppModal
			isOpen={user.user?.showLoginForm}
			close={handleCloseLoginForm}
			header="Login"
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
							Sign in
						</AppButton>
					</div>
				</AppFormContainer>
			}
		/>
	);
};

export default Login;

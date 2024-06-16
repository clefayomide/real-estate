import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LockIcon, LockOpenIcon } from "../../../assets";
import {
	AppButton,
	AppFormContainer,
	AppHeading,
	AppParagraph,
	AppPasswordInput,
} from "../../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import { otpVerification } from "../../../schema/auth";
import { useState } from "react";
import { useAppSelector } from "../../../lib/hooks";

const VerifyOtp = () => {
	const user = useAppSelector((state) => state.user.user);
	const [successful, setSuccessful] = useState(Boolean(user.data.verified));
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(otpVerification),
		defaultValues: {
			otp: undefined,
		},
	});

	const onSubmit: SubmitHandler<{ otp: number }> = (data) => {
		console.log(data);
		setSuccessful(true);
	};
	return (
		<div className="flex flex-col md:flex-row  gap-[50px] items-center relative translate-y-12 md:translate-y-1/2  ]">
			<div className="">{successful ? <LockIcon /> : <LockOpenIcon />}</div>
			<AppFormContainer onSubmit={handleSubmit(onSubmit)}>
				<AppHeading className="text-2xl" type={6}>
					OTP Verification
				</AppHeading>
				<AppParagraph className="w-full text-lg md:text-xl md:w-[492px] mt-[6px] md:mt-1 leading-[25px]">
					Kindly enter the OTP sent to your registered email address{" "}
					<span className="font-semibold text-black text-base md:text-lg">
						(victorayomide32@gmail.com)
					</span>
				</AppParagraph>
				<Controller
					name="otp"
					control={control}
					render={({ field }) => (
						<AppPasswordInput
							{...field}
							isRequired={true}
							errorMessage={errors.otp?.message as string}
							placeholder="123456"
							label=""
							labelPlacement={"outside"}
							classNames={{
								inputWrapper: "mt-0 md:w-fit",
							}}
							inputMode="numeric "
							maxLength={6}
							minLength={6}
						/>
					)}
				/>
				<AppButton
					type="submit"
					className="w-full md:w-auto text-white mt-10 md:mt-5 rounded font-semibold"
				>
					Verify OTP
				</AppButton>
			</AppFormContainer>
		</div>
	);
};

export default VerifyOtp;

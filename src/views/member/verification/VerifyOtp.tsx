import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LockIcon, LockOpenIcon } from "../../../assets";
import {
	AppButton,
	AppFormContainer,
	AppHeading,
	AppOtpTimer,
	AppParagraph,
	AppPasswordInput,
} from "../../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import { otpVerification } from "../../../schema/auth";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import {
	useVerificationRequestMutation,
	useVerifyOtpMutation,
} from "../../../services/auth";
import { notifySuccess } from "../../../utils/notification";
import { propogateError } from "../../../utils/error/propogation";
import { ErrorPropogationType, SuccessType } from "../../../types";
import { successNotificationTitles } from "../../../constants";
import { updateVerification } from "../../../lib/feature/user";

const VerifyOtp = () => {
	const user = useAppSelector((state) => state.user.user);
	const { data: { id = null, verified = null } = {} } = user ?? {};
	const [successful, setSuccessful] = useState(Boolean(verified));
	const [canResend, setCanResend] = useState(false);
	const [verificationRequest, { isLoading: isResendingOtp }] =
		useVerificationRequestMutation();
	const [verifyOtp, { isLoading: isVerifyingOtp }] = useVerifyOtpMutation();
	const dispatch = useAppDispatch();

	const handleOnTimedOut = () => setCanResend(true);

	const handleResend = (reset: () => void) => {
		verificationRequest({ id })
			.unwrap()
			.then(() => {
				notifySuccess(
					"A new otp has been sent",
					successNotificationTitles.verification
				);
				reset();
				setCanResend(false);
			})
			.catch((error: ErrorPropogationType) => {
				propogateError(error);
			});
	};

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

	const onSubmit: SubmitHandler<{ otp: string }> = (data) => {
		verifyOtp({ ...data, id })
			.unwrap()
			.then((response: SuccessType) => {
				const { message = "", data: { verified = null } = {} } = response ?? {};
				notifySuccess(message, successNotificationTitles.verification);
				dispatch(updateVerification(verified));
				setSuccessful(verified);
			})
			.catch((error: ErrorPropogationType) => {
				propogateError(error);
			});
	};
	return (
		<div className="flex flex-col md:flex-row  gap-[50px] items-center relative translate-y-12 md:translate-y-1/2  ]">
			<div className="">{successful ? <LockIcon /> : <LockOpenIcon />}</div>
			<AppFormContainer onSubmit={handleSubmit(onSubmit)}>
				<AppHeading className="text-2xl" type={6}>
					OTP Verification
				</AppHeading>
				<AppParagraph className="w-full text-lg md:text-xl md:w-[492px] mt-[6px] md:mt-1 leading-[25px]">
					Kindly enter the otp sent to your registered email address{" "}
					<span className="font-semibold text-black text-base md:text-lg">
						(victorayomide32@gmail.com)
					</span>
					.{" "}
					<span>
						Didn't receive an otp? You can {!canResend && "resend in "}
						<AppOtpTimer
							className="inline-block"
							min={1}
							sec={30}
							onTimedOut={handleOnTimedOut}
							onResend={handleResend}
							disableResendBtn={isResendingOtp}
						/>
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
							label={""}
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
					disabled={isVerifyingOtp}
					loading={isVerifyingOtp}
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

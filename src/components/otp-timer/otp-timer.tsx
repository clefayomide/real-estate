import { useEffect, useState } from "react";
import { OtpTimerType } from "../../types";
import { classnames } from "../../utils/classnames";

const OtpTimer = (props: OtpTimerType) => {
	const {
		min,
		sec,
		onTimedOut,
		className = "",
		resendBtnClassName = "",
		onResend,
		disableResendBtn,
	} = props;

	const [count, setCount] = useState({ minutes: min ?? 0, seconds: sec ?? 30 });
	const [timedOut, setTimedOut] = useState(false);

	const handleReset = () => {
		setCount({
			minutes: min ?? 0,
			seconds: sec ?? 30,
		});
		setTimedOut(false);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (count.seconds > 0) {
				setCount((prev) => {
					return {
						...prev,
						seconds: prev.seconds - 1,
					};
				});
			}

			if (count.seconds === 0) {
				if (count.minutes === 0) {
					clearInterval(interval);
					setTimedOut(true);
					onTimedOut && onTimedOut();
				} else {
					setCount((prev) => {
						return {
							minutes: prev.minutes - 1,
							seconds: 59,
						};
					});
				}
			}
		}, 1000);

		return () => clearInterval(interval);
	});
	return (
		<span className={classnames("text-btn_blue font-semibold", className)}>
			{!timedOut && (
				<>
					{count.minutes}:{count.seconds}
				</>
			)}
			{timedOut && (
				<button
					disabled={disableResendBtn}
					onClick={() => onResend(handleReset)}
					className={classnames(
						"h-fit w-fit bg-transparent text-btn_blue font-semibold p-0 focus:border-none focus:outline-none",
						resendBtnClassName
					)}
				>
					Resend
				</button>
			)}
		</span>
	);
};

export default OtpTimer;

import { AppButton } from "..";
import { CloseIcon, MegaPhoneIcon } from "../../assets";
import { classnames } from "../../utils/classnames";

const Verify = ({
	message,
	className = "",
}: {
	message: string | React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={classnames(
				"bg-red-400 w-full py-2 px-2 md:px-10 text-white font-medium text-sm h-50px flex justify-between gap-2 md:gap-5 items-center",
				className
			)}
		>
			<div className="flex gap-3 md:gap-5">
				<div>
					<MegaPhoneIcon />
				</div>

				<div>{message}</div>
			</div>
			<AppButton className="!bg-transparent !h-fit !w-fit text-white" isIconOnly={true}>
				<CloseIcon className="text-xl font-bold" />
			</AppButton>
		</div>
	);
};

export default Verify;

import { useNavigate } from "react-router-dom";
import { HumanIcon } from "../../../assets";
import { AppButton, AppHeading, AppParagraph } from "../../../components";
import { path } from "../../../routes/path";

const RequestOtp = () => {
	const navigate = useNavigate();

	const handleRequestOtp = () => {
		navigate(path.verifyOtp);
	};
	return (
		<section className="flex flex-col md:flex-row  gap-[50px] items-center relative translate-y-12 md:translate-y-1/2  ]">
			<div className="">
				<HumanIcon />
			</div>
			<div>
				<AppHeading className="text-2xl" type={6}>
					OTP Verification Request
				</AppHeading>
				<AppParagraph className="w-full text-lg md:text-xl md:w-[492px] mt-[6px] md:mt-1 leading-[25px]">
					To ensure the security of your account, we need to verify your
					identity. A One Time Password (OTP) will be sent to your registered
					email address. Kindly click on request OTP
				</AppParagraph>
				<AppButton
					onClick={handleRequestOtp}
					className=" w-full md:w-auto text-white mt-10 md:mt-5 rounded font-semibold"
				>
					Request OTP
				</AppButton>
			</div>
		</section>
	);
};

export default RequestOtp;

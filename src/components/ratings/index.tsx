import { CheckIcon, StarIcon } from "@/assets";
import { AppCard, AppHeading, AppParagraph } from "..";
import { classnames } from "@/utils";

interface IStarRating {
	className?: string;
}

interface ISalesRating extends IStarRating {}

export const StarRating = (props: IStarRating) => {
	const { className = "" } = props;
	return (
		<AppCard
			className={classnames(
				"w-[174px] h-[236px] rounded-none shadow-none",
				className
			)}
		>
			<div className="flex h-full items-center justify-evenly flex-col">
				<CheckIcon className="" fill="#3161d1" />
				<AppHeading type={6} className="text-[72px] font-light">
					4.8
				</AppHeading>
				<div className="flex gap-2">
					<StarIcon width="15" height="15" fill="#3161d1" />
					<StarIcon width="15" height="15" fill="#3161d1" />
					<StarIcon width="15" height="15" fill="#3161d1" />
					<StarIcon width="15" height="15" fill="#3161d1" />
					<StarIcon width="15" height="15" fill="#3161d1" />
				</div>
				<div>
					<AppParagraph>Trusted with</AppParagraph>
					<AppParagraph>500+ reviews</AppParagraph>
				</div>
			</div>
		</AppCard>
	);
};

export const SalesRating = (props: ISalesRating) => {
	const { className = "" } = props;

	return (
		<AppCard
			className={classnames("w-full rounded-none shadow-none", className)}
		>
			<div className="flex gap-5 lg:gap-0 justify-between">
				<div className="flex gap-3 w-1/2">
					<AppHeading
						className="text-[20px] lg:text-[48px] font-semibold"
						type={6}
					>
						300+
					</AppHeading>
					<AppParagraph className="text-sm ">
						Property
						<br /> Sales
					</AppParagraph>
				</div>
				<div className="flex gap-3 w-1/2">
					<AppHeading
						className="text-[20px] lg:text-[48px] font-semibold"
						type={6}
					>
						650+
					</AppHeading>
					<AppParagraph className="text-sm">
						Apartment
						<br /> Rent
					</AppParagraph>
				</div>
			</div>
		</AppCard>
	);
};

import { AppButton, AppCard, AppFormContainer, AppSelect } from "..";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useGetQuickSearchQuery } from "../../services/search";
import { quickSearchFieldType, quickSearchSelectProps } from "../../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { quickSearch as quickSearchSchema } from "../../schema/quickSearch";

export default function QuickSearch({
	isLoading,
	onSubmit,
}: {
	isLoading: boolean;
	onSubmit: SubmitHandler<quickSearchFieldType>;
}) {
	const { data } = useGetQuickSearchQuery();

	const {
		control,
		// reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(quickSearchSchema),
		defaultValues: {
			location: "",
			type: "",
			range: "",
		},
	});

	const { location, type, range } = (data as quickSearchSelectProps) ?? {};

	const hasError =
		errors.type?.message ?? errors.range?.message ?? errors.location?.message;

	return (
		<AppCard
			className={`w-full p-3 md:p-0 md:w-fit animate-appearance-in ease-linear ${
				hasError && "h-fit md:h-[100px]"
			}`}
		>
			<AppFormContainer className="w-full" onSubmit={handleSubmit(onSubmit)}>
				<div className="flex gap-5 flex-wrap md:flex-nowrap">
					<Controller
						name="location"
						control={control}
						render={({ field }) => (
							<div className="w-full md:w-fit flex flex-col relative">
								<AppSelect
									{...field}
									errorMessage={errors.location?.message as string}
									isRequired
									label="Location"
									selectItems={location}
									className="md:w-[140px] !h-[48px] inline-block"
								/>
							</div>
						)}
					/>

					<Controller
						name="type"
						control={control}
						render={({ field }) => (
							<div className="w-full md:w-fit mt-2 md:mt-0 flex flex-col relative">
								<AppSelect
									{...field}
									errorMessage={errors.type?.message as string}
									isRequired
									label="Type"
									selectItems={type}
									className="md:w-[140px] !h-[48px] inline-block"
								/>
							</div>
						)}
					/>

					<Controller
						name="range"
						control={control}
						render={({ field }) => (
							<div className="w-full md:w-fit mt-2 md:mt-0 flex flex-col relative">
								<AppSelect
									{...field}
									errorMessage={errors.range?.message as string}
									isRequired
									label="Range"
									selectItems={range}
									className="md:w-[140px] !h-[40px] inline-block"
								/>
							</div>
						)}
					/>

					<AppButton
						disabled={isLoading}
						loading={isLoading}
						type="submit"
						className={`w-full md:w-[130px] mt-4 md:mt-0 h-[48px] rounded-md text-white text-sm bg-btn_blue`}
					>
						Search
					</AppButton>
				</div>
			</AppFormContainer>
		</AppCard>
	);
}

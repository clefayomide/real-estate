"use client";
import React from "react";
import Image from "next/image";
import homeImage from "../assets/building-section.svg";
import building from "../assets/building-6.png";
import { Tab, Tabs } from "@nextui-org/react";
import {
	AppButton,
	AppCard,
	AppFormContainer,
	AppHeading,
	AppParagraph,
	AppSalesRating,
	AppSelect,
	AppStarRating,
	AppUser,
} from "@/components";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { quickSearch as quickSearchSchema } from "@/schema/quickSearch";
import {
	LoveIcon,
	StarIcon,
	SecurityIcon,
	BestPriceIcon,
	LocationIcon,
	PieIcon,
	QuoteIcon,
} from "@/assets";
import {
	useGetQuickSearchQuery,
	useQuickSearchMutation,
} from "@/services/search";

interface IFormInput {
	location: string;
	type: string;
	range: string;
}

export default function Home() {
	const { data } = useGetQuickSearchQuery();
	const [quickSearch, { isLoading }] = useQuickSearchMutation();

	const selectData = data ?? { location: [], type: [], range: [] };
	const location = selectData.location;
	const type = selectData.type;
	const range = selectData.range;

	const {
		control,
		reset,
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

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		quickSearch(data)
			.unwrap()
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleSelectionChange = () => {
		reset();
	};

	const hasError =
		errors.type?.message ?? errors.range?.message ?? errors.location?.message;

	return (
		<React.Fragment>
			<section>
				<div className="flex justify-between items-center">
					<section className="bg-light_purple xl:bg-[#ffffff] rounded-md p-5 w-full xl:w-1/2 lg:pl-[100px]">
						<AppHeading
							type={1}
							className="w-full lg:w-[750px] text-[28px] md:text-[54px] leading-[34px] md:leading-[64px]"
						>
							Your dream home is just one search away
						</AppHeading>
						<AppParagraph className="w-full mt-5 lg:w-[502px] h-[48px] ">
							Explore our range of beautiful properties with the addition of
							separate accommodation suitable for you.
						</AppParagraph>

						<Tabs
							aria-label="Options"
							color="primary"
							className="mt-20 md:mt-5"
							onSelectionChange={handleSelectionChange}
						>
							<Tab className="w-full" key="buy" title="Buy">
								<AppCard
									className={`w-full p-3 md:p-0 md:w-fit animate-appearance-in ease-linear ${
										hasError && "h-fit md:h-[100px]"
									}`}
								>
									<AppFormContainer
										className="w-full"
										onSubmit={handleSubmit(onSubmit)}
									>
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
							</Tab>
							<Tab key="rent" title="Rent">
								<AppCard
									className={`w-full p-3 md:p-0 md:w-fit animate-appearance-in ease-linear ${
										hasError && "h-fit md:h-[100px]"
									}`}
								>
									<AppFormContainer
										className="w-full"
										onSubmit={handleSubmit(onSubmit)}
									>
										<div className="flex gap-5 flex-wrap md:flex-nowrap">
											<Controller
												name="location"
												control={control}
												render={({ field }) => (
													<div className="w-full md:w-fit flex flex-col relative">
														<AppSelect
															{...field}
															isRequired
															errorMessage={errors.location?.message as string}
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
															isRequired
															errorMessage={errors.type?.message as string}
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
												type="submit"
												loading={isLoading}
												disabled={isLoading}
												className={`w-full md:w-[130px] mt-4 md:mt-0 h-[48px] rounded-md text-white text-sm bg-btn_blue`}
											>
												Search
											</AppButton>
										</div>
									</AppFormContainer>
								</AppCard>
							</Tab>
							<Tab key="sell" title="Sell">
								<AppCard
									className={`w-full p-3 md:p-0 md:w-fit animate-appearance-in ease-linear ${
										hasError && "h-fit md:h-[100px]"
									}`}
								>
									<AppFormContainer
										className="w-full"
										onSubmit={handleSubmit(onSubmit)}
									>
										<div className="flex gap-5 flex-wrap md:flex-nowrap">
											<Controller
												name="location"
												control={control}
												render={({ field }) => (
													<div className="w-full md:w-fit flex flex-col relative">
														<AppSelect
															{...field}
															isRequired
															errorMessage={errors.location?.message as string}
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
															isRequired
															errorMessage={errors.type?.message as string}
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
												type="submit"
												loading={isLoading}
												disabled={isLoading}
												className={`w-full md:w-[130px] mt-4 md:mt-0 h-[48px] rounded-md text-white text-sm bg-btn_blue`}
											>
												Search
											</AppButton>
										</div>
									</AppFormContainer>
								</AppCard>
							</Tab>
						</Tabs>
					</section>
					<section className="hidden w-1/2 xl:flex justify-end -mr-5">
						<Image src={building} alt="building" className="" />
					</section>
				</div>
			</section>

			<section className="mt-14">
				<AppHeading
					type={6}
					className="text-[28px] md:text-[30px] leading-[34px] md:leading-[64px]"
				>
					Best recommendation
				</AppHeading>
				<AppParagraph className="w-full md:w-[492px]">
					Discover our exclusive selection of the finest one-of-a-kind luxury
					properties architectural masterpieces.
				</AppParagraph>
				<div className="mt-10 flex flex-col flex-wrap md:flex-row gap-5 xl:gap-0 xl:justify-center">
					<AppCard className="w-full md:w-[48%] xl:w-[240px] 2xl:w-[300px] rounded-none shadow-none">
						<Image
							src={homeImage}
							alt="building"
							className="h-[150px] object-cover rounded-lg"
						/>
						<AppHeading
							type={6}
							className="text-[16px] mt-3 lg:mt-0 leading-[24px] "
						>
							Own a 6 bedroom duplex in the heart city of katampe
						</AppHeading>
						<AppParagraph className="text-[#A6A6A6] text-base mt-1 ">
							Looking for sparkling new home for you and your family?, jab
							luxury homes is the right place for you
						</AppParagraph>
					</AppCard>
					<AppCard className="w-full md:w-[48%] xl:w-[240px] 2xl:w-[300px] rounded-none shadow-none">
						<Image
							src={homeImage}
							alt="building"
							className="h-[150px] object-cover rounded-lg"
						/>
						<AppHeading
							type={6}
							className="text-[16px] mt-3 lg:mt-0 leading-[24px] "
						>
							Own a 6 bedroom duplex in the heart city of katampe
						</AppHeading>
						<AppParagraph className="text-[#A6A6A6] text-base mt-1 ">
							Looking for sparkling new home for you and your family?, jab
							luxury homes is the right place for you
						</AppParagraph>
					</AppCard>
					<AppCard className="w-full md:w-[48%] xl:w-[240px] 2xl:w-[300px] rounded-none shadow-none">
						<Image
							src={homeImage}
							alt="building"
							className="h-[150px] object-cover rounded-lg"
						/>
						<AppHeading
							type={6}
							className="text-[16px] mt-3 lg:mt-0 leading-[24px] "
						>
							Own a 6 bedroom duplex in the heart city of katampe
						</AppHeading>
						<AppParagraph className="text-[#A6A6A6] text-base mt-1 ">
							Looking for sparkling new home for you and your family?, jab
							luxury homes is the right place for you
						</AppParagraph>
					</AppCard>
					<AppCard className="w-full md:w-[48%] xl:w-[240px] 2xl:w-[300px] rounded-none shadow-none">
						<Image
							src={homeImage}
							alt="building"
							className="h-[150px] object-cover rounded-lg"
						/>
						<AppHeading
							type={6}
							className="text-[16px] mt-3 lg:mt-0 leading-[24px] "
						>
							Own a 6 bedroom duplex in the heart city of katampe
						</AppHeading>
						<AppParagraph className="text-[#A6A6A6] text-base mt-1 ">
							Looking for sparkling new home for you and your family?, jab
							luxury homes is the right place for you
						</AppParagraph>
					</AppCard>
					<AppCard className="w-full md:w-[48%] xl:w-[240px] 2xl:w-[300px] rounded-none shadow-none">
						<Image
							src={homeImage}
							alt="building"
							className="h-[150px] object-cover rounded-lg"
						/>
						<AppHeading
							type={6}
							className="text-[16px] mt-3 lg:mt-0 leading-[24px] "
						>
							Own a 6 bedroom duplex in the heart city of katampe
						</AppHeading>
						<AppParagraph className="text-[#A6A6A6] text-base mt-1">
							Looking for sparkling new home for you and your family?, jab
							luxury homes is the right place for you
						</AppParagraph>
					</AppCard>
				</div>
			</section>

			<section className="mt-14">
				<AppHeading
					type={6}
					className="text-[28px] md:text-[30px] leading-[34px] md:leading-[64px]"
				>
					Giving you peace of mind
				</AppHeading>
				<div className="mt-10 flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between xl:justify-center">
					<AppCard className="b shadow-none w-full md:w-[376px] h-fit md:h-[298px]">
						<LoveIcon fill="#3161d1" />
						<AppHeading type={6} className="text-[20px] leading-[64px]">
							Comfortable
						</AppHeading>
						<AppParagraph className="text-base">
							Enjoy lifestyle amenities designed to provide every homeowners
							modern comfort, a stone's throw away from schools, churches, and
							hospitals.
						</AppParagraph>
					</AppCard>
					<AppCard className="b shadow-none w-full md:w-[376px] h-fit md:h-[298px]">
						<SecurityIcon fill="#3161d1" />
						<AppHeading type={6} className="text-[20px] leading-[64px]">
							Extra security
						</AppHeading>
						<AppParagraph className="text-base">
							You can connect with potential tenants without having to share
							your phone number. We also require all users to register to
							validate their legitimacy.
						</AppParagraph>
					</AppCard>
					<AppCard className="b shadow-none w-full md:w-[376px] h-fit md:h-[298px]">
						<StarIcon fill="#3161d1" />
						<AppHeading type={6} className="text-[20px] leading-[64px]">
							Luxury
						</AppHeading>
						<AppParagraph className="text-base">
							Find out how we provide the highest standard of professional
							property management to give you all the benefits of property.
						</AppParagraph>
					</AppCard>
				</div>
				<div className="flex flex-col md:flex-row mt-8 md:mt-0 gap-8 md:gap-0 md:justify-between xl:justify-center">
					<AppCard className="b shadow-none w-full md:w-[376px] h-fit md:h-[298px]">
						<BestPriceIcon fill="#3161d1" />
						<AppHeading type={6} className="text-[20px] leading-[64px]">
							Best Price
						</AppHeading>
						<AppParagraph className="text-base">
							Not sure what you should be charging for your property? Let us do
							the numbers for you—contact us today for a free rental appraisal
							on your home.
						</AppParagraph>
					</AppCard>
					<AppCard className="b shadow-none w-full md:w-[376px] h-fit md:h-[298px]">
						<LocationIcon fill="#3161d1" />
						<AppHeading type={6} className="text-[20px] leading-[64px]">
							Strategic Location
						</AppHeading>
						<AppParagraph className="text-base">
							Located in the city center close to the shopping center. Very good
							for areas surrounded by international education centers, start-up
							office centers.
						</AppParagraph>
					</AppCard>
					<AppCard className="b shadow-none w-full md:w-[376px] h-fit md:h-[298px]">
						<PieIcon fill="#3161d1" />
						<AppHeading type={6} className="text-[20px] leading-[64px]">
							Efficient
						</AppHeading>
						<AppParagraph className="text-base">
							Schedule visits to multiple properties at once in one day without
							having to call them one by one. Check everything and find the best
							properties for rent.
						</AppParagraph>
					</AppCard>
				</div>
			</section>

			<section className="mt-32 lg:mt-14 flex flex-col md:flex-row justify-between gap-8 lg:gap-14 items-center">
				<div className="w-full md:w-1/2 flex justify-end h-[475px] bg-[url('../assets/building-section.svg')]">
					<div className="w-[85%] relative h-full flex flex-col justify-between ">
						<AppStarRating className="-mt-24 h-[250px]" />
						<AppSalesRating className="w-full pl-5" />
					</div>
				</div>
				<div className="w-full md:w-1/2">
					<AppHeading
						type={6}
						className="text-[28px] lg:text-[48px] xl:w-[527px] font-semibold leading-[34px] lg:leading-[64px]"
					>
						How much is your property worth now?
					</AppHeading>
					<AppParagraph className="w-full xl:w-[505px] mt-3">
						We have built our reputation as true local area experts. We have
						gained more knowledge about buyer interests, our neighborhood and
						the market than any other brand because we live locally and work for
						local people.
					</AppParagraph>
					<AppButton
						type="submit"
						className={`h-[58px] w-[186px] mt-8 text-white bg-btn_blue rounded-md text-sm`}
					>
						Learn More
					</AppButton>
				</div>
			</section>

			<section className="mt-14">
				<AppHeading
					type={6}
					className="text-[28px] md:text-[30px] leading-[34px] md:leading-[64px]"
				>
					What people say about us
				</AppHeading>

				<div className="mt-10 flex flex-col md:flex-row gap-8 md:gap-5 flex-wrap xl:gap-0 xl:justify-evenly">
					<AppCard className="w-full md:w-[48%] xl:w-[376px] h-auto lg:h-[350px] rounded-none p-5 group hover:bg-btn_blue hover:!text-white">
						<div className="flex flex-col gap-5">
							<QuoteIcon />
							<AppHeading
								type={6}
								className="w-full md:w-[265px] text-[18px] font-semibold"
							>
								It proved to be exactly the kind of home we wanted.
							</AppHeading>
							<AppParagraph className="group-hover:text-white">
								We wish to express our thanks for your hard work in finding us a
								temporary home, which proved to be exactly what we wanted.
							</AppParagraph>

							<AppUser
								className="self-start group-hover:!text-white"
								name="Alex Hunter"
								description={
									<div className="group-hover:!text-white">
										Karsana Properties
									</div>
								}
								avatarProps={{
									src: "https://res.cloudinary.com/clefayomide/image/upload/v1662292169/cld-sample.jpg",
								}}
							/>
						</div>
					</AppCard>
					<AppCard className="w-full md:w-[48%] xl:w-[376px]  h-auto lg:h-[350px] rounded-none p-5 group hover:bg-btn_blue hover:!text-white">
						<div className="flex flex-col gap-5">
							<QuoteIcon />
							<AppHeading
								type={6}
								className="w-full md:w-[265px] text-[18px] font-semibold"
							>
								Nobody knows Abuja better than David.
							</AppHeading>
							<AppParagraph className="group-hover:text-white">
								My wife and I had a dream of downsizing from our house in Cape
								Elizabeth into a small condo closer to where we work and play in
								Portland.
							</AppParagraph>

							<AppUser
								className="self-start group-hover:!text-white"
								name="Alex Hunter"
								description={
									<div className="group-hover:!text-white">
										Karsana Properties
									</div>
								}
								avatarProps={{
									src: "https://res.cloudinary.com/clefayomide/image/upload/v1662292169/cld-sample.jpg",
								}}
							/>
						</div>
					</AppCard>
					<AppCard className="w-full md:w-[48%] xl:w-[376px] h-auto lg:h-[350px] rounded-none p-5 group hover:bg-btn_blue hover:!text-white">
						<div className="flex flex-col gap-5">
							<QuoteIcon />
							<AppHeading
								type={6}
								className="w-full md:w-[265px] text-[18px] font-semibold"
							>
								He keeps his client’s best interests in sharp focus
							</AppHeading>
							<AppParagraph className="group-hover:text-white">
								After working with David to sell my home in 2013, I was
								convinced that he’s the only realtor I’ll ever need. Since then,
								I’ve bought two properties and sold one.
							</AppParagraph>

							<AppUser
								className="self-start group-hover:!text-white"
								name="Alex Hunter"
								description={
									<div className="group-hover:!text-white">
										Karsana Properties
									</div>
								}
								avatarProps={{
									src: "https://res.cloudinary.com/clefayomide/image/upload/v1662292169/cld-sample.jpg",
								}}
							/>
						</div>
					</AppCard>
				</div>
			</section>
		</React.Fragment>
	);
}

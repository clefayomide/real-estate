import { AppButton, AppImage, AppLink, AppLogin, AppSignup, AppUser } from "..";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import {
	toggleLoginForm,
	toggleSignupForm,
	updateScroll,
} from "../../lib/feature/user";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
	const user = useAppSelector((state) => state.user);

	const dispatch = useAppDispatch();
	const location = useLocation();

	const handleOpenLoginForm = () => {
		dispatch(toggleLoginForm(true));
	};

	const handleOpenSignupForm = () => {
		dispatch(toggleSignupForm(true));
	};

	const handleScroll = () => dispatch(updateScroll(window.scrollY));

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.addEventListener("scroll", handleScroll);
	}, []);
	return (
		<>
			<header
				className={`fixed top-0 z-50 w-full ${
					user.user?.scroll > 700
						? "bg-light_purple "
						: "bg-white mt-0 rounded-none"
				}   h-[70px]`}
			>
				<nav className="flex h-full items-center w-full justify-between px-5 py-5 md:px-10">
					<AppImage
						src={
							"https://res.cloudinary.com/clefayomide/image/upload/v1717183114/eq4lrlw028ayysuogjg0.png"
						}
						alt="Real Estate Logo"
						classNames={{
							img: "cursor-pointer w-fit md:w-[200px] h-[58px] md:h-[100px] object-cover",
						}}
					/>

					<ul className={`hidden lg:flex gap-10 items-center`}>
						<li>
							<AppLink
								showAnchorIcon={false}
								text="HOME"
								className={`text-black ${
									location.pathname === "/" ? "font-bold" : "font-medium"
								} transition-all text-sm  hover:!text-btn_blue cursor-pointer`}
								size="sm"
							/>
						</li>
						<li>
							<AppLink
								text="SERVICES"
								className="text-black text-sm font-medium hover:!text-btn_blue cursor-pointer"
								size="sm"
							/>
						</li>
						<li>
							<AppLink
								text="PROPERTY"
								className="text-black text-sm font-medium hover:!text-btn_blue cursor-pointer"
								size="sm"
							/>
						</li>
					</ul>
					<div className="hidden lg:flex gap-5">
						{user.user?.isAuthenticated ? (
							<div>
								<AppUser
									name="Alex Hunter"
									description="Product Designer"
									avatarProps={{
										src: "https://res.cloudinary.com/clefayomide/image/upload/v1662292169/cld-sample.jpg",
									}}
								/>
							</div>
						) : (
							<>
								<AppButton
									onClick={handleOpenLoginForm}
									className={` rounded-none bg-none text-black bg-inherit text-sm`}
								>
									Login
								</AppButton>
								<AppButton
									onClick={handleOpenSignupForm}
									className={` rounded-md text-white text-sm bg-btn_blue`}
								>
									Sign up
								</AppButton>
							</>
						)}
					</div>
				</nav>
			</header>
			<AppLogin />
			<AppSignup />
		</>
	);
};

export default Header;

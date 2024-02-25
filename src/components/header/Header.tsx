import React from "react";
import { AppButton, AppLink } from "..";
import { Montserrat, Poppins } from "next/font/google";
import Image from "next/image";
import logo from "../../assets/logo.svg";

const montserrat = Montserrat({ subsets: ["cyrillic"], weight: "500" });
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const Header = () => {
	return (
		<header className="fixed top-0 z-50 w-full bg-white  h-[90px]">
			<nav className="flex h-full items-center w-full justify-between px-5 py-5 md:px-10">
				<Image
					width={115}
					height={40}
					src={logo}
					alt="Real Estate Logo"
					className="cursor-pointer"
				/>

				<ul className={`hidden md:flex gap-10 items-center`}>
					<li>
						<AppLink
							text="HOME"
							className="text-black transition-all text-sm font-medium hover:!text-btn_blue cursor-pointer"
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
				<div className="hidden md:flex gap-5">
					<AppButton
						className={` rounded-none bg-none text-black bg-inherit text-sm`}
					>
						Login
					</AppButton>
					<AppButton className={` rounded-md text-white text-sm bg-btn_blue`}>
						Sign up
					</AppButton>
				</div>
			</nav>
		</header>
	);
};

export default Header;

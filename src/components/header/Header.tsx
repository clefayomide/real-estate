"use client";

import React, { useState } from "react";
import { AppButton, AppLink, AppLogin, AppSignup } from "..";
import Image from "next/image";
import logo from "../../assets/logo.svg";

const Header = () => {
	const [openLoginForm, setOpenLoginForm] = useState(false);
	const [openSignupForm, setOpenSignupForm] = useState(false);

	const handleOpenLoginForm = () => {
		setOpenLoginForm(true);
	};

	const handleOpenSignupForm = () => {
		setOpenSignupForm(true);
	};

	return (
		<>
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
					</div>
				</nav>
			</header>
			<AppLogin open={openLoginForm} setOpen={setOpenLoginForm} />
			<AppSignup open={openSignupForm} setOpen={setOpenSignupForm} />
		</>
	);
};

export default Header;

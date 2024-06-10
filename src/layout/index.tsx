import React from "react";
import { AppHeader, AppVerificationBanner } from "../components";
import { ReactNotifications } from "react-notifications-component";
import { Link } from "react-router-dom";
import { useAppSelector } from "../lib/hooks";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	const user = useAppSelector((state) => state.user.user);
	return (
		<div className="font-montserrat relative">
			<AppHeader />
			{user.isAuthenticated && !user.data.verified && (
				<AppVerificationBanner
					className="fixed px-2 md:px-10 z-50 !text-[10px] md:!text-sm "
					message={
						<p>
							Verify your{" "}
							<span className="underline font-bold text-primary">
								<Link to="/">account</Link>
							</span>{" "}
							to enjoy better access & services
						</p>
					}
				/>
			)}

			<main className="w-full flex items-center flex-col p-5 md:p-10 mt-[70px]">
				<ReactNotifications className="notification-container" />

				<div className="xl:max-w-[1500px]">{children}</div>
			</main>
		</div>
	);
};

export default AppLayout;

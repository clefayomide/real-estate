import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { AppHeader } from "../components";
import localFont from "next/font/local";
import StoreProvider from "./storeProvider";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

const Euclid = localFont({
	src: [
		{
			path: "./font/euclid.ttf",
			weight: "400",
		},

		{ path: "./font/EuclidCircularRegular.ttf" },
	],

	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// bg-[#F5F5F5]
		<html lang="en">
			<body className={`${Euclid.className}`}>
				<StoreProvider>
					<Providers>
						<AppHeader />
						<main className="p-5 md:p-10 mt-[90px]">
							{children}
						</main>
					</Providers>
				</StoreProvider>
			</body>
		</html>
	);
}
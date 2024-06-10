import AppLayout from "../layout";
import { AppHome } from "../views/shared";
import { path } from "./path";

export const routes = [
	{ path: path.home, protected: false, component: AppHome, layout: AppLayout },
];

import { Store } from "react-notifications-component";

export const notifySuccess = (message: string, title?: string) =>
	Store.addNotification({
		title: title ?? "",
		message: message,

		type: "success",
		container: "top-right",
		animationIn: ["animate__animated", "animate__fadeIn"],
		animationOut: ["animate__animated", "animate__fadeOut"],
		dismiss: {
			duration: 5000,
			onScreen: true,
			pauseOnHover: true,
		},
	});

export const notifyError = (message: string, title?: string) =>
	Store.addNotification({
		title: title ?? "",
		message: message,

		type: "danger",
		container: "top-right",
		animationIn: ["animate__animated", "animate__fadeIn"],
		animationOut: ["animate__animated", "animate__fadeOut"],
		dismiss: {
			duration: 5000,
			onScreen: true,
			pauseOnHover: true,
		},
	});

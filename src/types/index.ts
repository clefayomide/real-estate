interface RequestResponseI {
	status: boolean;
	code: number;
	message: string;
}

export interface ErrorType extends RequestResponseI {
	error?: string[];
}

export interface SuccessType extends RequestResponseI {
	data?: Record<string, unknown>;
}

export interface IUSER {
	data: {
		id: number;
		verified: boolean;
		createdAt: string;
		updatedAt: string;
		username: string;
		email: string;
		token: string;
		expires: string;
		tokenType: string;
	} | null;
	isAuthenticated: boolean;
	showLoginForm: boolean;
	showSignupForm: boolean;
	scroll: number;
}

export type OtpTimerType = {
	min: number;
	sec: number;
	onTimedOut?: () => void;
	onResend: (callback: () => void) => void;
	className?: string;
	resendBtnClassName?: string;
	disableResendBtn: boolean;
};

export type ErrorPropogationType = {
	data: ErrorType;
};

type quickSearchSelectItemProps = {
	value: string;
	label: string;
	description: string;
};
export type quickSearchSelectProps = {
	location: Array<quickSearchSelectItemProps>;
	type: Array<quickSearchSelectItemProps>;
	range: Array<quickSearchSelectItemProps>;
};

export type quickSearchFieldType = {
	location: string;
	type: string;
	range: string;
};

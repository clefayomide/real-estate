interface RequestResponseI {
	status: boolean;
	code: number;
	message: string;
}

export interface ErrorType extends RequestResponseI {
	error?: String[];
}

export interface SuccessType extends RequestResponseI {
	data?: any;
}

export interface IUSER {
	[key: string]: any;
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

// export type SuccessPropogationType = {
// 	data: SuccessType;
// };

export type userDetails = {
	[key: string]: any;
};

type IQUICKSEARCHSELECTITEM = {
	value: string;
	label: string;
	description: string;
};
export type IQUICKSEARCHSELECT = {
	location: Array<IQUICKSEARCHSELECTITEM>;
	type: Array<IQUICKSEARCHSELECTITEM>;
	range: Array<IQUICKSEARCHSELECTITEM>;
};

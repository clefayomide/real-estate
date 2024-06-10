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

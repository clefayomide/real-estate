export type userDetails = {
	[key: string]: any;
};
export interface IUSER {
	data: userDetails;
	isAuthenticated: boolean;
}

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

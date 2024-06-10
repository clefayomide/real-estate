export type userDetails = {
	[key: string]: any;
};
export interface IUSER {
	[key: string]: any;
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

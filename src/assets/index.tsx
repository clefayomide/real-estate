import { classnames } from "../utils/classnames";

interface ISVG {
	className?: string;
	width?: string;
	height?: string;
	fill?: string;
	hasError?: boolean;
}
export const HomeIcon = (props: ISVG) => {
	const { className = "", height = "16", width = "16", ...rest } = props;
	return (
		<svg
			{...rest}
			xmlns="http://www.w3.org/2000/svg"
			width={`${width}px`}
			height={`${height}px`}
			fill="currentColor"
			className={classnames("bi bi-house", className)}
			viewBox="0 0 16 16"
		>
			<path
				fillRule="evenodd"
				d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
			/>
			<path
				fillRule="evenodd"
				d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
			/>
		</svg>
	);
};

export const LoveIcon = (props: ISVG) => {
	const {
		className = "",
		height = "44",
		width = "46",
		fill = "#69B99D",
		...rest
	} = props;

	return (
		<svg
			{...rest}
			width={`${width}px`}
			height={`${height}px`}
			viewBox="0 0 46 44"
			fill="none"
			className={classnames("", className)}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M31.662 0.62658C33.0818 0.62658 34.4993 0.82683 35.847 1.27908C44.1518 3.97908 47.1443 13.0916 44.6445 21.0566C43.227 25.1268 40.9095 28.8416 37.8743 31.8768C33.5295 36.0843 28.7618 39.8194 23.6295 43.0368L23.067 43.3766L22.482 43.0144C17.3318 39.8194 12.537 36.0844 8.1518 31.8543C5.1368 28.8191 2.81705 25.1268 1.37705 21.0566C-1.16545 13.0916 1.82705 3.97908 10.2218 1.23183C10.8743 1.00683 11.547 0.84933 12.222 0.76158H12.492C13.1243 0.66933 13.752 0.62658 14.382 0.62658H14.6295C16.047 0.66933 17.4195 0.91683 18.7493 1.36908H18.882C18.972 1.41183 19.0395 1.45908 19.0845 1.50183C19.5818 1.66158 20.052 1.84158 20.502 2.08908L21.357 2.47158C21.5636 2.58177 21.7955 2.75013 21.996 2.89564C22.1229 2.98783 22.2373 3.07085 22.3245 3.12408C22.3613 3.14574 22.3986 3.16753 22.4362 3.18949C22.6291 3.30211 22.8301 3.41942 22.9995 3.54933C25.4993 1.63908 28.5345 0.60408 31.662 0.62658ZM37.6471 16.8266C38.5696 16.8018 39.357 16.0616 39.4245 15.1143V14.8466C39.492 11.6943 37.5818 8.83908 34.6771 7.73659C33.7546 7.41933 32.7421 7.91658 32.4046 8.86158C32.0896 9.80658 32.5846 10.8416 33.5296 11.1768C34.9718 11.7168 35.9371 13.1366 35.9371 14.7093V14.7791C35.8943 15.2943 36.0496 15.7916 36.3646 16.1741C36.6796 16.5566 37.1521 16.7793 37.6471 16.8266Z"
				fill={fill}
			/>
		</svg>
	);
};

export const SecurityIcon = (props: ISVG) => {
	const {
		className = "",
		height = "46",
		width = "40",
		fill = "#69B99D",
		...rest
	} = props;
	return (
		<svg
			{...rest}
			width={`${width}px`}
			height={`${height}px`}
			viewBox="0 0 40 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={classnames("", className)}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.3882 45.3057C19.6374 45.4359 19.916 45.5021 20.1946 45.4999C20.4732 45.4977 20.7496 45.4293 21.001 45.2969L29.0288 41.0055C31.3052 39.792 33.0879 38.4351 34.4787 36.8554C37.5027 33.4135 39.154 29.0206 39.1246 24.4909L39.0294 9.54946C39.0204 7.8285 37.8901 6.29287 36.2184 5.73466L21.2842 0.724019C20.3849 0.419542 19.3996 0.426161 18.5161 0.739464L3.63857 5.92882C1.97595 6.5091 0.866019 8.05575 0.875079 9.77892L0.970216 24.7094C0.999663 29.2456 2.70759 33.6186 5.78142 37.0253C7.18582 38.583 8.98435 39.92 11.2858 41.1137L19.3882 45.3057ZM17.263 27.7451C17.5983 28.0672 18.0332 28.2261 18.4681 28.2217C18.903 28.2195 19.3356 28.0562 19.6664 27.7297L28.4393 19.0807C29.0985 18.4298 29.0917 17.384 28.4257 16.742C27.7575 16.0999 26.6816 16.1043 26.0224 16.7552L18.4432 24.226L15.3399 21.243C14.6717 20.6009 13.598 20.6075 12.9366 21.2584C12.2774 21.9093 12.2842 22.9551 12.9524 23.5971L17.263 27.7451Z"
				fill={fill}
			/>
		</svg>
	);
};

export const StarIcon = (props: ISVG) => {
	const {
		className = "",
		height = "44",
		width = "46",
		fill = "#69B99D",
		...rest
	} = props;
	return (
		<svg
			{...rest}
			width={`${width}px`}
			height={`${height}px`}
			viewBox="0 0 46 44"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={classnames("", className)}
		>
			<path
				d="M36.3166 27.2202C35.7339 27.785 35.4661 28.6017 35.5989 29.4027L37.5991 40.4727C37.7679 41.411 37.3719 42.3605 36.5866 42.9027C35.8171 43.4652 34.7934 43.5327 33.9541 43.0827L23.9889 37.8852C23.6424 37.7007 23.2576 37.6017 22.8639 37.5905H22.2541C22.0426 37.622 21.8356 37.6895 21.6466 37.793L11.6791 43.0152C11.1864 43.2627 10.6284 43.3505 10.0816 43.2627C8.74962 43.0107 7.86086 41.7417 8.07911 40.403L10.0816 29.333C10.2144 28.5252 9.94661 27.704 9.36386 27.1302L1.23912 19.2552C0.559616 18.596 0.323366 17.606 0.633866 16.7127C0.935366 15.8217 1.70487 15.1715 2.63412 15.0252L13.8166 13.403C14.6671 13.3152 15.4141 12.7977 15.7966 12.0327L20.7241 1.93024C20.8411 1.70524 20.9919 1.49824 21.1741 1.32274L21.3766 1.16524C21.4824 1.04824 21.6039 0.951494 21.7389 0.872744L21.9841 0.782744L22.3666 0.625244H23.3139C24.1599 0.712994 24.9046 1.21924 25.2939 1.97524L30.2866 12.0327C30.6466 12.7685 31.3464 13.2792 32.1541 13.403L43.3366 15.0252C44.2816 15.1602 45.0714 15.8127 45.3841 16.7127C45.6789 17.615 45.4246 18.605 44.7316 19.2552L36.3166 27.2202Z"
				fill={fill}
			/>
		</svg>
	);
};

export const BestPriceIcon = (props: ISVG) => {
	const {
		className = "",
		height = "42",
		width = "46",
		fill = "#69B99D",
		...rest
	} = props;
	return (
		<svg
			{...rest}
			width={`${width}px`}
			height={`${height}px`}
			viewBox="0 0 46 42"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={classnames("", className)}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M40.4622 21.0022C40.4622 22.8326 41.9653 24.3219 43.8125 24.3219C44.744 24.3219 45.5 25.071 45.5 25.9939V32.0157C45.5 37.1077 41.3195 41.25 36.1805 41.25H9.82175C4.68275 41.25 0.5 37.1077 0.5 32.0157V25.9939C0.5 25.071 1.256 24.3219 2.1875 24.3219C4.037 24.3219 5.54 22.8326 5.54 21.0022C5.54 19.2187 4.09775 17.8766 2.1875 17.8766C1.73975 17.8766 1.31225 17.7004 0.995 17.3861C0.67775 17.0717 0.5 16.6459 0.5 16.2045L0.5045 9.98657C0.5045 4.89453 4.685 0.75 9.824 0.75H36.176C41.315 0.75 45.4977 4.89453 45.4977 9.98657L45.5 16.0105C45.5 16.4519 45.3223 16.88 45.0073 17.1921C44.69 17.5065 44.2625 17.6826 43.8125 17.6826C41.9653 17.6826 40.4622 19.1719 40.4622 21.0022ZM28.0669 22.4582L30.7197 19.8988C31.1809 19.4573 31.3407 18.8063 31.1404 18.2044C30.9424 17.6024 30.4249 17.1744 29.7994 17.0874L26.1342 16.5568L24.4939 13.2662C24.2127 12.6999 23.6412 12.3477 23.0044 12.3454H22.9999C22.3654 12.3454 21.7939 12.6977 21.5082 13.264L19.8679 16.5568L16.2094 17.0852C15.5772 17.1744 15.0597 17.6024 14.8594 18.2044C14.6614 18.8063 14.8212 19.4573 15.2802 19.8988L17.9329 22.4582L17.3074 26.0765C17.1994 26.7008 17.4537 27.3206 17.9712 27.6929C18.2637 27.9002 18.6034 28.0072 18.9477 28.0072C19.2109 28.0072 19.4764 27.9426 19.7194 27.8155L22.9999 26.1078L26.2737 27.811C26.8407 28.112 27.5134 28.0652 28.0287 27.6907C28.5484 27.3206 28.8027 26.7008 28.6947 26.0765L28.0669 22.4582Z"
				fill={fill}
			/>
		</svg>
	);
};

export const LocationIcon = (props: ISVG) => {
	const {
		className = "",
		height = "46",
		width = "40",
		fill = "#69B99D",
		...rest
	} = props;
	return (
		<svg
			{...rest}
			width={`${width}px`}
			height={`${height}px`}
			viewBox="0 0 40 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={classnames("", className)}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0.875 19.215C0.875 8.86526 9.52373 0.5 19.9853 0.5C30.4763 0.5 39.125 8.86526 39.125 19.215C39.125 24.4303 37.2283 29.2722 34.1064 33.376C30.6623 37.9029 26.4174 41.847 21.6392 44.943C20.5457 45.6584 19.5587 45.7124 18.3585 44.943C13.5532 41.847 9.3082 37.9029 5.89362 33.376C2.76946 29.2722 0.875 24.4303 0.875 19.215ZM13.687 19.7977C13.687 23.2649 16.5162 25.9918 19.9852 25.9918C23.4565 25.9918 26.313 23.2649 26.313 19.7977C26.313 16.3576 23.4565 13.4979 19.9852 13.4979C16.5162 13.4979 13.687 16.3576 13.687 19.7977Z"
				fill={fill}
			/>
		</svg>
	);
};

export const PieIcon = (props: ISVG) => {
	const {
		className = "",
		height = "46",
		width = "46",
		fill = "#69B99D",
		...rest
	} = props;
	return (
		<svg
			{...rest}
			width={`${width}px`}
			height={`${height}px`}
			viewBox="0 0 46 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={classnames("", className)}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M23.7343 0.971741C24.0936 0.649225 24.5689 0.48017 25.0554 0.501856C35.3398 0.809723 43.9348 8.27555 45.4926 18.2539C45.5024 18.3135 45.5024 18.3743 45.4926 18.4338C45.5261 18.906 45.3665 19.3718 45.0491 19.7282C44.7318 20.0846 44.2827 20.3022 43.8013 20.333L26.5225 21.4725C25.9511 21.5231 25.3844 21.3351 24.9616 20.9546C24.5389 20.574 24.2992 20.0363 24.3015 19.4734L23.1401 2.50096V2.22109C23.1612 1.74375 23.375 1.29426 23.7343 0.971741ZM22.5492 25.9106L37.5256 24.951L37.6275 24.991C38.2706 25.0015 38.8831 25.2623 39.3302 25.7159C39.7773 26.1696 40.0223 26.7789 40.0114 27.4099C39.4213 36.0096 33.1164 43.195 24.5362 45.0461C15.9561 46.8972 7.16039 42.9698 2.94751 35.4063C1.70874 33.2279 0.925931 30.8287 0.645021 28.3495C0.536071 27.6148 0.488368 26.8727 0.502389 26.1305C0.530785 16.986 7.04137 9.09297 16.1512 7.15895C17.254 6.95253 18.3596 7.50315 18.8408 8.49835C18.9606 8.67894 19.0564 8.87375 19.126 9.07809C19.2968 11.7141 19.474 14.3252 19.6503 16.9253C19.7896 18.9787 19.9285 21.0253 20.0633 23.0718C20.0564 23.5539 20.1322 24.0338 20.2875 24.4912C20.6531 25.3912 21.5631 25.9623 22.5492 25.9106Z"
				fill={fill}
			/>
		</svg>
	);
};

export const CheckIcon = (props: ISVG) => {
	const {
		className = "",
		height = "28",
		width = "28",
		fill = "#69B99D",
		...rest
	} = props;
	return (
		<svg
			{...rest}
			width={`${width}px`}
			height={`${height}px`}
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={classnames("", className)}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.22675 0.666504H19.7867C24.3067 0.666504 27.3334 3.83984 27.3334 8.55984V19.4545C27.3334 24.1598 24.3067 27.3332 19.7867 27.3332H8.22675C3.70675 27.3332 0.666748 24.1598 0.666748 19.4545V8.55984C0.666748 3.83984 3.70675 0.666504 8.22675 0.666504ZM13.2401 17.9865L19.5734 11.6532C20.0268 11.1998 20.0268 10.4665 19.5734 9.99984C19.1201 9.5465 18.3734 9.5465 17.9201 9.99984L12.4134 15.5065L10.0801 13.1732C9.62675 12.7198 8.88008 12.7198 8.42675 13.1732C7.97342 13.6265 7.97342 14.3598 8.42675 14.8265L11.6001 17.9865C11.8268 18.2132 12.1201 18.3198 12.4134 18.3198C12.7201 18.3198 13.0134 18.2132 13.2401 17.9865Z"
				fill={fill}
			/>
		</svg>
	);
};

export const QuoteIcon = (props: ISVG) => {
	const {
		className = "",
		height = "34",
		width = "42",
		fill = "#F5F5F5",
		...rest
	} = props;
	return (
		<svg
			{...rest}
			width={`${width}px`}
			height={`${height}px`}
			viewBox="0 0 42 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={classnames("", className)}
		>
			<path
				d="M0 34V22.625C0 18.375 0.752239 14.4583 2.25672 10.875C3.76119 7.29167 6.31045 3.66667 9.90448 0L16.4239 5.125C14.3343 7.20834 12.7463 9.16667 11.6597 11C10.5731 12.8333 9.86269 14.7083 9.52836 16.625H17.5522V34H0ZM24.4478 34V22.625C24.4478 18.375 25.2 14.4583 26.7045 10.875C28.209 7.29167 30.7582 3.66667 34.3522 0L40.8716 5.125C38.7821 7.20834 37.194 9.16667 36.1075 11C35.0209 12.8333 34.3104 14.7083 33.9761 16.625H42V34H24.4478Z"
				fill="#F5F5F5"
			/>
		</svg>
	);
};

export const EmailIcon = (props: ISVG) => {
	const {
		className = "",
		height = "16",
		width = "16",
		fill = "#3161d1",
		hasError = false,
		...rest
	} = props;
	return (
		<svg
			{...rest}
			xmlns="http://www.w3.org/2000/svg"
			width={`${width}px`}
			height={`${height}px`}
			fill={hasError ? "#F6578E" : fill}
			className={classnames("bi bi-envelope", className)}
			viewBox="0 0 16 16"
		>
			<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
		</svg>
	);
};

export const PadlockIcon = (props: ISVG) => {
	const {
		className = "",
		height = "16",
		width = "16",
		fill = "#F5F5F5",
		...rest
	} = props;
	return (
		<svg
			{...rest}
			xmlns="http://www.w3.org/2000/svg"
			width={`${width}px`}
			height={`${height}px`}
			fill={fill}
			className={classnames("bi bi-key", className)}
			viewBox="0 0 16 16"
		>
			<path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
			<path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
		</svg>
	);
};

export const EyeIcon = (props: ISVG) => {
	const {
		className = "",
		height = "16",
		width = "16",
		fill = "#3161d1",
		hasError = false,
		...rest
	} = props;
	return (
		<svg
			{...rest}
			xmlns="http://www.w3.org/2000/svg"
			width={`${width}px`}
			height={`${height}px`}
			fill={hasError ? "#F6578E" : fill}
			className={classnames("bi bi-eye", className)}
			viewBox="0 0 16 16"
		>
			<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
			<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
		</svg>
	);
};

export const EyeSlashIcon = (props: ISVG) => {
	const {
		className = "",
		height = "16",
		width = "16",
		fill = "#3161d1",
		hasError = false,
		...rest
	} = props;
	return (
		<svg
			{...rest}
			xmlns="http://www.w3.org/2000/svg"
			width={`${width}px`}
			height={`${height}px`}
			fill={hasError ? "#F6578E" : fill}
			className={classnames("bi bi-eye-slash", className)}
			viewBox="0 0 16 16"
		>
			<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
			<path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
			<path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z" />
		</svg>
	);
};

export const MegaPhoneIcon = ({ className = "" }: { className?: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			className={classnames("bi bi-megaphone-fill", className)}
			viewBox="0 0 16 16"
		>
			<path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
		</svg>
	);
};

export const CloseIcon = ({ className = "" }: { className?: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			className={classnames("bi bi-x", className)}
			viewBox="0 0 16 16"
		>
			<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
		</svg>
	);
};

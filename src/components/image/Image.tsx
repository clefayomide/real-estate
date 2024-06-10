import { Image as NextUIImage } from "@nextui-org/react";
import { classnames } from "../../utils/classnames";
type imagePropType = "img" | "wrapper" | "zoomedWrapper" | "blurredImg";

const Image = ({
	src,
	alt,
	classNames,
	width,
}: {
	width?: string;
	src: string;
	alt: string;
	classNames?: Partial<Record<imagePropType, string>>;
}) => {
	const {
		img = "",
		wrapper = "",
		zoomedWrapper = "",
		blurredImg = "",
	} = classNames ?? {};
	return (
		<NextUIImage
			loading="lazy"
			width={width}
			classNames={{
				img: classnames("", img),
				wrapper: classnames("", wrapper),
				zoomedWrapper: classnames("", zoomedWrapper),
				blurredImg: classnames("", blurredImg),
			}}
			alt={alt}
			src={src}
		/>
	);
};

export default Image;

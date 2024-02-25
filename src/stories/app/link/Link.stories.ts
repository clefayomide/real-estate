import type { Meta, StoryObj } from "@storybook/react";

import { AppLink } from "../../../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Landing-Page/Link",
	component: AppLink,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		text: { description: "Link text" },
		showAnchorIcon: { control: "boolean", description: "Suffix icon" },
		isBlock: {
			control: "boolean",
			description:
				"Whether the link should be rendered as block with a hover effect.",
		},
        className: {description: "Tailwind CSS utility classes"},
        href: {description: "Link URL"}
	},
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		text: "Home",
		showAnchorIcon: false,
		isBlock: false,
		className: "",
		href: "",
	},
};

import type { Meta, StoryObj } from "@storybook/react";

import { AppButton } from "../../../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Landing-Page/Button",
	component: AppButton,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		color: { description: "The button color theme", defaultValue: "default" },
		className: { description: "Tailwind CSS utility classes" },
	},
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		primary: true,
		children: "Button",
	},
};

export const Secondary: Story = {
	args: {
		children: "Button",
	},
};

export const Large: Story = {
	args: {
		size: "large",
		children: "Button",
	},
};

export const Small: Story = {
	args: {
		size: "small",
		children: "Button",
	},
};

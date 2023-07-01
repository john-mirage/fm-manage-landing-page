import type { Meta, StoryObj } from "storybook-solidjs";

import IconButton from "./Icon-button";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const HamburgerButton: Story = {
  args: {
    icon: "hamburger",
  },
};

export const CloseButton: Story = {
  args: {
    icon: "close",
  },
};

export const FacebookButton: Story = {
  args: {
    icon: "facebook",
  },
};

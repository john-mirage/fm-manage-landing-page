import type { Meta, StoryObj } from "storybook-solidjs";

import Logo from "./Logo";

const meta: Meta<typeof Logo> = {
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const OnLight: Story = {
  args: {
    onDark: false,
  },
};

export const OnDark: Story = {
  args: {
    onDark: true,
  },
};

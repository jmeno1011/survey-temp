import { bannerUrl } from "@/lib/const/common";
import { Meta, StoryObj } from "@storybook/react";
import Banner from "./Banner";

const meta: Meta<typeof Banner> = {
  title: "Common/Banner",
  component: Banner,
  render: () => <Banner srcUrl={bannerUrl} />,
};
export default meta;

type Story = StoryObj<typeof Banner>;
export const Default: Story = {};

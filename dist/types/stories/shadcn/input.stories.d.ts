import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "src";
declare const meta: Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof Input>;
export declare const Text: Story;
export declare const Number: Story;
export declare const File: Story;
export declare const Default: StoryObj<typeof Input>;

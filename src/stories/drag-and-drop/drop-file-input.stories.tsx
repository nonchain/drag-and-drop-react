import { Meta, StoryObj } from "@storybook/react";
import DropFileInput from "../../components/drag-and-drop/drop-file-input.component";

const meta: Meta<typeof DropFileInput> = {
  title: "DropFileInput",
  component: DropFileInput,
}
export default meta;

type Story = StoryObj<typeof DropFileInput>;

export const FileInput: Story = {
  args: {
    onChange: () => console.log("Uploaded")
  }
}
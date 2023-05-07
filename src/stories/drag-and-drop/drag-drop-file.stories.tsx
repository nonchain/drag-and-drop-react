import { Meta, StoryObj } from "@storybook/react";
import DragDropFile from "../../components/drag-and-drop/drag-drop-file";

const meta: Meta<typeof DragDropFile> = {
  title: "DragDropFile",
  component: DragDropFile
}
export default meta;

type Story = StoryObj<typeof DragDropFile>;

export const DragDrop: Story = {
  args: {
    
  }
}
import { Meta, StoryObj } from "@storybook/react";
import FileItem from "../../components/file/file-item.component";

const meta: Meta<typeof FileItem> = {
  title: "FileItem",
  component: FileItem
}
export default meta;

type Story = StoryObj<typeof FileItem>;

export const PngFile: Story = {
  args: {
    file: {
      name: "Image",
      type: "image/png",
      size: "2400"
    },
    base64: ""
  }
}

export const PdfFile: Story = {
  args: {
    file: {
      name: "Report",
      type: "application/pdf",
      size: "32480"
    },
    base64: ""
  }
}

export const TxtFile: Story = {
  args: {
    file: {
      name: "Text",
      type: "text/plain",
      size: "1024"
    },
    base64: ""
  }
}
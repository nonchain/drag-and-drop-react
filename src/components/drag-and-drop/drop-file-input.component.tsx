// Libraries
import { useState } from "react";
import { toast } from "react-hot-toast";
// Components
import { Image, Input, Stack, Text } from "@chakra-ui/react";
// Files
import uploadImage from "../../assets/images/cloud-upload-regular-240.png";
// TS configs
import { Props } from "../../models/drop-file-input/props";

function DropFileInput({ onChange }: Props) {
  const [dragIn, setDragIn] = useState<boolean>(false);

  const onFileSelect = (event: React.FormEvent) => {
    setDragIn(false);
    const newFile = event.target.files[0];

    if (!newFile) return toast.error("No file selected");
    if (
      newFile.type === "image/png" ||
      newFile.type === "application/pdf" ||
      newFile.type === "text/plain"
    ) {
      onChange(newFile);
      toast.success("File uploaded successfully")
    } else {
      return toast.error("Unsupported format")
    }
  };

  return (
    <Stack
      onDragEnter={() => setDragIn(true)}
      onDragLeave={() => setDragIn(false)}
      sx={{
        padding: "1rem 1.25rem",
        bgColor: dragIn ? "#D9D8DA" : "#EAFAFF",
        border: dragIn ? "1px solid #1f1f1f" : "1px dashed #1f1f1f",
        borderRadius: "0.5rem",
        position: "relative",
        transition: "0.3s ease-in-out",
      }}
    >
      <Stack alignItems="center">
        <Image src={uploadImage} alt="Upload" width="3rem" />
        <Text color="#989a9a" fontSize="small" fontWeight="400">
          Drag & Drops your files here
        </Text>
      </Stack>

      <Input
        type="file"
        name="file"
        value=""
        onChange={onFileSelect}
        accept="image/png, application/pdf, text/plain"
        sx={{
          width: "100%",
          height: "100%",
          cursor: "pointer",
          position: "absolute",
          top: "0",
          left: "0",
          opacity: "0",
        }}
      />
    </Stack>
  );
}

export default DropFileInput;

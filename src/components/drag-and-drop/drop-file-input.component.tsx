import { Image, Input, Stack, Text } from "@chakra-ui/react";
// Files
import uploadImage from "../../assets/images/cloud-upload-regular-240.png";

function DropFileInput() {
  return (
    <Stack
      sx={{
        padding: "1rem 1.25rem",
        bgColor: "#EAFAFF",
        border: "1px dashed #1f1f1f",
        borderRadius: "0.5rem",
        position: "relative"
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

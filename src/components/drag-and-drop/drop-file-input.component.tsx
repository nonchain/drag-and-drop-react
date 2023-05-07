// Libraries
import { useState } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuid } from 'uuid';
// Components
import { Box, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
// TS configs
import { FileInputProps } from "../../models/types";

function DropFileInput({ onChange }: FileInputProps) {
  const [dragIn, setDragIn] = useState<boolean>(false);

  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDragIn(false);
    const newFile = event?.target?.files?.[0];
    const unique_id = uuid();

    if (!newFile) return toast.error("No file selected");
    if (
      newFile.type.includes("image/") ||
      newFile.type === "application/pdf" ||
      newFile.type === "text/plain"
    ) {
      onChange({
        id: unique_id.toString(),
        name: newFile?.name,
        type: newFile?.type,
        size: newFile?.size.toString(),
        file: newFile,
      });
      toast.success("File uploaded successfully");
    } else {
      return toast.error("Unsupported format");
    }
  };

  return (
    <Box
      onDragEnter={() => setDragIn(true)}
      onDragLeave={() => setDragIn(false)}
      sx={{
        padding: "1rem 1.25rem",
        bgColor: dragIn ? "#EAEAEA" : "#FAFFFF",
        border: dragIn ? "2px solid #898989" : "2px dashed #BAB7B7",
        borderRadius: "0.25rem",
        position: "relative",
        transition: "0.22s ease-in-out",
      }}
    >
      <FormControl>
        <Text color="#989a9a" fontSize="1rem" fontWeight="400" textAlign="center">
          Drag file here to upload or
        </Text>
        <FormLabel
          sx={{
            padding: "0.25rem 1.75rem",
            margin: "1rem auto 0",
            maxWidth: "max-content",
            border: "2px solid #ABAAA8",
            borderRadius: "0.25rem",
            color: "#575658",
            fontSize: "0.812rem",
            fontWeight: "500",
          }}
        >
          Choose file
        </FormLabel>
        <Input
          type="file"
          name="file"
          value=""
          onChange={onFileSelect}
          accept="image/png, image/jpg, image/jpeg, application/pdf, text/plain"
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
      </FormControl>
    </Box>
  );
}

export default DropFileInput;

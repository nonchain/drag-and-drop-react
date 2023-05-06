// Libraries
import { useState } from "react";
// Components
import { Card, CardHeader, CardBody, Heading, Stack } from "@chakra-ui/react";
import DropFileInput from "./drop-file-input.component";

function DragDropFile() {
  const [draggedFile, setDraggedFile] = useState<object>({
    file: null,
    base64: "",
  });

  const toBase64 = (file: object) =>
  new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const onFileChangedHandler = async (file: object) => {
    const base64Converted = await toBase64(file);
    setDraggedFile({
      file: file,
      base64: base64Converted
    })
  };

  return (
    <Card
      sx={{
        padding: "1rem 1.5rem",
        width: "22rem",
        minHeight: "18rem",
        backgroundColor: "#FFF",
        borderRadius: "0.75rem",
        shadow: "0 2px 4px #00000012",
      }}
    >
      <CardHeader>
        <Heading mb="1rem" fontSize="1.25rem">
          Upload your file
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack>
          <DropFileInput onChange={onFileChangedHandler} />
        </Stack>
      </CardBody>
    </Card>
  );
}

export default DragDropFile;

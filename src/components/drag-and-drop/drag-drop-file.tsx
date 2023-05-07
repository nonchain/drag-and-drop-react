// Libraries
import { useState } from "react";
// Components
import { Card, CardHeader, CardBody, Heading, Stack } from "@chakra-ui/react";
import DropFileInput from "./drop-file-input.component";
import FileItem from "../file/file-item.component";
// TS Configs
import { File, FileInput } from "../../models/types";

type DraggedFile = {
  file: File;
  base64: string;
};

function DragDropFile() {
  const [draggedFile, setDraggedFile] = useState<DraggedFile>({
    file: {
      name: '',
      type: '',
      size: '',
    },
    base64: '',
  });

  const toBase64 = (file: object) =>
  new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file as Blob);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const onFileChangedHandler = async (file: FileInput) => {
    const base64Converted = await toBase64(file.file);
    console.log(base64Converted);
    setDraggedFile({
      file: {
        name: file?.name,
        type: file?.type,
        size: file?.size,
      },
      base64: base64Converted as string
    })
  };

  return (
    <Card
      sx={{
        padding: "1rem 1.5rem",
        width: "22rem",
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
        <Stack gap="2rem">
          <DropFileInput onChange={onFileChangedHandler} />
          <FileItem file={draggedFile.file} base64={draggedFile.base64}/>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default DragDropFile;

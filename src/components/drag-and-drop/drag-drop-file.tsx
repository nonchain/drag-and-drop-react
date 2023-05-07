// Libraries
import { useState } from "react";
// Components
import { Stack } from "@chakra-ui/react";
import DropFileInput from "./drop-file-input.component";
import FilesList from "../file/files-list";
// TS Configs
import { DraggedFile, FileInput } from "../../models/types";

function DragDropFile() {
  const [filesList, setFileList] = useState<DraggedFile[]>([]);

  const toBase64 = (file: object) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file as Blob);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const onFileChangedHandler = async (file: FileInput) => {
    console.log(file);
    const base64Converted = await toBase64(file.file);
    setFileList(filesList.concat({
      file: {
        id: file.id,
        name: file?.name,
        type: file?.type,
        size: file?.size,
      },
      base64: base64Converted as string,
    }));
  };

  const onDeleteFileHandler = (fileId: string) => {
    const updatedList = filesList.filter(file => file?.file?.id !== fileId);
    setFileList(updatedList);
  }

  return (
    <Stack gap="1rem" minWidth="24rem">
      <DropFileInput onChange={onFileChangedHandler} />
      <FilesList filesList={filesList} onDeleteFile={onDeleteFileHandler}/>
    </Stack>
  );
}

export default DragDropFile;

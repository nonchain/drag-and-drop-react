import { Stack } from "@chakra-ui/react";
import FileItem from "./file-item.component";
// TS Config
import { FilesListProps } from "../../models/types";

function FilesList({ filesList, onDeleteFile }: FilesListProps) {

  if(filesList?.length < 0) return null;

  return (
    <Stack gap="0.5rem">
      {
        filesList?.map(file => <FileItem file={file.file} base64={file.base64} onDeleteFile={onDeleteFile}/>)
      }
    </Stack>
  );
}

export default FilesList;

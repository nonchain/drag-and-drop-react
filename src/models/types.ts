export type File = { id: string; name: string; type: string; size: string; };
export type FileInput = { id:string; name: string; type: string; size: string; file: object; };
export type DraggedFile = {
  file: File;
  base64: string;
};

export type FileInputProps = {
  onChange: (file: FileInput) => void;
}

export type FileItemProps = {
  file: File;
  base64: string;
  onDeleteFile: (fileId: string) => void;
};

export type FilesListProps = {
  filesList: DraggedFile[]
  onDeleteFile: (fileId: string) => void;
}

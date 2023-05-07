export type File = { name: string; type: string; size: string; };
export type FileInput = { name: string; type: string; size: string; file: object; };

export type FileInputProps = {
  onChange: (file: FileInput) => void;
}

export type FileItemProps = {
  file: File;
  base64: string;
};



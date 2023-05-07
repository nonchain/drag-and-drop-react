export type FileInputProps = {
  onChange: (file: object) => void;
}

export type File = {
  file: { name: string; type: string; size: string };
};


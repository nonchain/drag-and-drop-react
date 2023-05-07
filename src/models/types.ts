export type FileInputProps = {
  onChange: (file: { name: string; type: string; size: string, file: object }) => void;
}

export type FileItemProps = {
  file: { name: string; type: string; size: string };
  base64: string;
};


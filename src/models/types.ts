export type FileInputProps = {
  onChange: (file: { name: string; type: string; size: string }) => void;
}

export type FileItemProps = {
  file: { name: string; type: string; size: string };
};


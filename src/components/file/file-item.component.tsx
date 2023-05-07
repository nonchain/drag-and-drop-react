// Components
import { Stack, Text, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
// TS configs
import { FileItemProps } from "../../models/types";

function FileItem({ file, base64, onDeleteFile }: FileItemProps) {
  if (!file.name) return null;

  const { id, name, size } = file;
  const formattedSize = Intl.NumberFormat("en", { notation: "compact" }).format(
    Number(size)
  );

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack justifyContent="center">
        <Text fontSize="0.812rem" fontWeight="600">
          {name}
        </Text>
        <Text
          color="#585859"
          fontSize="0.65rem"
          fontWeight="500"
          sx={{ "&.chakra-text": { margin: 0 } }}
        >
          {formattedSize}B
        </Text>
      </Stack>

      <IconButton
        size="sm"
        aria-label="Delete file"
        icon={<CloseIcon boxSize="0.55rem" />}
        onClick={()=> onDeleteFile(id)}
        sx={{
          padding: "0.25rem",
          backgroundColor: "#df4040",
          border: "none",
          borderRadius: "0.125rem",
          color: "#FFF",
          cursor: "pointer",
        }}
      />
    </Stack>
  );
}

export default FileItem;

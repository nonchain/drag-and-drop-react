// Components
import { Stack, Image, Text } from "@chakra-ui/react";
// Files
import { imagesConfig } from "../../utils/imagesConfig";
// TS configs
import { FileItemProps } from "../../models/types";

function FileItem({ file, base64 }: FileItemProps) {
  if (!file.name) return null;

  const { name, size, type } = file;
  const formattedSize = Intl.NumberFormat("en", { notation: "compact" }).format(
    Number(size)
  );

  const imgSrc = file.type === "image/png" ? base64 : "";
  return (
    <Stack padding="0.25rem" gap="1rem" border="2px solid #EAEAEA" borderRadius="0.5rem">
      <Stack direction="row">
        <Image src={imagesConfig[type]} alt="icon" width="3rem" />
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
      </Stack>
      {
        imgSrc ? <Image height="12rem" src={imgSrc} alt="image" /> : <object type={file.type} data={base64}></object>
      }
    </Stack>
  );
}

export default FileItem;

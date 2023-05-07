// Components
import { Stack, Image, Text } from "@chakra-ui/react"
// Files
import { imagesConfig } from "../../utils/imagesConfig";
// TS configs
import { FileItemProps } from "../../models/types";

function FileItem({file}: FileItemProps) {

  if(!file) return null;

  const { name, size, type } = file;
  const formattedSize = Intl.NumberFormat('en', { notation: 'compact' }).format(Number(size));
  return (
    <Stack direction="row">
      <Image src={imagesConfig[type]} alt="icon" width="3rem"/>
      <Stack justifyContent="center">
        <Text fontSize="0.812rem" fontWeight="600">{name}</Text>
        <Text color="#585859" fontSize="0.65rem" fontWeight="500" sx={{"&.chakra-text": {margin: 0}}}>{formattedSize}B</Text>
      </Stack>
    </Stack>
  )
}

export default FileItem
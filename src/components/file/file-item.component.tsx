// Components
import { Stack, Image, Text } from "@chakra-ui/react"
// Files
import { imagesConfig } from "../../utils/imagesConfig";
// TS configs
import { FileProps } from "../../models/file/file-props";

function FileItem({file}: FileProps) {

  if(!file) return null;

  const { name, size, type } = file;
  const formattedSize = Intl.NumberFormat('en', { notation: 'compact' }).format(size);
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
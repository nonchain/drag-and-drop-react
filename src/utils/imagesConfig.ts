import fileDefault from "../assets/images/file-blank-solid-240.png";
import filePdf from "../assets/images/file-pdf-solid-240.png";
import filePng from "../assets/images/file-png-solid-240.png";

export const imagesConfig: {[key:string]: string} = {
  "image/png": filePng,
  "application/pdf": filePdf,
  "text/plain": fileDefault,
}
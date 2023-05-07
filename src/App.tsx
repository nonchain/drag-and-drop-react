// Libraries
import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
// Components
import DragDropFile from "./components/drag-and-drop/drag-drop-file";
import { Stack } from "@chakra-ui/react";

function App() {
  return (
    <Fragment>
      <Toaster toastOptions={{
        duration: 3500,
        style: {
          fontSize: "0.912rem",
          fontWeight: "600"
        },
      }}/>
      <Stack minHeight="100vh" bgColor="#FEFAFA" alignItems="center" justifyContent="center">
        <DragDropFile />
      </Stack>
    </Fragment>
  );
}

export default App;

// import First from "./components/First";
import { Box, Container, Stack } from "@mui/material";
import Feed from "./pages/Feed";
import Navbar from "./pages/Navbar";
import Rightbar from "./pages/Rightbar";
import Sidebar from "./pages/Sidebar";

function App() {

  return (
    <Box>
      {/* <First /> */}
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;

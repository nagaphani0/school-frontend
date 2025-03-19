import { Box } from "@mui/material";
import Header from "./Header";
import { MainTab } from "../Student/StudentOverview";
import Announcements from "../Announcements";
import FeeDetails from "../FeeDetails";
import Attendance from "../Attendance";
import ClassDiary from "../ClassDiary";

function HomePage() {
  return (
    <Box padding={0.5}>
      <Header />
      <Box mt={1}>
        <MainTab />
        <Box display="flex" mt={1}>
          <Announcements />
          <Attendance />
          <FeeDetails />
        </Box>
        <ClassDiary />
      </Box>
    </Box>
  );
}
export default HomePage;

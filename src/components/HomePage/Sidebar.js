import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import HomePage from "./HomePage";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

const ReportCards = () => (
  <Typography variant="h6">Report Cards Section</Typography>
);
const Timetable = () => <Typography variant="h6">Timetable Section</Typography>;
const Attendance = () => (
  <Typography variant="h6">Attendance Section</Typography>
);
const FeePayment = () => (
  <Typography variant="h6">Fee Payment Section</Typography>
);
const Library = () => <Typography variant="h6">Library Section</Typography>;

const Sidebar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 220,
          bgcolor: "background.paper",
          borderRight: 1,
          borderColor: "divider",
          padding: 2,
        }}
      >
        <Box sx={{ mb: 2 }}>
          <img
            src="https://cdnimages.myclassboard.com/loginpages/indusuniversal_assets/img/indus-logo.png"
            width={"200px"}
          />
        </Box>

        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiTab-root": {
              display: "flex",
              justifyContent: "flex-start",
              textAlign: "left",
              fontSize: "0.875rem",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              gap: "8px", // Space between icon and text
            },
            "& .MuiTabs-indicator": { left: 0, width: 3 },
          }}
        >
          <Tab
            icon={<HomeOutlinedIcon />}
            iconPosition="start"
            label="Student Home"
          />
          <Tab
            icon={<DescriptionOutlinedIcon />}
            iconPosition="start"
            label="Report Cards"
          />
          <Tab
            icon={<ScheduleOutlinedIcon />}
            iconPosition="start"
            label="Timetable"
          />
          <Tab
            icon={<FactCheckOutlinedIcon />}
            iconPosition="start"
            label="Attendance"
          />
          <Tab
            icon={<PaymentOutlinedIcon />}
            iconPosition="start"
            label="Fee Payment"
          />
          <Tab
            icon={<MenuBookOutlinedIcon />}
            iconPosition="start"
            label="Library"
          />
        </Tabs>
      </Box>

      {/* Content Area */}
      <Box sx={{ flexGrow: 1, padding: 1 }}>
        {value === 0 && <HomePage />}
        {value === 1 && <ReportCards />}
        {value === 2 && <Timetable />}
        {value === 3 && <Attendance />}
        {value === 4 && <FeePayment />}
        {value === 5 && <Library />}
      </Box>
    </Box>
  );
};

export default Sidebar;

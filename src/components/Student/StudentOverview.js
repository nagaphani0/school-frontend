import * as React from "react";
import { Card, CardContent, Typography, Avatar, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const StudentOverview = () => {
  return (
    <Card sx={{ padding: 1 }}>
      <CardContent>
        <Grid
          container
          spacing={2}
          display={"flex"}
          // direction={"column"}

          mt={1}
        >
          <Grid item ml={1}>
            <Avatar
              src="https://img.freepik.com/premium-vector/young-boy-with-school-uniform_505024-1326.jpg?semt=ais_hybrid"
              sx={{ width: 100, height: 100 }}
            />
          </Grid>
          <Grid item ml={1}>
            <Typography variant="body2">
              <strong>Name:</strong> Naga Phani
            </Typography>
            <Typography variant="body2">
              <strong>Admission No:</strong> 5026/2021-22
            </Typography>
            <Typography variant="body2">
              <strong>DOB:</strong> 06-04-2015
            </Typography>
            <Typography variant="body2">
              <strong>Nationality:</strong> Indian
            </Typography>
          </Grid>
          <Grid item ml={1}>
            <Typography variant="body2">
              <strong>Mother Tongue:</strong> Telugu
            </Typography>
            <Typography variant="body2">
              <strong>Contact No:</strong>+91 9123456789
            </Typography>
            <Typography variant="body2">
              <strong>Aadhar No:</strong> 12456789121
            </Typography>
            <Typography variant="body2">
              <strong>Nationality:</strong> Indian
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function MainTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTab-root": {
              fontSize: "11px",

              // minWidth: 100,
              padding: "6px 12px",
            }, // Decreased font size
            "& .MuiTabs-indicator": { left: 0, width: 3 },
          }}
        >
          <Tab label="Student Overview" {...a11yProps(0)} />
          <Tab label="Students Documents" {...a11yProps(1)} />
          <Tab label="Issue Certificate" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <StudentOverview />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* <Cards /> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {/* <Cards /> */}
      </CustomTabPanel>
    </Box>
  );
}

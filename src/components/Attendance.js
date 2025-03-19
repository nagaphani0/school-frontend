import { Card, CardContent, Typography } from "@mui/material";

const Attendance = () => {
  return (
    <Card sx={{ flex: 1, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          Attendance
        </Typography>
        <Typography variant="h4" color="error" mt={1}>
          0%
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Present: 0/0 days
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Attendance;

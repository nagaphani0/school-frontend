import { Card, CardContent, Typography, Button } from "@mui/material";

const FeeDetails = () => {
  return (
    <Card sx={{ flex: 1, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          Fee Details
        </Typography>
        <Typography variant="h4" color="primary" mt={1}>
          INR 24,000
        </Typography>
        <Button variant="contained" color="warning" sx={{ mt: 2 }}>
          Pay Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeeDetails;

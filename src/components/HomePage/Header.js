import { Typography, Avatar, Card, CardContent, Grid } from "@mui/material";

const Header = () => {
  return (
    <Card sx={{ width: "32%", height: "65px" }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item>
            <Avatar
              sx={{ width: 42, height: 42, marginRight: 2 }}
              src="https://img.freepik.com/premium-vector/young-boy-with-school-uniform_505024-1326.jpg?semt=ais_hybrid"
            />
          </Grid>
          <Grid item>
            <Typography fontSize={"20x"}>Doolam Rishaan</Typography>
            <Typography variant="body2" color="textSecondary">
              Grade IV - A
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Header;

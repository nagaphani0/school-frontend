import { Card, CardContent, Typography, Chip } from "@mui/material";

const ClassDiary = () => {
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          Class Diary
        </Typography>
        <div style={{ marginTop: 8 }}>
          <Chip label="English" color="error" sx={{ mr: 1 }} />
          <Chip label="Mathematics" color="success" sx={{ mr: 1 }} />
          <Chip label="French" color="info" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ClassDiary;

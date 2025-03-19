import { Card, CardContent, Typography, List, ListItem, ListItemText, Chip } from "@mui/material";

const Announcements = () => {
  const announcements = [
    { date: "17 Feb 2025", title: "Grade-4 Social Science Worksheet", tag: "Academic Related" },
    { date: "13 Feb 2025", title: "Grade 4 PT-3 Question Paper", tag: "Academic Related" },
    { date: "11 Feb 2025", title: "Gr 4 Eng Practice Worksheet", tag: "Academic Related" },
  ];

  return (
    <Card sx={{ flex: 1 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          Announcements
        </Typography>
        <List>
          {announcements.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item.title} secondary={item.date} />
              <Chip label={item.tag} color="success" size="small" />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Announcements;

import React from "react";
import{
    Typography,
    Card,
    CardContent,
    CardMedia,
} from '@mui/material';





export default function VideoCard({ title, description, videoId }) {
    return(
       <Card
  sx={{
    backgroundColor: "#1e1e1e",
    color: "white",
    borderRadius: 3,
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: 6,
    },
  }}
>
  <CardMedia
    component="iframe"
    sx={{ aspectRatio: "16/9" }}
    src={`https://www.youtube.com/embed/${videoId}`}
    title={title}
    allow="accelerometer;clipboard-write; encrypted-media;picture-in-picture; web-share"
    allowFullScreen

  />

  <CardContent>
    <Typography variant="h6" gutterBottom sx={{ color: "#1faf5b", fontFamily: "math"}}>
      {title}
    </Typography>

    <Typography variant="body2" sx={{ color: "#cccccc", fontFamily: "math" }}>
      {description}
    </Typography>
  </CardContent>
</Card>

    );
}

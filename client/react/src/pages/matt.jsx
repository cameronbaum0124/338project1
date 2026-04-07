import React from "react";
import{
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Box,
} from '@mui/material';



// Video Card Helper Function

function VideoCard({ title, description, videoId }) {
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
    <Typography variant="h6" gutterBottom sx={{ color: "#1faf5b", fontFamily: "cursive"}}>
      {title}
    </Typography>

    <Typography variant="body2" sx={{ color: "#cccccc", fontFamily: "cursive" }}>
      {description}
    </Typography>
  </CardContent>
</Card>

    );
}

//Video Section Helper Function

function VideoSection({title, videos }) {
    return(
        <Box sx={{ mb: 6 }}>
            <Typography 
                variant="h4" 
                align="center" 
                color="#ffffff" 
                gutterBottom
                sx={{ 
                    mb: 2,
                    fontFamily: "Cursive",
                    opacity: 0.75, 
                    textShadow: "0 0 14px rgba(255,255,255,0.4)",
                }}>
                {title}
            </Typography>
            <br />
            <Grid container spacing={3} justifyContent="center">
                {videos.map((video, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <VideoCard {...video} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}



// Main database class page
function Matt() {
    const sections = [
        {
           title: "SQL Basics",
           videos: [
            {
                title: "Intro To SQL",
                description: "Learn the fundamentals of SQL",
                videoId: "HXV3zeQKqGY",
            },
            {
                title: "Select Statements",
                description: "Query fundamentals",
                videoId: "7S_tz1z_5bA",
            },
            {
                title: "Table Joins",
                description: "Joins basics",
                videoId: "FjxtntY5sO0",
            },
            {
                title: "SQL In 100 Seconds",
                description: "Quick overview of SQL",
                videoId: "zsjvFFKOm3c",
            },
            {
                title: "SQL Functions",
                description: "SQL functions in Postgresql",
                videoId: "GNTap3iVg3c",
            },
            {
                title: "SQL Full Course",
                description: "An extensive course in SQL",
                videoId: "U4qvLA1QwEE",
            },
        
           ],
        },
        {
           title: "Software Installation",
           videos: [
            {
                title: "Install Postgresql",
                description: "For Windows",
                videoId: "HXV3zeQKqGY",
            },
            {
                title: "Install Postgresql",
                description: "For Mac",
                videoId: "a78hxM4-99A",
            },
            {
                title: "Install DBeaver",
                description: "For Windows",
                videoId: "xTs80X2OiKw",
            },
            {
                title: "Install DBeaver",
                description: "For Mac",
                videoId: "mgJ5JA-lmHM",
            },
            {
                title: "Install Neo4j",
                description: "For Windows",
                videoId: "qAFivl3z8jo",
            },
            {
                title: "Install Neo4j",
                description: "For Mac/Linux",
                videoId: "kVgd8NNTQD8",
            },
        
           ],
        },
        {
           title: "Database Design",
           videos: [
            {
                title: "Database Keys Made Easy",
                description: "Different keys used in databases",
                videoId: "8wUUMOKAK-c",
            },
            {
                title: "Entity Relationshiip Diagrams",
                description: "ER diagrams explained",
                videoId: "LowjDtiNlk4",
            },
            {
                title: "Database Normalization",
                description: "Normalizing a database",
                videoId: "GFQaEYEc8_8",
            },
            {
                title: "Database Relationships",
                description: "Different data relationships",
                videoId: "C3icLzBtg8I",
            },
            {
                title: "Database Design Mistakes",
                description: "Common mistakes to avoid",
                videoId: "s6m8Aby2at8",
            },
            {
                title: "Designing Relational Databases",
                description: "Database design for beginners",
                videoId: "fXndSzAL1Nc",
            },
        
           ],
        },
    ];

    return(
     <Box sx= {{ 
        minHeight:"100vh", 
        backgroundImage: "url('/matt_page_card_background.jpg')"
,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: "#0d0d0d",
        }}>
        <Typography 
            variant="h2" align= 
            "center" color= "#1faf5b" 
            gutterBottom 
            sx={{ 
                mb: 2,
                color: "#ffffff",
                fontFamily: "cursive",
                opacity: 0.75,
                textShadow: "0 0 1 14px rgba(255,255,255,0.4)",

            }}>
                Database Management CSCI:343 
                <br />
                Video Resources        
        </Typography>
        <br />
        <br />
        <br />
        <br />  
        <Container disableGutters maxWidth="lg" sx={{ mb: 5 }}>
            {sections.map((section, index) => (
                <VideoSection key={index} {...section} />
            ))}
        </Container>  
    </Box>   
 );
}

export default Matt;







   /* return (












        <div>
           
            <Button variant = "contaiined" onClick={() => window.location.href="/"}>Back to Home</Button>
        </div>
    );
}*/


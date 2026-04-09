//import video1 from "www.youtube.com/watch?v=dQw4w9WgXc/";
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
import{createTheme, ThemeProvider} from '@mui/material';


const theme = createTheme({
    palette: { 
        primary: {
            main: '#212265', // back grond of the page
            card: '#31d88d8b' //the back ground for the cards
        },
        textColor: {
            main: '#ffffff', //defalt for text
            sect: '#380404', //the section of Python and R
            Mtitle: '#f40404', //this is for the title at the top of the page
            title: '#041cf4', //title of videos
            descrpt: '#f404c4' //description of the videos
        }
    }
})

function VideoCard({title, description, videoID}) {
    return(
        <Card>
            <CardMedia
                component="iframe"
                sx={{aspectRatio: "16/9"}}
                src={`https://www.youtube.com/embed/${videoID}`}
                title={title}
                allow="accelerometer;clipboard-write; encrypted-media;picture; web-share"
                allowFullScreen
            />
                
            <CardContent sx={{bgcolor: "primary.card"}}>
                <Typography variant="h6" gutterBottom sx={{color: 'textColor.title', fontFamily: "print", fontSize: 20}}>
                    {title}
                </Typography>

                <Typography variant="h6" sx={{color: 'textColor.descrpt', fontFamily: "print", fontSize: 12}}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

function Quetzal() {
    return (
        <ThemeProvider theme={theme} Comment="span">
            <Box sx={{bgcolor: "primary.main",justifycontent: 'center',}}>
                <Typography sx={{color: "textColor.Mtitle"}}>
                    <h1 variant="h1" gutterBottom sx={{fontFamily: "print", fontSize: 50}}>
                        Welcome to Quetzal's Page
                    </h1>
                </Typography>
                <button onClick={() => window.location.href="/"}>Back to Home</button>
                <Typography variant="body2" sx={{color: "textColor.main", fontFamily: "cursive"}}>
                    This page has tutorials for CSCI 183 – Introduction to Programming: Data Science
                    In the class you will learn to prtogram in boath Pythom and R
                </Typography>
                <Typography sx={{color: "textColor.sect"}}>
                    <h2 variant="h2" gutterBottom sx={{fontFamily: "print", fontSize: 50}}>
                        Python
                    </h2>
                </Typography>
                <Typography sx={{color: "textColor.main"}}>
                    <p>
                        this section is on python
                    </p>
                </Typography>
                <tr>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                </tr>
                <Typography sx={{color: "textColor.sect"}}>
                    <h2>
                        R
                    </h2>
                </Typography>
                <Typography sx={{color: "textColor.main"}}>
                    <p>
                        this section is on R
                    </p>
                </Typography>
                <tr>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                    <td>
                        <VideoCard title="My title" description="A tutorial." videoID="dQw4w9WgXcQ" />
                    </td>
                </tr>
            </Box>
        </ThemeProvider>
    );
}

export default Quetzal;

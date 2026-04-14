//import video1 from "www.youtube.com/watch?v=dQw4w9WgXcQ/";
import React from "react";
import{
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Box,
    createStyles,
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
            sect: '#93ff07', //the section of Python and R
            Mtitle: '#f40404', //this is for the title at the top of the page
            title: '#041cf4', //title of videos
            descrpt: '#f404c4' //description of the videos
        }
    }
})

function VideoCard({title, description, videoID}) {
    return(
        <Card style = {{width:"350px", height:"300px"}}>
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
                        This section is on python. Python is a fairly straght forword languadge. Alot of it you can look at just read the code to figger out what is happening
                    </p>
                </Typography>
                <tr>
                    <td>
                        <VideoCard title="Setting up Python in VS Code" description="This covers how to set up Python operating system in VS Code" videoID="6i3e-j3wSf0" />
                    </td>
                    <td>
                        <VideoCard title="Python Basics" description="This covres some of the key featurs of python." videoID="fLAfa-BQtOQ" />
                    </td>
                    <td>
                        <VideoCard title="If and Else" description="This covers if else statmensts whitch are requited for disition make in your code" videoID="FvMPfrgGeKs" />
                    </td>
                    <td>
                        <VideoCard title="Loops" description="This covers how to make for and while loops making it so you do not need to writ the same bit of code over and over again" videoID="23vCap6iYSs" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <VideoCard title="Functions" description="This covers how make and use functions" videoID="zvzjaqMBEso" />
                    </td>
                    <td>
                        <VideoCard title="More Functions" description="This one goes more indepth in how to use funtions" videoID="89cGQjB5R4M" />
                    </td>
                    <td>
                        <VideoCard title="Recursive Function" description="This covers how to call a funtion inside the same funtion" videoID="72uVUU1boKo" />
                    </td>
                    <td>
                        <VideoCard title="Scope" description="Scope and its use case" videoID="e_UgAqOdEXY" />
                    </td>
                </tr>
                <Typography sx={{color: "textColor.sect"}}>
                    <h2>
                        R
                    </h2>
                </Typography>
                <Typography sx={{color: "textColor.main"}}>
                    <p>
                        This section is on R, R is used mosly to make graphs and interprate tables
                    </p>
                </Typography>
                <tr>
                    <td>
                        <VideoCard title="Settig up R and R Studio" description="This covers how to set up R and R studio" videoID="TsnGd6p9oTk" />
                    </td>
                    <td>
                        <VideoCard title="R programin for beginners" description="This covers the basics Of Programin in R" videoID="FY8BISK5DpM" />
                    </td>
                    <td>
                        <VideoCard title="If Else" description="How to use If else statmens in R" videoID="C3tcEuc_46Y" />
                    </td>
                    <td>
                        <VideoCard title="Loops" description="Using Loops in R" videoID="UvopClD98LQ" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <VideoCard title="Functions" description="This covers the basics Of Programin in R" videoID="gkbrG4WhiXU" />
                    </td>
                    <td>
                        <VideoCard title="Recurtion" description="This covers how to call a funtion inside the same funtion" videoID="i8y_79_wlnE" />
                    </td>
                    <td>
                        <VideoCard title="Graphing" description="How to conver data to a graph" videoID="b1KsXxtw9tA" />
                    </td>
                    <td>
                        <VideoCard title="More Graphing" description="How to plot data, and customise a graph " videoID="LC4ACfaazJQ" />
                    </td>
                </tr>
            </Box>
        </ThemeProvider>
    );
}

export default Quetzal;

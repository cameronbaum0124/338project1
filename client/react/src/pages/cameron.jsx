import React from 'react'
import { Card, CardContent, Typography, Box, CssBaseline} from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import VideoCard from "../components/CameronVideoCard.jsx" // thank you Matt :)
import ImagePlacer from "../components/CameronImagePlacer.jsx"

const theme = createTheme({
    palette: {
        primary: {
            darkerBlue: '#5680E9',
            lightBlue: '#84CEEB',
            main: '#5AB9EA',
            grayishPurple: '#C1C8E4',
            purple: '#8860D9'
        },
        textColor: {
            main: '#fff'
        },
        background: {
            default: '#C1C8E4'
        }
    }
});

function AccordionMaker({textColor, backgroundCol, summaryText, tutorialType, alignment}) {
    const [expanded, setExpanded] = React.useState(false); 

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    
    return(
        <Card sx={{justifyContent: alignment, bgcolor: "primary.grayishPurple", margin: 4, borderColor: "primary.grayishPurple"}}>
            <Accordion sx={{bgcolor: backgroundCol, color: textColor}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={expanded === 'panel1' ? <FolderOpenIcon/> : <FolderIcon/>}>
                    <Typography component="span">{summaryText}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {tutorialType.map((section, index) => (
                        <VideoSection key={index} {...section} />
                    ))}
                </AccordionDetails>
            </Accordion>
        </Card>
    );
}

// thank you Matt :)
function VideoSection({title, videos }) {
    return(
        <Box sx={{ width: 250, mb: 6, bgcolor: theme.palette.primary.grayishPurple, borderRadius: 2 }}>
            <Typography 
                variant="h4" 
                align="center" 
                color="#ffffff" 
                gutterBottom
                sx={{ 
                    mb: 2,
                    fontFamily: "math",
                    opacity: 1, 
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

function Cameron() {
    const cTutorials = [
        {   
            title: "C Tutorials",
            videos: [
                {
                    title: "C Beginner Course: Bro Code",
                    description: "Bro Code's lessons are clear and simple, and this course covers all the fundamentals!",
                    videoId: "xND0t1pr3KY",
                },
                {
                    title: "C Header File Intro: Engineer Man",
                    description: "A quick and simple introduction to C Header Files and why they are useful.",
                    videoId: "mR8P0NU-ues",
                },
                {
                    title: "C Dynamic Memory (malloc): Caleb Curry",
                    description: "A useful crash course on Dynamic Memory Allocation in C.",
                    videoId: "GER0MmUdQbI",
                },
                {
                    title: "Structs and Typedefs in C: Caleb Curry",
                    description: "A good intro to Typedefs and Structs in C.",
                    videoId: "IAvfAC4H_0s",
                }
            ]
        }
    ];
    
    const linuxTutorials = [
        {   
            title: "Linux Tutorials",
            videos: [
                {
                    title: "What is Linux: Fireship",
                    description: "A quick history on why Linux was created and what it is!",
                    videoId: "rrB13utjYV4",
                },
                {
                    title: "Linux Commands: NetworkChuck",
                    description: "A crash course on necessary Linux commands you should know.",
                    videoId: "gd7BXuUQ91w",
                },
                {
                    title: "Intro to Linux File Permissions: Travis Media",
                    description: "Must know information about Linux permissions!",
                    videoId: "LnKoncbQBsM",
                }
            ]
        }
    ]
        
    const assemblyTutorials = [
        {   
            title: "Assembly Tutorials",
            videos: [
                {
                    title: "What is Assembly: Fireship",
                    description: "A quick history of Assembly and information on it's uses.",
                    videoId: "4gwYkEK0gOk",
                },
                {
                    title: "Assembly Beginner Intro: Mxy",
                    description: "A quick crash course on Assembly.",
                    videoId: "PxiMLtsuGO0",
                },
                {
                    title: "Assembly Tutorial: freeCodeCamp",
                    description: "An Assembly programming tutorial with ARM, a specific Assembly language that is widely used.",
                    videoId: "gfmRrPjnEw4",
                }
            ]
        }
    ];

    const shellScripting = [
        {   
            title: "Shell Scripting",
            videos: [
                {
                    title: "Bash Scripting: freeCodeCamp",
                    description: "A full beginner tutorial on scripting with Bash.",
                    videoId: "tK9Oc6AEnR4",
                },
                {
                    title: "Powershell Beginner Tutorial: Jim Tyler",
                    description: "A beginner tutorial course on Powershell, the shell used on Windows OS.",
                    videoId: "ZOoCaWyifmI",
                },
                {
                    title: "What is Bash?: Fireship",
                    description: "An introduction to what Bash is; Bash is the primary shell on Linux and MacOS.",
                    videoId: "I4EWvMFj37g",
                }
            ]
        }
    ];

    return (  
        <ThemeProvider theme={theme} component="span">
            <CssBaseline/>
            <br></br>

            <Grid container justifyContent="flex-end">
                <Card elevation={15} sx={{borderRadius: 7, bgcolor: "primary.darkerBlue", color: "textColor.main", margin: 1}}>
                    <CardContent sx={{padding: 3}}>
                        <Typography variant="h2" component="div" fontFamily="math">
                            Systems I
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <br></br>
            <br></br>

            <Grid container sx={{display: 'flex', justifyContent: "center"}}>
                <AccordionMaker textColor="textColor.main" backgroundCol="primary.purple" summaryText="C Tutorials" tutorialType={cTutorials} alignment="flex-end"/>
                <AccordionMaker textColor="textColor.main" backgroundCol="primary.darkerBlue" summaryText="Linux Tutorials" tutorialType={linuxTutorials}/>
                <AccordionMaker textColor="textColor.main" backgroundCol="primary.lightBlue" summaryText="Assembly Tutorials" tutorialType={assemblyTutorials}/>
                <AccordionMaker textColor="textColor.main" backgroundCol="primary.main" summaryText="Shell Scripting Tutorials" tutorialType={shellScripting}/>
                <ImagePlacer />
            </Grid>

            <br></br>

        </ThemeProvider>
    );
}

export default Cameron;
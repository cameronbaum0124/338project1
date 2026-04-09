import React from 'react'
import Button from '@mui/material/Button'
import { Card, CardContent, CardMedia, Typography, IconButton, Toolbar, AppBar, Box} from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import { Accordion, AccordionActions, AccordionSummary, AccordionDetails } from '@mui/material'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import VideoCard from "../components/VideoCard.jsx" // thank you Matt :)
import { alpha, styled} from '@mui/material/styles'

function CustomizedButtonFunc() {
    const CustomizedButton = styled(Button) (({theme}) => ({
        width: 400,
        color: theme.palette.primary.darkerBlue,
        '& .MuiButton-contained': {
            '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.primary.main, .16)}`,
            },
            '&.Mui-active': {
                boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.primary.main, .16)}`,
            },
        },
    }));

    return <CustomizedButton onClick={() => window.location.href="/"}/>
}
const CustomizedButton = styled(Button) (({theme}) => ({
    width: 400,
    color: theme.palette.primary.darkerBlue,
    '& .MuiButton-outlined': {
        '&:hover, &.Mui-focusVisible': {
            boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.primary.main, .16)}`,
        },
        '&.Mui-active': {
            boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.primary.main, .16)}`,
        },
    },
}));

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
        }
    }
});

function AccordionMaker({textColor, backgroundCol, summaryText, detailsText, alignment, tutorialType}) {
    const [expanded, setExpanded] = React.useState(false); 

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    
    return(
    <Box sx={{p: 2, display: 'flex', width: 300, alignContent: alignment, width: 710}}>
        <Accordion elevation={10} sx={{bgcolor: backgroundCol, color: textColor}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={expanded === 'panel1' ? <FolderOpenIcon/> : <FolderIcon/>}>
                <Typography component="span">{summaryText}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Card>
                    {tutorialType.map((section, index) => (
                        <VideoSection key={index} {...section} />
                    ))}
                </Card>
            </AccordionDetails>
        </Accordion>
    </Box>
    );
}

// thank you Matt :)
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
                    videoId: "rrB13utjYV4&t=10s",
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
                    title: "Powershell Beginner Tutorial: JackedProgrammer",
                    description: "A quick tutorial series on Powershell, the shell used on Windows OS.",
                    videoId: "NECE5CX69tk&list=PLnK11SQMNnE4vcvuAahz4KhNOS7zOfmB3",
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
            <Box sx={{bgcolor: "primary.grayishPurple"}}> 
                <h1>Systems I</h1>

                <Grid container justifyContent="flex-end">
                    <Card elevation={15} sx={{borderRadius: 7, bgcolor: "primary.darkerBlue", color: "textColor.main", margin: 1}}>
                        <CardContent sx={{padding: 3}}>
                            <Typography variant="h2" component="div" fontFamily="math">
                                Systems I
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <CustomizedButtonFunc/>
                <br></br>
                <br></br>
                <AccordionMaker textColor="textColor.main" backgroundCol="primary.purple" summaryText="C Tutorials" detailsText="This is where videos will be!" alignment="flex-start" tutorialType={cTutorials}/>
                <AccordionMaker textColor="textColor.main" backgroundCol="primary.darkerBlue" summaryText="Linux Tutorials" detailsText="This is where videos will be!" alignment="flex-end" tutorialType={linuxTutorials}/>
                <AccordionMaker textColor="textColor.main" backgroundCol="primary.lightBlue" summaryText="Assembly Tutorials" detailsText="This is where videos will be!" alignment="flex-start" tutorialType={assemblyTutorials}/>
                <AccordionMaker textColor="textColor.main" backgroundCol="primary.main" summaryText="Shell Scripting Tutorials" detailsText="This is where videos will be!" alignment="flex-end" tutorialType={shellScripting}/>
                <br></br>
            </Box>
        </ThemeProvider>
    );
}

export default Cameron;
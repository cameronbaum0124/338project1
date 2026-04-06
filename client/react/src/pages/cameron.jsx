import React from 'react';
import Button from '@mui/material/Button';
import { Card, CardContent, CardMedia, Typography, IconButton, Toolbar, AppBar, Box} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { Accordion, AccordionActions, AccordionSummary, AccordionDetails } from '@mui/material'
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles'

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

function AccordionMaker({textColor, backgroundCol, summaryText, detailsText, alignment}) {
    const [expanded, setExpanded] = React.useState(false); 

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    
    return(
    <Box sx={{p: 2, display: 'flex', width: 300, justifyContent: alignment, width: 710}}>
        <Accordion elevation={10} sx={{bgcolor: backgroundCol, color: textColor}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={expanded === 'panel1' ? <FolderOpenIcon/> : <FolderIcon/>}>
                <Typography component="span">{summaryText}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography fontFamily="math">{detailsText}</Typography>
                <Card>
                    <CardMedia component="video" src="https://www.youtube.com/watch?v=SqcY0GlETPk"/>
                </Card>
            </AccordionDetails>
        </Accordion>
    </Box>
    );
}

function Cameron() {
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

                <Button variant="contained" sx={{bgcolor: 'primary', color: 'textColor.main'}} onClick={() => window.location.href="/"}>Back to Home</Button>
                <br></br>
                <br></br>
                <AccordionMaker textColor="textColor.main" backgroundCol="primary.purple" summaryText="C Tutorials" detailsText="This is where videos will be!" alignment="flex-start"/>
                <AccordionMaker textColor="textColor.main" backgroundCol="primary.darkerBlue" summaryText="Linux Tutorials" detailsText="This is where videos will be!" alignment="flex-end"/>
                <AccordionMaker textColor="textColor.main" backgroundCol="primary.lightBlue" summaryText="Assembly Tutorials" detailsText="This is where videos will be!" alignment="flex-start"/>
                <AccordionMaker textColor="textColor.main" backgroundCol="primary.main" summaryText="Shell Scripting Tutorials" detailsText="This is where videos will be!" alignment="flex-end"/>
                <br></br>
                <Button variant="contained" sx={{bgcolor: 'primary.grayishPurple', color: 'textColor.main'}} onClick={() => console.log("Hello!")}>MUI Test!</Button>
            </Box>
        </ThemeProvider>
    );
}

export default Cameron;
import Box from "@mui/material/Box"
import React from "react"
import { createTheme, ThemeProvider, CssBaseline, Typography , Tooltip} from '@mui/material'

const theme = createTheme({
    palette: {
        background: {
            default: '#b6b4b4'
        }
    }
})

function Home() {
    return (
        <ThemeProvider theme={theme} component="span">
            <CssBaseline/>
    
            <Box sx={{
                position: "relative",
                height: "50vh", 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                backgroundImage: "url('/unca_photo.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 4
                }}>
            </Box>
            
            <Box align="center" sx={{bgcolor: "#fff", borderRadius: 4}}>
                <Typography variant="h2" align="center" fontFamily="roboto" color="#1c3bea">UNCA Computer Science Tutorial Page</Typography>
                <Typography variant="h4" align="center" fontFamily="roboto" color="#4dafec">This page serves as a center for UNCA Computer Science students. It has tutorials for some of the most common courses in the department.</Typography>
                <Tooltip title="Click to join the CSCI Discord!">
                <Box src="/discord.png" component="img" sx={{
                    position: "relative",
                    height: "30vh",
                    width: "40vh",
                    display: "flex",
                    borderRadius: 4,
                    m: 2,
                    ":hover": {
                        boxShadow: 3,
                        bgcolor: '#4dafec'
                    }
                }} onClick={() => {window.open("https://discord.gg/vDVuXxGXh", "_blank");}}>
                </Box>
                </Tooltip>
            </Box>



        </ThemeProvider>
    );
}

export default Home;
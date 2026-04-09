import Box from "@mui/material/Box"
import React from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        background: {
            main: '#bab2b2'
        }
    }
})

function Home() {
    return (
        <ThemeProvider theme={theme} component="span">
            <br></br>
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

        </ThemeProvider>
    );
}

export default Home;
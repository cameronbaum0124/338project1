import { Grid, Box, Tooltip } from '@mui/material'

export default function ImagePlacer() {
    return (
        <Grid sx={{display: 'inline-flex'}}>
            <Tooltip title="Click to see more info about Linux!">
            <Box sx={{
                    position: "relative",
                    height: "25vh",
                    width: "25vh",
                    display: "flex",
                    backgroundImage: "url('/Tux.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 4,
                    m: 2,
                    ":hover": {
                        boxShadow: 3,
                        bgcolor: 'primary.darkerBlue'
                    }
                }} onClick={() => {window.open("https://en.wikipedia.org/wiki/Linux", "_blank");}}>
            </Box>
            </Tooltip>
            <Tooltip title="Click to see more info about the C Programming Language!">
            <Box sx={{
                    position: "relative",
                    height: "25vh",
                    width: "25vh",
                    display: "flex",
                    backgroundImage: "url('/c_language.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 4,
                    m: 2,
                    ":hover": {
                        boxShadow: 3,
                        bgcolor: 'primary.darkerBlue'
                    }
                }} onClick={() => {window.open("https://en.wikipedia.org/wiki/C_(programming_language)", "_blank");}}>
            </Box>
            </Tooltip>
            <Tooltip title="Click to see more info about Assembly Language!">
            <Box sx={{
                    position: "relative",
                    height: "25vh",
                    width: "25vh",
                    display: "flex",
                    backgroundImage: "url('/assembly.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 4,
                    m: 2,
                    ":hover": {
                        boxShadow: 3,
                        bgcolor: 'primary.darkerBlue'
                    }
                }} onClick={() => {window.open("https://en.wikipedia.org/wiki/Assembly_language", "_blank");}}>
            </Box>
            </Tooltip>
            <Tooltip title="Click to see more info about Shell Scripting!">
            <Box sx={{
                    position: "relative",
                    height: "25vh",
                    width: "25vh",
                    display: "flex",
                    backgroundImage: "url('/bash.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 4,
                    m: 2,
                    ":hover": {
                        boxShadow: 3,
                        bgcolor: 'primary.darkerBlue'
                    }
                }} onClick={() => {window.open("https://en.wikipedia.org/wiki/Shell_script", "_blank");}}>
            </Box>
            </Tooltip>
        </Grid>
    );
}
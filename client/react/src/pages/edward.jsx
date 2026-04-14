import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';

import{
    Container, Grid, Typography, Card, CardContent, CardMedia, Box
 } from '@mui/material';

const theme = createTheme({
  typography: {
    allVariants: {
      color: "#eeee", // or any valid CSS color value
    },
  },
});

/*
class App extends Component {
    render() {
        const myStyle = {
            backgroundImage: "url('/edwardBackground.png')",
            height: "100vh",
            marginTop: "-70px",
            fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        };
        return (
            <div style={myStyle}>
                <h1>GeeksForGeeks</h1>
            </div>
        );
    }
}
*/

function Edward() {
    return (
        <Box sx= {{
            backgroundImage: "url('/edwardBackground.png')",
            width: "100vw",
            height: 100%"",
            marginTop: "-70px",
            fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
            color: "#ffffff"
        }}>
            <div>
                <h1>Welcome to Edward's Page of Amazing Algorithms!</h1>
                <Button variant = "contained" onClick={() => window.location.href="/"}>Back to Home</Button>
                <br />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/XMUe3zFhM5c?si=3hVjhqCLjfnsAqSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ivl5-snqul8?si=MgkYVP1EW9wN6pbV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZQY4IfEcGvM?si=GoIkHl4ill18svD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/pY-cH7rti4U?si=xNHxTBgBH4zW1eRD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Hoixgm4-P4M?si=-UT_7H8w_F5P5LfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aFswaBnWKLk?si=7i-ahVDbXpPc0ti5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wkBjD0Fvl6U?si=yepWDXPOB8LiV-r0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fvOW1zNldE0?si=EDpdz0zfUgPTANEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/FsfRsGFHuv4?si=ytwpTf71KnPl9bho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/RC5VdTvAdVI?si=mfMbUg4iAqrIhW4C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/HZ5YTanv5QE?si=ENV3erU8NsKhu_Bi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Urx87-NMm6c?si=yfR_YREXz3XI_dDS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7J3GadLzydI?si=vhuG_nZFFxFXzimj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UBzu0O1Qny8?si=cZQIEfia9QglkBHE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cplfcGZmX7I?si=wHuJfqzMzcY-BSB-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/71UQH7Pr9kU?si=LFW13zAXROiXVUjN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/EFg3u_E6eHU?si=ggJwFhG4Ddr5oGQp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            </div>
        </Box>
    );
}

export default Edward;
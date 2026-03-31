import Button from '@mui/material/Button';
function Matt() {
    return (
        <div>
            <h1> Welcome to Matt's Page. I changed something.</h1>
            <Button variant = "contaiined" onClick={() => window.location.href="/"}>Back to Home</Button>
        </div>
    );
}

export default Matt;
import Button from '@mui/material/Button';
function Mayo() {
    return (
        <div>
            <h1> Welcome to Mayo's Page.</h1>
            <Button variant = "contained" color="secondary" onClick={() => window.location.href="/"}>Back to Home</Button>
        </div>
    );
}

export default Mayo;
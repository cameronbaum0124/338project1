function Cameron() {
    return (
        <div>
            <h1>Welcome to Cameron's Page</h1>
            <button onClick={() => window.location.href="/"}>Back to Home</button>
            <br></br>
            <button onClick={() => console.log("Hello! This is being used to test merging among different branches!")}>Merge Test</button>
        </div>
    );
}

export default Cameron;
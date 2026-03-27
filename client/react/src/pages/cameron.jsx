function Cameron() {
    return (
        <div>
            <h1>Welcome to Cameron's Page</h1>
            <button onClick={() => window.location.href="/"}>Back to Home</button>
            <br></br>
            <button onClick={() => console.log("Hello! This is being used to test merging among different branches!")}>Merge Test</button>
            <h2>This is a second test for merging and individual branches.</h2>
            <h3>This is a third test for merging and individual branches.</h3>
        </div>
    );
}

export default Cameron;
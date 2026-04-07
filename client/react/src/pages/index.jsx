
function Home() {
    return (
        <div>
            <h1>Welcome to the UNCA CS Tutorial Page</h1>
            <button onClick={() => window.location.href="/cameron"}>Cameron</button>
            <br></br>
            <button onClick={() => window.location.href="/matt"}>Matt</button>
            <br></br>
            <button onClick={() => window.location.href="/alina"}>Alina</button>
            <br></br>
            <button onClick={() => window.location.href="/edward"}>Edward</button>
            <br></br>
            <button onClick={() => window.location.href="/quetzal"}>Quetzal</button>
            <br></br>
            <button onClick={() => window.location.href="/mayo"}>Mayo</button>
        </div>
    );
}

export default Home;
function alertMsg()
{
    alert("Message from Javascript Alert!");
    console.log("Message to Developer");
}

function App()
{
    return(
        <div className="App">
            <h1>Let we see the output of javascript</h1>
            <button onClick={alertMsg}>CE1</button>
        </div>
    );
}
export default App;
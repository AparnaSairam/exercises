function obj(){
  let myobject={name:"Madras"};
  let newobject = myobject;
  myobject.name="Chennai";
  console.log(newobject);
  
  alert("check the console");
}
function vow(){
    let myarray=["a","e","i","o"];
    console.log(myarray);
    alert("Check the console output!");
}
function App()
{
    return(
        <div className="App">
            <h1>Let we see the output of javascript</h1>
            <button onClick={obj}>CE2</button>
            <button onClick={vow}>CE2</button>
            
        </div>
    )
}
export default App;
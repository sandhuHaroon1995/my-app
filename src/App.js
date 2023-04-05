import "./App.css";
import { Navbar } from "./Components/Navbar";
import { TextForms } from "./Components/TextForms";
// import { About } from "./Components/About";
import { useState } from "react";
import { Alert } from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='dark') {
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been Enabled','success')
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert('Dark mode has been Enabled','success')
    }
  } 

  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About Utils" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <Alert alert={alert}/>
      {/* <Routes> */}
          {/* <Route exact path="/" element={<TextForms heading="Enter Text to be Analysed" mode={mode} showAlert={showAlert}/>}> */}
          <TextForms heading="Enter Text to be Analysed" mode={mode} showAlert={showAlert}/>
          {/* </Route> */}
          
          {/* <Route exact path="/about" element={<About/>}> */}
          {/* </Route> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;

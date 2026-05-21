//import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
// import "./arithmetic";
// import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import Alert from './components/Alert';
import React, {useState} from 'react';


// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// }from "react-router-dom";
// let name="js1";
function App() {
  const [mode, setMode] = useState('light');
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() =>{
          setAlert(null);

        }, 1500);
   }
  const toggleMode = ()=>{
    if(mode === 'light'){
  setMode('dark')
  document.body.style.backgroundColor = '#042743'
  showAlert("Dark mod has been Enabled","success");
  document.title = 'TextUtils - Dark Mode';
  }
 else{
  setMode('light')
  document.body.style.backgroundColor = 'white'
  showAlert("Dark mod has been Enabled","success");
   document.title = 'TextUtils - Light Mode';
  }
}
  
  return (
    
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About TextUtil" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <nav>
     <li>Home</li>
     <li>About</li>
      <li>Contact</li>
    </nav>
    <div className='container'>
      <h1>Hello {name}</h1>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dolores, dignissimos eligendi at architecto, dicta velit itaque commodi neque corporis natus sapiente earum fugit facilis incidunt libero? Dignissimos, corporis consectetur?</p> 
    </div>

<Navbar/> */}
<div className="container">
{/* {  
  // <Routes>
  //   <Route exact path="/about"
  //   element={<About/>}
  //   />
    
    
    
  //   <Route exact path="/"
    //  element=
    
    //  /> */}
   
    
  {/* </Routes>  */}
  
  </div>
   <TextForm showAlert={showAlert} heading="Enter the text for analyze below" mode={mode}/>
  {/* </Router> */}
  {/* <About/>  */}
    </>
  );
}

export default App;

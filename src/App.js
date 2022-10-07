import { useState } from 'react';
import './App.css';
import Navbar from './componest/Navbar';
import PrevSidebar from './componest/PrevSidebar';
function App() {
  const [SIdebar, setSIdebar]=useState(false)
  console.log(SIdebar);
  return (
    <>
    <Navbar setSIdebar={setSIdebar} SIdebar={SIdebar}/>
    <PrevSidebar setSIdebar={setSIdebar} SIdebar={SIdebar}/>
    </>
    );
}

export default App;


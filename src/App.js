import Landing from "./Components/Landing/Landing";
import Menubar from "./Components/Menubar/Menubar";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App" style={{zIndex:'2'}}>
      <Menubar/>
    </div>
    <Routes>
      <Route exact path="/" element={<Landing/>}/>
    </Routes>

    </Router>
    
  );
}

export default App;
 
 


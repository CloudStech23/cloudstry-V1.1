import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Menubar from "./Components/Menubar/Menubar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Digitalcertificate from "./Components/WhatweDo/Product_Platfrom/Digcert";
import Petadhar from "./Components/WhatweDo/Product_Platfrom/Animaladhar";
import Thirdpartylogistic from "./Components/WhatweDo/Product_Platfrom/Tpl";
import Consultancy from "./Components/WhatweDo/It-strategy-consultancy";
import Softwareservices from "./Components/WhatweDo/Softwareservices";
import Staffingsolution from "./Components/WhatweDo/Staffingsolution";

function App() {
  return (
    <Router>
      <div className="App" style={{ zIndex: "2" }}>
        <Menubar />
      </div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Digital-Certificate" element={<Digitalcertificate />} />
        <Route exact path="/Pet-Aadhar" element={<Petadhar/>} />
        <Route exact path="/3PL-Solution" element={<Thirdpartylogistic/>} />
        <Route exact path="/IT-Strategy-Consultancy" element={<Consultancy/>} />
        <Route exact path="/Software-Services" element={<Softwareservices/>} />
        <Route exact path="/Staffing-Solution" element={<Staffingsolution/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

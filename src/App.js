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
import Healthinsurance from "./Components/Industries/Health_insurance";
import Government from "./Components/Industries/Government";
import Logistic from "./Components/Industries/Logistic";
import Education from "./Components/Industries/Education";
import Contact from "./Components/Support/Contact";

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
        <Route exact path="/Health&Insurance" element={<Healthinsurance/>} />
        <Route exact path="/Government" element={<Government/>} />
        <Route exact path="/Logistic" element={<Logistic/>} />
        <Route exact path="/Education" element={<Education/>} />
        <Route exact path="/Support" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

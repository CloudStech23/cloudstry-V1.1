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
import Contact from "./Components/About/Contact";
import Team from "./Components/About/Team";
import ScrollToTop from "./Components/Menubar/ScrolltoTop";
import "../src/App.css";
import DemoAnimation from "./Components/Menubar/DemoAnimation";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App" style={{ zIndex: "2" }}>
        <Menubar />
      </div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route
          exact
          path="/WhatweDo/Product-Platform/Digital-Certificate"
          element={<Digitalcertificate />}
        />
        <Route
          exact
          path="/WhatweDo/Product-Platform/Pet-Aadhar"
          element={<Petadhar />}
        />
        <Route
          exact
          path="/WhatweDo/Product-Platform/3PL-Solution"
          element={<Thirdpartylogistic />}
        />
        <Route
          exact
          path="/WhatweDo/IT-Solutions/IT-Strategy-Consultancy"
          element={<Consultancy />}
        />
        <Route
          exact
          path="/WhatweDo/IT-Solutions/Software-Services"
          element={<Softwareservices />}
        />
        <Route
          exact
          path="/WhatweDo/Staffing-Solution"
          element={<Staffingsolution />}
        />
        <Route
          exact
          path="/Industries/Health-Insurance"
          element={<Healthinsurance />}
        />
        <Route exact path="/Industries/Government" element={<Government />} />
        <Route exact path="/Industries/Logistic" element={<Logistic />} />
        <Route exact path="/Industries/Education" element={<Education />} />
        <Route exact path="/Support" element={<Contact />} />
        <Route exact path="/demo" element={<DemoAnimation />} />
        <Route exact path="/Team-Cloudstry" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

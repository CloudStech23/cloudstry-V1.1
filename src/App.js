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
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="App" style={{ zIndex: "2" }}>
          <Menubar />
        </div>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route
            exact
            path="/product/digital-certificate"
            element={<Digitalcertificate />}
          />
          <Route exact path="/product/pet-aadhar" element={<Petadhar />} />
          <Route
            exact
            path="/product/3pl-solution"
            element={<Thirdpartylogistic />}
          />
          <Route
            exact
            path="/solutions/IT-strategy-consultancy"
            element={<Consultancy />}
          />
          <Route
            exact
            path="/solutions/software-services"
            element={<Softwareservices />}
          />
          <Route
            exact
            path="/staffing-solution"
            element={<Staffingsolution />}
          />
          <Route
            exact
            path="/industries/health_and_insurance"
            element={<Healthinsurance />}
          />
          <Route exact path="/industries/government" element={<Government />} />
          <Route exact path="/industries/logistic" element={<Logistic />} />
          <Route exact path="/industries/education" element={<Education />} />
          <Route exact path="/support" element={<Contact />} />
          <Route exact path="/demo" element={<DemoAnimation />} />
          <Route exact path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;

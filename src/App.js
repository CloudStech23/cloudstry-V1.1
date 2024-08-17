import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Menubar from "./Components/Menubar/Menubar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Digitalcertificate from "./Components/Product_Platfrom/Digcert";
import Petadhar from "./Components/Product_Platfrom/Animaladhar";

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

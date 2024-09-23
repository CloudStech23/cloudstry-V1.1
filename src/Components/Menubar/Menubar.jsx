import React, { useState, useRef, useEffect } from "react";
import "../Menubar/Menubar.css";
import { Link, useLocation } from "react-router-dom";
import pagelogo from "../Images/cloudslogo.png";

import Menudrawer from "./Drawer";

function Menubar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState("product");
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openSubsubmenu, setOpenSubsubmenu] = useState(null);
  const location = useLocation();

  // Function to handle submenu toggle
  const handleSubmenuToggle = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu); // Toggle submenu
  };
  const handleSubsubmenuToggle = (submenu) => {
    setOpenSubsubmenu(openSubsubmenu === submenu ? null : submenu); // Toggle nested submenu
  };

  // const drawerClass = open ? "drawer-enter-active" : "drawer-exit-active";

  const handleOpen = () => {
    setOpen(true);
  };

  const handleDropdownClick = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  const handleHover = (item) => {
    setHoveredItem(item);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
      setHoveredItem(null);
    }
  };

  // Reset dropdown state on route change
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setHoveredItem("product");
    // setHoveredItem("education");
  }, [location]);

  return (
    <div>
      <div className="fluid-container">
        <nav
          className="navbar navbar-expand-lg navbar-dark justify-content-between text-white"
          style={{ background: "#1236d0", height: "4.7rem" }}
        >
          <Link className=" navbar-brand mx-3" to="/">
            <img src={pagelogo} className="img-fluid logoimg" alt="Logo" />
          </Link>
          <button
            className="mx-2 navbar-toggler"
            aria-expanded="false"
            onClick={handleOpen}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>

          <Menudrawer open={open} onClose={() => setOpen(false)} />

          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown01"
            ref={dropdownRef}
          >
            <ul className="navbar-nav">
              {/* Menu 1 */}
              <li className="nav-item dropdown position-static   mx-3">
                <Link
                  className={`nav-link  ${
                    openDropdown === "dropdown1" ? "active" : ""
                  }`}
                  to="/"
                  id="navbarDropdown1"
                  role="button"
                  onClick={() => handleDropdownClick("dropdown1")}
                >
                  Home
                </Link>
              </li>

              {/* Menu 2 */}
              <li className="nav-item dropdown position-static mx-3">
                <a
                  className={`nav-link ${
                    openDropdown === "dropdown2" ? "active" : ""
                  }`}
                  id="navbarDropdown2"
                  role="button"
                  onClick={() => handleDropdownClick("dropdown2")}
                >
                  What we do?
                  <span
                    className={`dropdown-arrow ${
                      openDropdown === "dropdown2" ? "open" : ""
                    }`}
                  ></span>
                </a>
                <div
                  className={`dropdown-menu mt-0 w-100 shadow border-outline-success ${
                    openDropdown === "dropdown2" ? "show" : ""
                  }`}
                  aria-labelledby="navbarDropdown2"
                  style={{ height: "320px", background: "#1236d0" }}
                >
                  <div className="row mt-3">
                    <div className="col-lg-3" style={{ marginLeft: "5%" }}>
                      <div className="mt-3" style={{ marginLeft: "5%" }}>
                        {/* <a
                          className={`dropdown-item text-white d-flex h6 align-items-center justify-content-between ${
                            hoveredItem === "overview" ? "active" : ""
                          }`}
                          href="#"
                          onMouseEnter={() => handleHover("overview")}
                        >
                          Overview
                          <span>
                            <i
                              className="fa fa-angle-right "
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                        <div
                          className="dropdown-divider"
                          style={{ borderTop: "1px solid white" }}
                        ></div> */}
                        <a
                          className={`dropdown-item text-white d-flex h6 align-items-center justify-content-between ${
                            hoveredItem === "product" ? "active" : ""
                          }`}
                          href="#"
                          onMouseEnter={() => handleHover("product")}
                        >
                          Product Platform
                          <span>
                            <i
                              className="fa fa-angle-right "
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                        <div
                          className="dropdown-divider"
                          style={{ borderTop: "1px solid white" }}
                        ></div>
                        <a
                          className={`dropdown-item text-white d-flex h6 align-items-center justify-content-between ${
                            hoveredItem === "solution" ? "active" : ""
                          }`}
                          href="#"
                          onMouseEnter={() => handleHover("solution")}
                        >
                          IT-Solutions
                          <span>
                            <i
                              className="fa fa-angle-right "
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>

                        {/* <Link
                          className={`dropdown-item text-white h6 ${
                            hoveredItem === "ISC" ? "active" : ""
                          }`}
                          to="/IT-Strategy-Consultancy"
                          onMouseEnter={() => handleHover("ISC")}
                        >
                          IT Strategy Consultancy
                        </Link> */}
                        <div
                          className="dropdown-divider"
                          style={{ borderTop: "1px solid white" }}
                        ></div>
                        {/* <Link
                          className={`dropdown-item text-white h6 ${
                            hoveredItem === "software" ? "active" : ""
                          }`}
                          onMouseEnter={() => handleHover("software")}
                          to="/Software-Services"
                        >
                          Software Services
                        </Link> */}

                        <Link
                          className={`dropdown-item text-white h6 ${
                            hoveredItem === "staffing" ? "active" : ""
                          }`}
                          onMouseEnter={() => handleHover("staffing")}
                          to="/WhatweDo/Staffing-Solution"
                        >
                          Staffing Solution
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-7 mt-3" style={{ marginLeft: "6%" }}>
                      {hoveredItem === "product" && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            // gap: "2rem",
                          }}
                        >
                          <div>
                            <h3
                              className="text-light fw-normal"
                              style={{ fontSize: "2rem" }}
                            >
                              Empowering Business with a Robust Product
                              Platform.
                            </h3>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "2rem",
                            }}
                          >
                            <Link
                              to="/WhatweDo/Product-Platform/Digital-Certificate"
                              style={{ padding: "0.5rem" }}
                              className="nav-link    menulink"
                            >
                              Digital Certificate
                            </Link>
                            <Link
                              to="/WhatweDo/Product-Platform/Pet-Aadhar"
                              style={{ padding: "0.5rem" }}
                              className="nav-link   menulink"
                            >
                              Pet Aadhar
                            </Link>
                            <Link
                              to="/WhatweDo/Product-Platform/3PL-Solution"
                              style={{ padding: "0.5rem" }}
                              className="nav-link   menulink"
                            >
                              3PL Solution
                            </Link>
                          </div>
                        </div>
                      )}

                      {/* {hoveredItem === "overview" && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "4rem",
                          }}
                        >
                          <div className="">
                            <h3
                              className="text-light fw-normal"
                              style={{
                                fontSize: "1.8rem",
                                whiteSpace: "normal",
                              }}
                            >
                              Cloudstry drives change with innovative technology
                            </h3>
                            <p className="text-light mb-2  lh-lg">
                              Our commitment lies in delivering solutions that
                              are not only effective but also adaptable to the
                              evolving landscape of technology.
                            </p>
                            <Link
                              className="btn btn-danger mt-3 mb-2 rounded-pill px-4 py-2"
                              to="/Support"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      )} */}
                      {hoveredItem === "solution" && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            // gap: "2rem",
                          }}
                        >
                          <div>
                            <h3
                              className="text-light fw-normal"
                              style={{ fontSize: "2rem" }}
                            >
                              IT Solutions for Business Success.
                            </h3>
                            {/* <p className="text-light mb-2 lh-lg">
                              Advanced IT infrastructure, cloud services, and
                              cybersecurity tailored to meet  specific
                              business needs. Comprehensive software
                              development, data management, and networking
                              solutions to ensure seamless operations and
                              enhanced productivity.
                            </p> */}
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "2rem",
                            }}
                          >
                            <Link
                              to="/WhatweDo/IT-Solutions/IT-Strategy-Consultancy"
                              style={{ padding: "0.5rem" }}
                              className="nav-link text-dark menulink"
                            >
                              IT-Strategy-Conusltancy
                            </Link>
                            <Link
                              to="/WhatweDo/IT-Solutions/Software-Services"
                              style={{ padding: "0.5rem" }}
                              className="nav-link text-dark menulink"
                            >
                              Software Services
                            </Link>
                            {/* <Link
                            to="/3PL-Solution"
                            style={{ padding: "0.5rem" }}
                            className="nav-link text-dark menulink"
                          >
                            3PL Solution
                          </Link> */}
                          </div>
                        </div>
                      )}
                      {/* {hoveredItem === "software" && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "4rem",
                          }}
                        >
                          <div className="container-fluid position-relative pb-5 text-light">
                            <div className="row">
                              <div className="col-lg-12 col-md-10 d-flex flex-column justify-content-between position-relative">
                                <h3
                                  className="text-light fw-normal"
                                  style={{ fontSize: "2rem" }}
                                >
                                  Innovative Software Services Tailored to 
                                  Needs.
                                </h3>
                                <p className="text-light mb-2 lh-lg">
                                  Empowering businesses with cutting-edge
                                  software solutions designed to streamline
                                  operations, enhance productivity, and drive
                                  innovation across industries.
                                </p>
                              </div>
                            </div>
                            <Link
                              className="btn btn-danger mt-3 mb-2 rounded-pill px-4 py-2"
                              to="/Software-Services"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      )} */}
                      {hoveredItem === "staffing" && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "4rem",
                          }}
                        >
                          <div className="container-fluid position-relative pb-5 text-light">
                            <div className="row">
                              <div className="col-lg-12 col-md-10 d-flex flex-column justify-content-between position-relative">
                                <h3
                                  className="text-light fw-normal"
                                  style={{ fontSize: "2rem" }}
                                >
                                  Building Teams with Expert Staffing Solutions.
                                </h3>
                                <p className="text-light mb-2 lh-lg">
                                  Connecting top talent with leading companies
                                  through our comprehensive staffing solutions,
                                  tailored to meet the dynamic needs of the
                                  modern workforce
                                </p>
                              </div>
                            </div>
                            <Link
                              className="btn btn-danger mt-3 mb-2 rounded-pill px-4 py-2"
                              to="/WhatweDo/Staffing-Solution"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </li>

              {/* Menu 3 */}
              <li className="nav-item dropdown position-static  mx-3">
                <a
                  className={`nav-link ${
                    openDropdown === "dropdown3" ? "active" : ""
                  }`}
                  id="navbarDropdown3"
                  role="button"
                  onClick={() => handleDropdownClick("dropdown3")}
                >
                  Industries we serve
                  <span
                    className={`dropdown-arrow ${
                      openDropdown === "dropdown3" ? "open" : ""
                    }`}
                  ></span>
                </a>
                <div
                  className={`dropdown-menu mt-0 w-100 shadow   ${
                    openDropdown === "dropdown3" ? "show" : ""
                  }`}
                  aria-labelledby="navbarDropdown3"
                  style={{ height: "320px", background: "#1236d0" }}
                >
                  <div className="row mt-3">
                    <div className="col-lg-3" style={{ marginLeft: "5%" }}>
                      <div className="mt-3" style={{ marginLeft: "5%" }}>
                        <Link
                          className={`dropdown-item text-white h6 ${
                            hoveredItem === "education" ? "active" : ""
                          }`}
                          to="/Industries/Education"
                          onMouseEnter={() => handleHover("education")}
                        >
                          Education
                        </Link>
                        <div
                          className="dropdown-divider"
                          style={{ borderTop: "1px solid white" }}
                        ></div>
                        <Link
                          className={`dropdown-item text-white h6 ${
                            hoveredItem === "govt" ? "active" : ""
                          }`}
                          to="/Industries/Government"
                          onMouseEnter={() => handleHover("govt")}
                        >
                          Government
                        </Link>
                        <div
                          className="dropdown-divider"
                          sstyle={{ borderTop: "1px solid white" }}
                        ></div>
                        <Link
                          className={`dropdown-item text-white h6 ${
                            hoveredItem === "h&i" ? "active" : ""
                          }`}
                          to="/Industries/Health-Insurance"
                          onMouseEnter={() => handleHover("h&i")}
                        >
                          Healthcare Insurance
                        </Link>
                        <div
                          className="dropdown-divider"
                          style={{ borderTop: "1px solid white" }}
                        ></div>
                        <Link
                          className={`dropdown-item text-white h6 ${
                            hoveredItem === "logistic" ? "active" : ""
                          }`}
                          to="/Industries/Logistic"
                          onMouseEnter={() => handleHover("logistic")}
                        >
                          Logistic
                        </Link>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 mt-3"
                      style={{ marginLeft: "6%", textDecoration: "none" }}
                    >
                      {hoveredItem === "education" && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "4rem",
                          }}
                        >
                          <div className="container-fluid position-relative pb-5 text-light">
                            <div className="row">
                              <div className="col-lg-12 col-md-10 d-flex flex-column justify-content-between position-relative">
                                <h3
                                  className="text-light fw-normal"
                                  style={{ fontSize: "1.8rem" }}
                                >
                                  Shaping the Future with Quality Education
                                  Solutions.
                                </h3>
                                <p className="text-light mb-2 lh-lg">
                                  Explore our range of solutions tailored to the
                                  educational sector, designed to enhance
                                  learning experiences and administrative
                                  efficiency.
                                </p>
                              </div>
                            </div>
                            <Link
                              className="btn btn-danger mt-3 mb-2 rounded-pill px-4 py-2"
                              to="/Industries/Education"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      )}
                      {hoveredItem === "govt" && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "4rem",
                          }}
                        >
                          <div className="container-fluid position-relative pb-5 text-light">
                            <div className="row">
                              <div className="col-lg-12 col-md-10 d-flex flex-column justify-content-between position-relative">
                                <h3
                                  className="text-light fw-normal"
                                  style={{ fontSize: "1.8rem" }}
                                >
                                  Partnering with Government for Effective
                                  Solutions.
                                </h3>
                                <p className="text-light mb-2 lh-lg">
                                  Partnering with government agencies to deliver
                                  robust, scalable solutions that address
                                  critical public sector challenges and enhance
                                  service delivery
                                </p>
                              </div>
                            </div>
                            <Link
                              className="btn btn-danger mt-3 mb-2 rounded-pill px-4 py-2"
                              to="/Industries/Government"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      )}
                      {hoveredItem === "h&i" && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "4rem",
                          }}
                        >
                          <div className="container-fluid position-relative pb-5 text-light">
                            <div className="row">
                              <div className="col-lg-12 col-md-10 d-flex flex-column justify-content-between position-relative">
                                <h3
                                  className="text-light fw-normal"
                                  style={{ fontSize: "1.7rem" }}
                                >
                                  Ensuring Wellness with Healthcare and
                                  Insurance Solutions.
                                </h3>
                                <p className="text-light mb-2 lh-lg">
                                  Discover our solutions aimed at improving
                                  healthcare delivery, patient management, and
                                  administrative processes in the health sector.
                                </p>
                              </div>
                            </div>
                            <Link
                              className="btn btn-danger mt-3 mb-2 rounded-pill px-4 py-2"
                              to="/Industries/Health-Insurance"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      )}
                      {hoveredItem === "logistic" && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "4rem",
                          }}
                        >
                          <div className="container-fluid position-relative pb-5 text-light">
                            <div className="row">
                              <div className="col-lg-12 col-md-10 d-flex flex-column justify-content-between position-relative">
                                <h3
                                  className="text-light fw-normal col-12"
                                  style={{ fontSize: "1.7rem" }}
                                >
                                  Streamlining Operations with Advanced
                                  Logistics Solutions.
                                </h3>
                                <p className="text-light mb-2 lh-lg">
                                  Optimizing supply chain management and
                                  logistics operations with innovative solutions
                                  that ensure efficiency, reliability, and
                                  seamless global connectivity
                                </p>
                              </div>
                            </div>
                            <Link
                              className="btn btn-danger mt-3 mb-2 rounded-pill px-4 py-2"
                              to="/Industries/Logistic"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </li>

              {/* Menu 4 */}
              {/* Similar structure to Menu 2 and Menu 3 */}

              <li className="nav-item dropdown position-static   mx-3">
                <Link
                  className={`nav-link  ${
                    openDropdown === "dropdown4" ? "active" : ""
                  }`}
                  to="/Team-Cloudstry"
                  id="navbarDropdown4"
                  role="button"
                  onClick={() => handleDropdownClick("dropdown4")}
                >
                  Meet Leadership
                </Link>
              </li>
              <li className="nav-item dropdown position-static   mx-3">
                <Link
                  className={`nav-link  ${
                    openDropdown === "dropdown5" ? "active" : ""
                  }`}
                  to="/Support"
                  id="navbarDropdown5"
                  role="button"
                  onClick={() => handleDropdownClick("dropdown5")}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menubar;

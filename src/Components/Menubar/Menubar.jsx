import React, { useState, useRef, useEffect } from "react";
import "../Menubar/Menubar.css";
import { Link } from "react-router-dom";

function Menubar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const dropdownRef = useRef(null);

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="fluid-container">
        <nav
          className="navbar navbar-expand-lg navbar-dark justify-content-between text-white"
          style={{ background: "#1a232e",height:'4.4rem' }}
        >
          <a className="navbar-brand mx-3" href="#">
            MetroXone tech
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown01"
            aria-controls="navbarNavDropdown01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ outlineColor: "#fff" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <button className="mx-2 navbar-toggler" aria-expanded='false' onClick={(()=>alert('hello'))}>primary</button>

          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown01"
            ref={dropdownRef}
          >
            <ul className="navbar-nav">
              {/* Menu 1 */}
              <li className="nav-item dropdown position-static mx-3">
                <Link
                  className={`nav-link ${
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
                  style={{ height: "320px" }}
                >
                  <div className="row mt-3">
                    <div className="col-lg-3" style={{ marginLeft: "5%" }}>
                      <div className="mt-3" style={{ marginLeft: "5%" }}>
                        <a
                          className={`dropdown-item ${
                            hoveredItem === "product" ? "active" : ""
                          }`}
                          href="#"
                          onMouseEnter={() => handleHover("product")}
                        >
                          Product Platform
                        </a>
                        <div
                          className="dropdown-divider"
                          style={{ borderTop: "1px solid black" }}
                        ></div>
                        <Link
                          className={`dropdown-item ${
                            hoveredItem === "strategy" ? "active" : ""
                          }`}
                          to="/"
                          // onMouseEnter={() => handleHover("strategy")}
                        >
                          IT Strategy Consultancy
                        </Link>
                        <div
                          className="dropdown-divider"
                          style={{ borderTop: "1px solid black" }}
                        ></div>
                        <Link
                          className={`dropdown-item ${
                            hoveredItem === "software" ? "active" : ""
                          }`}
                          href="#"
                          // onMouseEnter={() => handleHover("software")}
                        >
                          Software Services
                        </Link>
                        <div
                          className="dropdown-divider"
                          style={{ borderTop: "1px solid black" }}
                        ></div>
                        <Link
                          className={`dropdown-item ${
                            hoveredItem === "staffing" ? "active" : ""
                          }`}
                          href="#"
                          // onMouseEnter={() => handleHover("staffing")}
                        >
                          Staffing Solution
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-4 mt-3" style={{ marginLeft: "6%",textDecoration:'none' }}>
                      {hoveredItem === "product" && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "4rem",
                          }}
                        >
                          <Link to="/" style={{ padding: "0.5rem" }} className="nav-link text-dark">
                            Digital Certificate
                          </Link>
                          <Link style={{ padding: "0.5rem" }} className="nav-link text-dark">Pet Adhar</Link>
                          <Link style={{ padding: "0.5rem" }} className="nav-link text-dark">3PL Solution</Link>
                        </div>
                      )}
                       
                       
                    </div>
                  </div>
                </div>
              </li>

              {/* Menu 3 */}
              {/* Similar to Menu 2, adjust content based on hover */}
              <li className="nav-item dropdown position-static mx-3">
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
                  className={`dropdown-menu mt-0 w-100 shadow border-outline-success ${
                    openDropdown === "dropdown3" ? "show" : ""
                  }`}
                  aria-labelledby="navbarDropdown3"
                  style={{ height: "320px" }}
                >
                  <div className="row mt-3">
                    <div className="col-lg-3" style={{ marginLeft: "5%" }}>
                      <div className="mt-3" style={{ marginLeft: "5%" }}>
                        <a
                          className={`dropdown-item ${
                            hoveredItem === "action3" ? "active" : ""
                          }`}
                          href="#"
                          onMouseEnter={() => handleHover("action3")}
                        >
                          Education 
                        </a>
                        <div
                          className="dropdown-divider"
                          style={{ borderTop: "1px solid black" }}
                        ></div>
                        <a
                          className={`dropdown-item ${
                            hoveredItem === "another3" ? "active" : ""
                          }`}
                          href="#"
                          onMouseEnter={() => handleHover("another3")}
                        >
                          Government
                        </a>
                        <div
                          className="dropdown-divider"
                          style={{ borderTop: "1px solid black" }}
                        ></div>
                        <a
                          className={`dropdown-item ${
                            hoveredItem === "something3" ? "active" : ""
                          }`}
                          href="#"
                          onMouseEnter={() => handleHover("something3")}
                        >
                          Healthcare and Insurance
                        </a>
                        <div
                          className="dropdown-divider"
                          style={{ borderTop: "1px solid black" }}
                        ></div>
                        <Link
                          className={`dropdown-item ${
                            hoveredItem === "something4" ? "active" : ""
                          }`}
                          to='/uday'
                          onMouseEnter={() => handleHover("something4")}
                        >
                          Logistic
                        </Link>
                      </div>
                    </div>
                    {/* <div className="col-lg-4 mt-3 mx-3">
                      {hoveredItem === "action3" && (
                        <div>Content for Action 3</div>
                      )}
                      {hoveredItem === "another3" && (
                        <div>Content for Another action 3</div>
                      )}
                      {hoveredItem === "something3" && (
                        <div>Content for Something else here 3</div>
                      )}
                    </div> */}
                  </div>
                </div>
              </li>

              {/* Menu 4 */}
              {/* Similar structure to Menu 2 and Menu 3 */}




              {/* <li className="nav-item dropdown position-static mx-3">
                <a
                  className={`nav-link ${
                    openDropdown === "dropdown4" ? "active" : ""
                  }`}
                  href="#"
                  id="navbarDropdown4"
                  role="button"
                  onClick={() => handleDropdownClick("dropdown4")}
                >
                  abc
                  <span
                    className={`dropdown-arrow ${
                      openDropdown === "dropdown4" ? "open" : ""
                    }`}
                  ></span>
                </a>
                <div
                  className={`dropdown-menu mt-0 w-100 shadow border-outline-success ${
                    openDropdown === "dropdown4" ? "show" : ""
                  }`}
                  aria-labelledby="navbarDropdown4"
                  style={{ height: "320px" }}
                >
                  <div className="row mt-3">
                    <div className="col-lg-3" style={{ marginLeft: "5%" }}>
                      <div className="mt-3" style={{ marginLeft: "5%" }}>
                        <a
                          className={`dropdown-item ${
                            hoveredItem === "action4" ? "active" : ""
                          }`}
                          href="#"
                          onMouseEnter={() => handleHover("action4")}
                        >
                          Action 4
                        </a>
                        <div
                          className="dropdown-divider"
                          style={{ borderTop: "1px solid black" }}
                        ></div>
                        <a
                          className={`dropdown-item ${
                            hoveredItem === "another4" ? "active" : ""
                          }`}
                          href="#"
                          onMouseEnter={() => handleHover("another4")}
                        >
                          Another action 4
                        </a>
                        <div
                          className="dropdown-divider"
                          style={{ borderTop: "1px solid black" }}
                        ></div>
                        <a
                          className={`dropdown-item ${
                            hoveredItem === "something4" ? "active" : ""
                          }`}
                          href="#"
                          onMouseEnter={() => handleHover("something4")}
                        >
                          Something else here 4
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 mt-3 mx-3">
                      {hoveredItem === "action4" && (
                        <div>Content for Action 4</div>
                      )}
                      {hoveredItem === "another4" && (
                        <div>Content for Another action 4</div>
                      )}
                      {hoveredItem === "something4" && (
                        <div>Content for Something else here 4</div>
                      )}
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>

            {/* <li
              class=" nav-item ms-auto "
              type="submit"
            >
              contact us
            </li> */}
            <li
              class=" nav-item mx-5 ms-auto dropdown position-static"
              type="submit"
            >
              Contact us
            </li>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menubar;

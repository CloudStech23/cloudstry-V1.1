import React, { useState, useRef, useEffect } from "react";
import "../Menubar/Menubar.css";
import { Link } from "react-router-dom";
import { Drawer, Button, Nav } from "rsuite";
import { CSSTransition } from "react-transition-group";

function Menubar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  const placement = "right";
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openSubsubmenu, setOpenSubsubmenu] = useState(null);

  // Function to handle submenu toggle
  const handleSubmenuToggle = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu); // Toggle submenu
  };
  const handleSubsubmenuToggle = (submenu) => {
    setOpenSubsubmenu(openSubsubmenu === submenu ? null : submenu); // Toggle nested submenu
  };

  const drawerClass = open ? 'drawer-enter-active' : 'drawer-exit-active';

  const handleOpen = (value) => {
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
          style={{ background: "#3b82f6", height: "4.4rem" }}
        >
          <a className="navbar-brand mx-3" href="#">
            MetroXone tech
          </a>
          <button
            className="mx-2 navbar-toggler"
            aria-expanded="false"
            onClick={handleOpen}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>

          <CSSTransition
      in={open}
      timeout={300}
      classNames="drawer"
      unmountOnExit
    >
      <Drawer
        size="19.5rem"
        placement={placement}
        open={open}
        onClose={() => setOpen(false)}
        className="bg-dark"
        style={{backgroundColor:'#3b82f6'}}
      >
        <Drawer.Header className="text-light">
          <Drawer.Title className="text-light">MetroXone tech</Drawer.Title>
          {/* <Drawer.Actions>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Drawer.Actions> */}
        </Drawer.Header>
        <Drawer.Body>
          <Nav vertical>

          <Nav.Item
              className="text-light"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
              }}
              
            >
              Home
               
            </Nav.Item>


            <Nav.Item
              className="text-light"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
              }}
              onClick={() => handleSubmenuToggle('daily-tasks')}
            >
              What We Do?
              <i
                className={`fa ${
                  openSubmenu === 'daily-tasks'
                    ? 'fa-chevron-up'
                    : 'fa-chevron-down'
                }`}
                style={{ marginLeft: 'auto' }}
              ></i>
            </Nav.Item>
            {openSubmenu === 'daily-tasks' && (
              <Nav className="ms-3" style={{ paddingLeft: '1rem', paddingTop: '0.5rem' }}>
                <Nav.Item
                  href="#subtask1"
                  className="text-light"
                  style={{
                    padding: '.5rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleSubsubmenuToggle('subtask1')}
                >
                  Product Platform
                  <i
                    className={`fa ${
                      openSubsubmenu === 'subtask1'
                        ? 'fa-chevron-up'
                        : 'fa-chevron-down'
                    }`}
                    style={{ marginLeft: '.5rem ' }}
                  ></i>
                </Nav.Item>
                {openSubsubmenu === 'subtask1' && (
                  <Nav className="ms-3" style={{ paddingLeft: '1rem', paddingTop: '0.5rem' }}>
                    <Nav.Item href="#subtask1-1" className="text-light" style={{ padding: '0.5rem 1rem' }}>
                      Digital Certificate
                    </Nav.Item> <br />
                    <Nav.Item href="#subtask1-2" className="text-light" style={{ padding: '0.5rem 1rem' }}>
                      Pet Adhar
                    </Nav.Item> <br />
                    <Nav.Item href="#subtask1-2" className="text-light" style={{ padding: '0.5rem 1rem' }}>
                      3PL Solution
                    </Nav.Item>
                  </Nav>
                )}
                <Nav.Item href="#subtask2" className="text-light" style={{ padding: '0.5rem 1rem' }}>
                  It Strategy Consultancy
                </Nav.Item> <br />
                <Nav.Item href="#subtask2" className="text-light" style={{ padding: '0.5rem 1rem' }}>
                  Software Services
                </Nav.Item> <br />
                <Nav.Item href="#subtask2" className="text-light" style={{ padding: '0.5rem 1rem' }}>
                  Staffing Solution
                </Nav.Item>
              </Nav>
            )}
            <Nav.Item
              className="text-light"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
              }}
              onClick={() => handleSubmenuToggle('todays-task')}
            >
            Industries We Serve
              <i
                className={`fa ${
                  openSubmenu === 'todays-task'
                    ? 'fa-chevron-up'
                    : 'fa-chevron-down'
                }`}
                style={{ marginLeft: '.5rem' }}
              ></i>
            </Nav.Item>
            {openSubmenu === 'todays-task' && (
              <Nav className="ms-3" style={{ paddingLeft: '1rem', paddingTop: '0.5rem' }}>
                <Nav.Item href="#subtask3" className="text-light" style={{ padding: '0.5rem 1rem' }}>
                  Education
                </Nav.Item> <br />
                <Nav.Item href="#subtask4" className="text-light" style={{ padding: '0.5rem 1rem' }}>
                  Government
                </Nav.Item> <br />
                <Nav.Item href="#subtask4" className="text-light" style={{ padding: '0.5rem 1rem' }}>
                  Healthcare & Insurance
                </Nav.Item> <br />
                <Nav.Item href="#subtask4" className="text-light" style={{ padding: '0.5rem 1rem' }}>
                  Logistic
                </Nav.Item>
              </Nav>
            )}
            {/* <Nav.Item
              className="text-light"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
              }}
              onClick={() => handleSubmenuToggle('my-note')}
            >
              My Note
              <i
                className={`fa ${
                  openSubmenu === 'my-note'
                    ? 'fa-chevron-up'
                    : 'fa-chevron-down'
                }`}
                style={{ marginLeft: 'auto' }}
              ></i>
            </Nav.Item>
            {openSubmenu === 'my-note' && (
              <Nav className="ms-3" style={{ paddingLeft: '1rem', paddingTop: '0.5rem' }}>
                <Nav.Item href="#note1" className="text-light" style={{ padding: '0.5rem 1rem' }}>
                  Note 1
                </Nav.Item> <br />
                <Nav.Item href="#note2" className="text-light" style={{ padding: '0.5rem 1rem' }}>
                  Note 2
                </Nav.Item>
              </Nav>
            )} */}
            <Nav.Item
              className="text-light"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
              }}
              
            >
              Support                
            </Nav.Item>
            
          </Nav>
        </Drawer.Body>
      </Drawer>
    </CSSTransition>

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
                        >
                          Staffing Solution
                        </Link>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 mt-3"
                      style={{ marginLeft: "6%", textDecoration: "none" }}
                    >
                      {hoveredItem === "product" && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "4rem",
                          }}
                        >
                          <Link
                            to="/Digital-Certificate"
                            style={{ padding: "0.5rem" }}
                            className="nav-link text-dark"
                          >
                            Digital Certificate
                          </Link>
                          <Link
                            to="/Pet-Aadhar"
                            style={{ padding: "0.5rem" }}
                            className="nav-link text-dark"
                          >
                            Pet Adhar
                          </Link>
                          <Link
                            style={{ padding: "0.5rem" }}
                            className="nav-link text-dark"
                          >
                            3PL Solution
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </li>

              {/* Menu 3 */}
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
                          to="/uday"
                          onMouseEnter={() => handleHover("something4")}
                        >
                          Logistic
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Menu 4 */}
              {/* Similar structure to Menu 2 and Menu 3 */}

              <li className="nav-item mx-5 ms-auto">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menubar;

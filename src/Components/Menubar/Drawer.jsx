import React, { useState } from 'react';
import { CSSTransition } from "react-transition-group";
import { Drawer, Nav } from "rsuite";
import "../Menubar/Menubar.css";
import pagelogo from "../Images/cloudslogo.png";
import { Link, NavLink } from 'react-router-dom';

function Menudrawer({ open, onClose }) {

  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openSubsubmenu, setOpenSubsubmenu] = useState(null);
  const placement = 'right';

  // Function to handle submenu toggle
  const handleSubmenuToggle = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu); // Toggle submenu
  };

  const handleSubsubmenuToggle = (submenu) => {
    setOpenSubsubmenu(openSubsubmenu === submenu ? null : submenu); // Toggle nested submenu
  };

  // Function to handle navigation link click and close the drawer
  const handleNavLinkClick = () => {
    onClose();
  };

  return (
    <CSSTransition
      in={open}
      timeout={300}
      classNames="drawer"
      unmountOnExit
    >
      <Drawer
        size="20.5rem"
        placement={placement}
        open={open}
        onClose={onClose}
        className="drawer-custom"
      >
        <Drawer.Header className="drawer-header" style={{background:'#1236d0'}}>
          <Drawer.Title className="drawer-title">
            <Link className="navbar-brand mx-3" to="/" onClick={handleNavLinkClick}>
              <img
                src={pagelogo}
                className="img-fluid logoimg"
                alt="Logo"
              />
            </Link>
          </Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="drawer-body" style={{background:'#1236d0'}}>
          <Nav vertical>
            <Nav.Item className="nav-item text-white" as={NavLink} to='/' onClick={handleNavLinkClick}>
              Home
            </Nav.Item>

            <Nav.Item
              className="nav-item text-white"
              onClick={() => handleSubmenuToggle("what-we-do")}
            >
              What We Do?
              <i
                className={`fa ${openSubmenu === "what-we-do" ? "fa-chevron-up" : "fa-chevron-down"}`}
                style={{ marginLeft: "auto" }}
              ></i>
            </Nav.Item>

            {openSubmenu === "what-we-do" && (
              <Nav className="submenu">
                <Nav.Item
                  className="nav-item text-white"
                  onClick={() => handleSubsubmenuToggle("product")}
                >
                  Product Platform
                  <i
                    className={`fa ${openSubsubmenu === "product" ? "fa-chevron-up" : "fa-chevron-down"}`}
                    style={{ marginLeft: ".5rem" }}
                  ></i>
                </Nav.Item> <br />

                {openSubsubmenu === "product" && (
                  <Nav className="submenu shadow">
                    <Nav.Item as={NavLink} to='/Digital-Certificate' className="nav-item text-white" onClick={handleNavLinkClick}>
                      Digital Certificate
                    </Nav.Item>
                    <br />
                    <Nav.Item as={NavLink} to='/Pet-Aadhar' className="nav-item text-white" onClick={handleNavLinkClick}>
                      Pet Aadhar
                    </Nav.Item>
                    <br />
                    <Nav.Item as={NavLink} to='/3PL-Solution' className="nav-item text-white" onClick={handleNavLinkClick}>
                      3PL Solution
                    </Nav.Item>
                  </Nav>
                )}
                <Nav.Item
                  className="nav-item text-white"
                  onClick={() => handleSubsubmenuToggle("solution")}
                >
                  IT-Solutions
                  <i
                    className={`fa ${openSubsubmenu === "solution" ? "fa-chevron-up" : "fa-chevron-down"}`}
                    style={{ marginLeft: ".5rem" }}
                  ></i>
                </Nav.Item>
                {openSubsubmenu === "solution" && (
                  <Nav className="submenu shadow">
                    <Nav.Item as={NavLink} to='/IT-Strategy-Consultancy' className="nav-item text-white" onClick={handleNavLinkClick}>
                      IT Strategy Consultancy
                    </Nav.Item>
                    <br />
                    <Nav.Item as={NavLink} to='/Software-Services' className="nav-item text-white" onClick={handleNavLinkClick}>
                      Software Services
                    </Nav.Item>
                    <br />
                  </Nav>
                )}
                <br />
                <Nav.Item as={NavLink} to='/Staffing-Solution' className="nav-item text-white" onClick={handleNavLinkClick}>
                  Staffing Solution
                </Nav.Item>
              </Nav>
            )}

            <Nav.Item
              className="nav-item text-white"
              onClick={() => handleSubmenuToggle("todays-task")}
            >
              Industries We Serve
              <i
                className={`fa ${openSubmenu === "todays-task" ? "fa-chevron-up" : "fa-chevron-down"}`}
                style={{ marginLeft: ".5rem" }}
              ></i>
            </Nav.Item>

            {openSubmenu === "todays-task" && (
              <Nav className="submenu shadow">
                <Nav.Item as={NavLink} to='/Education' className="nav-item text-white" onClick={handleNavLinkClick}>
                  Education
                </Nav.Item>
                <br />
                <Nav.Item as={NavLink} to='/Government' className="nav-item text-white" onClick={handleNavLinkClick}>
                  Government
                </Nav.Item>
                <br />
                <Nav.Item as={NavLink} to='/Health&Insurance' className="nav-item text-white" onClick={handleNavLinkClick}>
                  Healthcare & Insurance
                </Nav.Item>
                <br />
                <Nav.Item as={NavLink} to='/Logistic' className="nav-item text-white" onClick={handleNavLinkClick}>
                  Logistic
                </Nav.Item>
              </Nav>
            )}

            <Nav.Item className="nav-item text-white menulink2" as={NavLink} to='/Team-Cloudstry' onClick={handleNavLinkClick}>
              Meet Leadership
            </Nav.Item>
            <Nav.Item className="nav-item text-white menulink2" as={NavLink} to='/Support' onClick={handleNavLinkClick}>
              Contact us
            </Nav.Item>
          </Nav>
        </Drawer.Body>
      </Drawer>
    </CSSTransition>
  );
}

export default Menudrawer;

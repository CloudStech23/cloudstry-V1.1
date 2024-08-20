// import React from 'react'
import { CSSTransition } from "react-transition-group";
import { Drawer,  Nav } from "rsuite";
import "../Menubar/Menubar.css";
import React,{useState} from "react";
// import { Link, useLocation } from "react-router-dom";

function Menudrawer(handleOpen) {

   
    const [open, setOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [openSubsubmenu, setOpenSubsubmenu] = useState(null);
    const placement = 'Right'
    // Function to handle submenu toggle
    const handleSubmenuToggle = (menu) => {
        setOpenSubmenu(openSubmenu === menu ? null : menu); // Toggle submenu
      };
      const handleSubsubmenuToggle = (submenu) => {
        setOpenSubsubmenu(openSubsubmenu === submenu ? null : submenu); // Toggle nested submenu
      };
      
    
       
      
    
       
  return (
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
              // style={{ backgroundColor: "#3b82f6" }}
            >
              <Drawer.Header className="text-light">
                <Drawer.Title className="text-light">
                  MetroXone tech
                </Drawer.Title>
                {/* <Drawer.Actions>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Drawer.Actions> */}
              </Drawer.Header>
              <Drawer.Body>
                <Nav vertical>
                  <Nav.Item
                    className="text-light"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0.5rem 1rem",
                      cursor: "pointer",
                    }}
                  >
                    Home
                  </Nav.Item>

                  <Nav.Item
                    className="text-light"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0.5rem 1rem",
                      cursor: "pointer",
                    }}
                    onClick={() => handleSubmenuToggle("daily-tasks")}
                  >
                    What We Do?
                    <i
                      className={`fa ${
                        openSubmenu === "daily-tasks"
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      }`}
                      style={{ marginLeft: "auto" }}
                    ></i>
                  </Nav.Item>
                  {openSubmenu === "daily-tasks" && (
                    <Nav
                      className="ms-3"
                      style={{ paddingLeft: "1rem", paddingTop: "0.5rem" }}
                    >
                      <Nav.Item
                        href="#subtask1"
                        className="text-light"
                        style={{
                          padding: ".5rem 1rem",
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => handleSubsubmenuToggle("subtask1")}
                      >
                        Product Platform
                        <i
                          className={`fa ${
                            openSubsubmenu === "subtask1"
                              ? "fa-chevron-up"
                              : "fa-chevron-down"
                          }`}
                          style={{ marginLeft: ".5rem " }}
                        ></i>
                      </Nav.Item>
                      {openSubsubmenu === "subtask1" && (
                        <Nav
                          className="ms-3"
                          style={{ paddingLeft: "1rem", paddingTop: "0.5rem" }}
                        >
                          <Nav.Item
                            href="#subtask1-1"
                            className="text-light"
                            style={{ padding: "0.5rem 1rem" }}
                          >
                            Digital Certificate
                          </Nav.Item>{" "}
                          <br />
                          <Nav.Item
                            href="#subtask1-2"
                            className="text-light"
                            style={{ padding: "0.5rem 1rem" }}
                          >
                            Pet Adhar
                          </Nav.Item>{" "}
                          <br />
                          <Nav.Item
                            href="#subtask1-2"
                            className="text-light"
                            style={{ padding: "0.5rem 1rem" }}
                          >
                            3PL Solution
                          </Nav.Item>
                        </Nav>
                      )}
                      <Nav.Item
                        href="#subtask2"
                        className="text-light"
                        style={{ padding: "0.5rem 1rem" }}
                      >
                        It Strategy Consultancy
                      </Nav.Item>{" "}
                      <br />
                      <Nav.Item
                        href="#subtask2"
                        className="text-light"
                        style={{ padding: "0.5rem 1rem" }}
                      >
                        Software Services
                      </Nav.Item>{" "}
                      <br />
                      <Nav.Item
                        href="#subtask2"
                        className="text-light"
                        style={{ padding: "0.5rem 1rem" }}
                      >
                        Staffing Solution
                      </Nav.Item>
                    </Nav>
                  )}
                  <Nav.Item
                    className="text-light"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0.5rem 1rem",
                      cursor: "pointer",
                    }}
                    onClick={() => handleSubmenuToggle("todays-task")}
                  >
                    Industries We Serve
                    <i
                      className={`fa ${
                        openSubmenu === "todays-task"
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      }`}
                      style={{ marginLeft: ".5rem" }}
                    ></i>
                  </Nav.Item>
                  {openSubmenu === "todays-task" && (
                    <Nav
                      className="ms-3"
                      style={{ paddingLeft: "1rem", paddingTop: "0.5rem" }}
                    >
                      <Nav.Item
                        href="#subtask3"
                        className="text-light"
                        style={{ padding: "0.5rem 1rem", color: "white" }}
                      >
                        Education
                      </Nav.Item>{" "}
                      <br />
                      <Nav.Item
                        href="#subtask4"
                        className="text-light"
                        style={{ padding: "0.5rem 1rem" }}
                      >
                        Government
                      </Nav.Item>{" "}
                      <br />
                      <Nav.Item
                        href="#subtask4"
                        className="text-light"
                        style={{ padding: "0.5rem 1rem" }}
                      >
                        Healthcare & Insurance
                      </Nav.Item>{" "}
                      <br />
                      <Nav.Item
                        href="#subtask4"
                        className="text-light"
                        style={{ padding: "0.5rem 1rem" }}
                      >
                        Logistic
                      </Nav.Item>
                    </Nav>
                  )}

                  <Nav.Item
                    className="text-light"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0.5rem 1rem",
                      cursor: "pointer",
                    }}
                  >
                    Support
                  </Nav.Item>
                </Nav>
              </Drawer.Body>
            </Drawer>
          </CSSTransition>
  )
}

export default Menudrawer
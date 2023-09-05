// Import your Product and Admin components here

import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import "./DropDownMenu.css";
import "../App.css";
import Admin from "./Admin";
import Csv from "./Csv"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Insurance",
      icon: <HomeIcon />,
    },
    {
      text: "Health Insurance",
      icon: <InfoIcon />,
    },
    {
      text: "Car Insurance",
      icon: <CommentRoundedIcon />,
    },
  ];

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} style={{ width: 175, height: 55 }} alt="" />
      </div>
      <div className="navbar-links-container">
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleMenu}>
            Car Insurance
          </button>
          <div className={`dropdown-content ${openMenu ? "show" : ""}`}>
          <ul>
        <li>
          <Link to="/product">Csv</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
          </div>
        </div>
        <button className="primary-button">Login/Signup</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={toggleMenu} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Router>
      <Switch>
        <Route path="/product" component={Csv} />
        <Route path="/admin" component={Admin} />
      </Switch>
      </Router>
    </nav>
  );
};

export default Navbar;

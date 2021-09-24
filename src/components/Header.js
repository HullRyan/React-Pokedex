import React from "react";
import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import TextField from "@material-ui/core/TextField";

const Header = ({ isHome, text, filterChange }) => {

  return (
    <div>
        <AppBar position="static">
          <Toolbar>
            <NavLink to="/">
              <IconButton>
                <HomeIcon />
              </IconButton>
            </NavLink>
            <div>
              <SearchIcon />
              <TextField onChange={filterChange} placeholder="Search" />
            </div>
          </Toolbar>
        </AppBar>
    </div>
  );
};

Header.propTypes = {
  isHome: PropTypes.bool,
  text: PropTypes.string,
  filter: PropTypes.string,
  filterChange: PropTypes.func,
};

Header.defaultProps = {
  isHome: false,
  text: "",
  filter: "",
  filterChange: () => {},
};

export default Header;

import React from "react";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import Logo from "./my_unsplash_logo.svg";

function Navbar() {
  return (
    <div className="main">
      <img src={Logo} alt="Logo of the app" />
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <Button type="button" className="btn btn-primary">
        Add a Photo
      </Button>
    </div>
  );
}

export default Navbar;

import React from "react";
import { useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import Logo from "./my_unsplash_logo.svg";
import MainContext from "../context/MainContext";

function Navbar() {
  const { search, setSearch } = useContext(MainContext);
  return (
    <div className="main">
      <img src={Logo} alt="Logo of the app" />
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(search);
          }}
        />
      </div>
      <Button type="button" className="btn btn-primary">
        Add a Photo
      </Button>
    </div>
  );
}

export default Navbar;

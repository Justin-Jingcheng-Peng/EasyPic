import { TextField } from "@mui/material";
import React, { useContext } from "react";
import MainContext from "../context/MainContext";
import AddPhotoModal from "./AddPhotoModal";
import Logo from "./my_unsplash_logo.svg";

function Navbar() {
  const { search, setSearch } = useContext(MainContext);
  const handleSubmit = (photoLabel, photoUrl) =>
    console.log(`Label: ${photoLabel}; URL: ${photoUrl}`);
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
      <AddPhotoModal onSubmit={handleSubmit} />
    </div>
  );
}

export default Navbar;

import { TextField } from "@mui/material";
import React from "react";
import AddPhotoModal from "./AddPhotoModal";
import Logo from "./my_unsplash_logo.svg";

export default class Navbar extends React.Component {
  render() {
    const { searchQuery, onSearchQueryChange, onSubmit } = this.props;
    return (
      <>
        <div className="navbar">
          <div className="logo">
            <img src={Logo} alt="Logo of the app" />
          </div>
          <div className="search">
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="searchQuery"
              size="small"
              fullWidth
              label="Search"
              value={searchQuery}
              onChange={(e) => {
                onSearchQueryChange(e);
              }}
            />
          </div>
          <AddPhotoModal onSubmit={onSubmit} />
        </div>
      </>
    );
  }
}

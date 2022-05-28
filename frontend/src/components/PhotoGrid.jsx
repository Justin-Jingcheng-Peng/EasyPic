import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useContext } from "react";
import MainContext from "../context/MainContext";
import Axios from "axios";
import Button from "react-bootstrap/Button";

export default function App() {
  const { allpics, setAllpics } = useContext(MainContext);
  const refreshDB = () => {
    Axios.get(`/pictures`).then((response) => {
      setAllpics(response.data.users);
    });
  };
  return (
    <div className="main">
      <Button onClick={refreshDB}>Refresh DB</Button>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {allpics
          .filter((name) => name.title.includes("Item"))
          .map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
      </ImageList>
    </div>
  );
}

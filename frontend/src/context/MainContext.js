import axios from "axios";
import { createContext, useState } from "react";
import { baseUrl } from "../constants";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  //This global state is to track if the app is in "edit" mode;

  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState([]);
  const refreshPhotos = () => {
    axios
      .get(`${baseUrl}/api/photos/`)
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <MainContext.Provider
      value={{
        search,
        setSearch,
        photos,
        setPhotos,
        refreshPhotos,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;

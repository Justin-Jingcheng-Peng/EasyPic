import { createContext, useState } from "react";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  //This global state is to track if the app is in "edit" mode;

  const [search, setSearch] = useState("");
  const [allpics, setAllpics] = useState([]);

  return (
    <MainContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;

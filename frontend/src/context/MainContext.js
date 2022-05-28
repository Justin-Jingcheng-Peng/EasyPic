import { createContext, useState } from "react";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  //This global state is to track if the app is in "edit" mode;

  const [search, setSearch] = useState("");
  const [allpics, setAllpics] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MainContext.Provider
      value={{
        search,
        setSearch,
        allpics,
        setAllpics,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;

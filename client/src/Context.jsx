import React, { useContext, useState } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [sidebar, setSidebar] = useState("dashboard");
  return (
    <UserContext.Provider value={{ data, setData, sidebar, setSidebar }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

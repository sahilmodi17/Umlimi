import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [sidebar, setSidebar] = useState("dashboard");
  const [searchName, setSearchName] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [userId, setUserId] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const [filteredUser, setFilteredUser] = useState([])
  

  const [allOrders, setAllOrders] = useState([]);


  const searchproduct = async () => {
    console.log(searchName);

    if (searchName == "") {
      setIsSearch(false);
      setSearchData([]);
    } else {
      setIsSearch(true);

      try {
        const { data } = await axios.post("/api/v1/admin/searchproduct", {
          name: searchName,
        });

        setSearchData(data.products);
        console.log(data);
        console.log(data.products);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const allProduct = async () => {
    try {
      const { data } = await axios.get("/api/v1/admin/getAllProducts");
      setAllData(data.products);
      // console.log(data)
      // console.log(data.products)
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   searchproduct()
  // }, [searchName])

  return (
    <UserContext.Provider
      value={{
        data,
        otp,
        setOTP,
        setData,
        sidebar,
        setSidebar,
        searchData,
        setSearchData,
        searchName,
        setSearchName,
        isSearch,
        setIsSearch,
        searchproduct,
        email,
        setEmail,
        category,
        setCategory,
        categoryData,
        setCategoryData,
        allProduct,
        allData,
        setAllData,
        searchTerm,
        setSearchTerm,
        allProducts,
        setAllProducts,
        userId,
        setUserId,
        allUsers,
        setAllUsers,

        filteredUser,
        setFilteredUser,

        allOrders,
        setAllOrders,

      }}
    >
      {children}
    </UserContext.Provider>
  )
};

export const useUserContext = () => {
  return useContext(UserContext);
};

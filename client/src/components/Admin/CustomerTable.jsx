import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ProductPopUpInformation from "../pages/ProductPopUpInformation";
import ProductPopUpPhoto from "../pages/ProductPopUpPhoto";
import { useUserContext } from "../../Context";

const CustomerTable = () => {
  const navigateTo = useNavigate();

  const { searchTerm, setAllUsers, allUsers, filteredUser, setFilteredUser } =
    useUserContext();

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/getAllUser");
      //   console.log(data.users);
      setAllUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Filter products based on the search term
    const filtered = allUsers.filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUser(filtered);
  }, [searchTerm, allUsers]);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left ">
          <thead className=" text-gray-700 bg-zinc-200 rounded-lg text-xl font-medium font-['Roboto']">
            <tr>
              <th scope="col" className="px-6 py-3  ">
                Sr No
              </th>
              <th scope="col" className="px-6 py-3 ">
                First Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Customer Id
              </th>

              {/* <th scope="col" className="px-6 py-3">
                Status
              </th> */}
            </tr>
          </thead>
          <tbody>
            {searchTerm
              ? filteredUser.map((user, index) => {
                  return (
                    <tr
                      className="border-b border-gray-200 font-semibold text-lg "
                      key={user._id}
                    >
                      <td scope="row" className="px-6 py-2">
                        {index + 1}
                      </td>
                      <td className="px-6 py-2">{user.firstName}</td>
                      <td className="px-6 py-2">{user.lastName}</td>

                      <td className="px-6 py-2">
                        <div className="cursor-pointer">{user.email}</div>
                      </td>
                      <td className="px-6 py-2">
                        <div className="cursor-pointer">{user._id}</div>
                      </td>
                    </tr>
                  );
                })
              : allUsers.map((user, index) => {
                  return (
                    <tr
                      className="border-b border-gray-200 font-semibold text-lg "
                      key={user._id}
                    >
                      <td scope="row" className="px-6 py-2">
                        {index + 1}
                      </td>
                      <td className="px-6 py-2">{user.firstName}</td>
                      <td className="px-6 py-2">{user.lastName}</td>

                      <td className="px-6 py-2">
                        <div className="cursor-pointer">{user.email}</div>
                      </td>
                      <td className="px-6 py-2">
                        <div className="cursor-pointer">{user._id}</div>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomerTable;

import React, { useEffect } from "react";

import { useUserContext } from "../../Context";
import { AdminNavbar } from "./Sidebar";

const Dashboard = () => {
  const { setSidebar } = useUserContext();

  useEffect(() => {
    setSidebar("Overview");
  }, []);

  return (
    <>
      <div className=" flex min-h-[140vh] w-[80%]">
        <div className="container   bg-emerald-100">
          <img
            src="../../../public/images/dashboard_new.PNG"
            alt=""
            className="w-[100%]"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import React from "react";
import Header from "../HelperComponents/Header";
import CreateTask from "../HelperComponents/CreateTask";
import AllTaskWidget from "../HelperComponents/AllTaskWidget";

const AdminDashboard = (props) => {
  return (
    <div className="bg-[#242424] h-screen w-full p-10 ">
      <Header changeUser={props.changeUser} />
      <CreateTask/>
      <AllTaskWidget/>
    </div>
  );
};

export default AdminDashboard;

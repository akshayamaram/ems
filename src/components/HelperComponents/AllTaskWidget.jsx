import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTaskWidget = () => {

  const [userData, setUserData] = useContext(AuthContext);
  // console.log(userData);

  return (
    <div className=" mt-8 h-40 ">
      <div className="py-2 px-4 bg-pink-400 rounded-lg flex items-center justify-between mb-2">
        <h2 className="w-1/5 text-[#242424] text-center font-medium">Employee Name</h2>
        <h3 className="w-1/5 text-[#242424] text-center font-medium">New Tasks</h3>
        <h5 className="w-1/5 text-[#242424] text-center font-medium">Active Tasks</h5>
        <h5 className="w-1/5 text-[#242424] text-center font-medium">Completed Tasks</h5>
        <h5 className="w-1/5 text-[#242424] text-center font-medium">Failed Tasks</h5>
      </div>
      <div className=" h-[78%] overflow-auto">
        {userData.map(function (item, index) {
          return (
            <div
              key={index}
              className="py-2 px-4 bg-orange-400 rounded-lg flex justify-between mb-2"
            >
              <h2 className="w-1/5 text-center">{item.firstName}</h2>
              <h3 className="w-1/5 text-center">{item.taskNumber.newtask}</h3>
              <h5 className="w-1/5 text-center">{item.taskNumber.active}</h5>
              <h5 className="w-1/5 text-center">{item.taskNumber.completed}</h5>
              <h5 className="w-1/5 text-center">{item.taskNumber.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTaskWidget;

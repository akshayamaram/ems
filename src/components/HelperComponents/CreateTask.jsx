import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      title,
      description,
      date,
      category,
      active : false,
      newtask: true,
      completed: false,
      failed: false
    })

    const data = userData

    data.forEach((elem) => {
      if(assignTo.toLowerCase() == elem.firstName.toLowerCase()) {
         elem.tasks.push(newTask)
         elem.taskNumber.newtask = elem.taskNumber.newtask + 1
      }
    });

    setUserData(data)
    // console.log(data);
    
    setTitle('')
    setDescription('')
    setDate('')
    setAssignTo('')
    setCategory('')
  };

  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex w-full items-start justify-between mt-10 gap-20"
      >
        <div className="w-1/2 flex flex-col gap-5">
          <div className="w-full">
            <h3 className="font-medium">Task Title</h3>
            <input
              className="outline-none p-3 text-lg rounded-lg w-full border-2 border-blue-300 bg-transparent mt-3"
              type="text"
              placeholder="Make a UI design for Mobile... "
              value={title}
              onChange={(e) => {setTitle(e.target.value)}}
            />
          </div>
          <div>
            <h3 className="font-medium">Date</h3>
            <input
              className="outline-none p-3 text-lg rounded-lg w-full border-2 border-blue-300 bg-transparent mt-3"
              type="date"
              value={date}
              onChange={(e) => {setDate(e.target.value)}}
            />
          </div>
          <div>
            <h3 className="font-medium">Assign To</h3>
            <input
              className="outline-none p-3 text-lg rounded-lg w-full border-2 border-blue-300 bg-transparent mt-3"
              type="text"
              placeholder="Emplyoee name..."
              value={assignTo}
              onChange={(e) => {setAssignTo(e.target.value)}}
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <div>
            <h3 className="font-medium">Category</h3>
            <input
              className="outline-none p-3 text-lg rounded-lg w-full border-2 border-blue-300 bg-transparent mt-3"
              type="text"
              placeholder="Design, Development etc.."
              value={category}
              onChange={(e) => {setCategory(e.target.value)}}
            />
          </div>
          <div className="w-full">
            <h3 className="font-medium">Description</h3>
            <textarea
              className="outline-none p-3 text-lg rounded-lg w-full border-2 border-blue-300 bg-transparent mt-3"
              name=""
              id=""
              placeholder="Desired description of task (Max 500 words)"
              value={description}
              onChange={(e) => {setDescription(e.target.value)}}
            ></textarea>
          </div>
          <button className="bg-yellow-300 rounded-lg p-3 text-lg outline-none text-black custom-shadow-button font-medium mt-2">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

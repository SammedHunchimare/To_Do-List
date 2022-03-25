import React from "react";
import { useState } from "react";
const Task = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const Adduser = () => {
    if(name==""){
      alert("Please Enter the Name")
      return
    }
    if(age==""){
      alert("Please Enter the Age")
      return
    }
    let obj = { name: name, age: age };
    setData((data) => [...data, obj]);
    clearData();
  };

  const clearData = () => {
    setName("");
    setAge("");
  };

  const deleteItem = (index) => {
    data.splice(index, 1);
    setData((data) => [...data]);
  };

  return (
    <div className="container">
      <div className="row border">
        <div
          className="bg-dark text-white text-center p-2 shadow"
          style={{ fontSize: "25px" }}
        >
          ToDo
        </div>
        <div className="col-lg-1"></div>

        <div className="col-lg-4 border m-5 p-5 shadow">
          Full Name
          <input
            className="form-control col-lg-10 mb-4"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          Age
          <input
            className="form-control col-lg-10 mb-4"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button
            className="btn btn-success col-lg-4 ms-2 me-4 mb-5"
            onClick={Adduser}
          >
            Save
          </button>
          <button
            className="btn btn-primary ms-5  col-lg-4 mb-5"
            onClick={clearData}
          >
            Clear
          </button>
        </div>
        <div className="col-lg-4 border  m-5 p-2 shadow">
          Users
          <table className="table mt-2">
            <thead className="bg-dark text-white">
              <tr>
                <th> Full Name </th>
                <th> Marks </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td> {item.name} </td>
                    <td> {item.age} </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          deleteItem(index);
                        }}
                      >
                        Clear
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            className="btn btn-dark text-center"
            style={{ marginLeft: "35%" }}
            onClick={() => setData([])}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};
export default Task;

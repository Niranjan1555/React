import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    if (name === "" || rollNo === "") {
      alert("Please enter all details");
      return;
    }

    const newStudent = {
      name,
      rollNo,
    };

    setStudents([...students, newStudent]);
    setName("");
    setRollNo("");
  };

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Roll Number"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>
                <button onClick={() => deleteStudent(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
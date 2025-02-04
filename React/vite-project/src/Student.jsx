import React from "react";
import "./student.css";

const Student = ({ data }) => {
    return (
        <div className="id-card">
            <div className="college-header">
                <p>{data.College}</p>
            </div>
            <img src={data.pic} alt="Student" className="id-logo"  />
            <div className="id-details">
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Roll No:</strong> {data.rolltno}</p>
                <p><strong>Branch:</strong> {data.branch}</p>
            </div>
        </div>
    );
};

export default Student;

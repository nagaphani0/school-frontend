import React from "react";

const StudentProfile = () => {
  return (
    <div className="student-profile">
      <h1>Indus Universal School</h1>
      <h2>Student Home</h2>
      <div className="erp-section">
        <h3>ERP</h3>
        <ul>
          <li>Report Cards</li>
          <li>Timetable</li>
          <li>Attendance</li>
          <li>Documents/Certificates</li>
          <li>Announcements</li>
          <li>Pay/View Fees</li>
          <li>Library</li>
          <li>Class Diary</li>
          <li>Online Classes</li>
        </ul>
      </div>

      <div className="student-overview">
        <h3>Student Overview</h3>
        <ul>
          <li>Student Documents</li>
          <li>Issued Certificate</li>
          <li>Health Info</li>
          <li>Medical History</li>
          <li>Transport</li>
          <li>Parent's/Guardian's</li>
        </ul>
      </div>

      <div className="personal-info">
        <p>
          <strong>DOB:</strong> 09-04-2015
        </p>
        <p>
          <strong>Blood Group:</strong> Not specified
        </p>
        <p>
          <strong>Mother Tongue:</strong> Telugu
        </p>
        <p>
          <strong>Contact No.:</strong> +91 977782643
        </p>
        <p>
          <strong>Religion:</strong> Hindu
        </p>
        <p>
          <strong>Nationality:</strong> Indian
        </p>
        <p>
          <strong>Category:</strong> Not specified
        </p>
        <p>
          <strong>Adithan No:</strong> 96693783621
        </p>
      </div>

      <div className="administration-info">
        <p>
          <strong>Administration Type:</strong> Day Scholar
        </p>
        <p>
          <strong>Availing School Lunch?:</strong> Yes
        </p>
        <p>
          <strong>Parent Pickup:</strong> Yes
        </p>
      </div>

      <div className="accountants-info">
        <p>
          <strong>Accountant Name:</strong> ZilUSD10249 - Grade IV - A
        </p>
        <p>
          <strong>Admin No:</strong> 5028/2021-22
        </p>
      </div>

      <div className="announcements">
        <h3>Announcements</h3>
        <ul>
          <li>
            Grade: 4 Social Science Le 19 Our Rights and Rules - Worksheet
          </li>
          <li>Grade: 4 FY - 3 Question Paper Pattern 2024 - 25</li>
          <li>Grade: 4 Eng Practice Worksheet - Grammar and Letter Writing</li>
        </ul>
      </div>

      <div className="attendance">
        <h3>Attendance</h3>
        <p>
          <strong>Attendance Date:</strong> 01/10/2025
        </p>
      </div>

      <div className="fee-details">
        <h3>Fee Details</h3>
        <p>
          <strong>Total Balance:</strong> INR 24000
        </p>
        <button>Pay now</button>
      </div>

      <div className="class-diary">
        <h3>Class Diary</h3>
        <p>English, Il Language(Telugu), French, Mathematics, Coachabasic</p>
      </div>

      <div className="timestamp">
        <p>12:29 PM 02/19/2025</p>
      </div>
    </div>
  );
};

export default StudentProfile;

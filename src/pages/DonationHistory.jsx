 import React from "react";
const Donors = () => {
    return (
      <div className="donors">
        <h3>Donor Management</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Blood Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>O+</td>
              <td>Active</td>
              <td><button>Edit</button></td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>A-</td>
              <td>Inactive</td>
              <td><button>Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Donors;
  
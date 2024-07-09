import { React } from "react";
import '../assets/css/style.css'
const SimpleTable = ({ dataSource }) => {
  return (
    <div className="tb">
      {dataSource.length ? (
      <table>
        <thead className="headcss">
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </thead>
        <tbody >
          {dataSource.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td><button>Edit</button></td>
              <td><button>Delete</button></td>
            </tr>
           ))}
        </tbody>
      </table>
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;

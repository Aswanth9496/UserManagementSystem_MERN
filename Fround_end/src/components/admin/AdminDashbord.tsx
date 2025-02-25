import './AdminDashbord.css'
import { FiUsers,  FiLogOut } from "react-icons/fi";

const AdminDashboard = () => {

  return (
    <div className="admin-dashboard">
      <nav className="sidebar">
        <h2 className="logo">Admin Panel</h2>
        <ul>
          <li>
            <FiUsers /> User List
          </li>
          <li className="logout">
            <FiLogOut /> Logout
          </li>
        </ul>
      </nav>

     
      <div className="main-content">
        <header>
          <h1>Dashboard</h1>
        </header>
        <section className="content">
          <div className="dashboard-overview">
            <p>Welcome to the Admin Dashboard</p>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>john@example.com</td>
                  <td>1234567899</td>
                  <td>
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Smith</td>
                  <td>jane@example.com</td>
                  <td>7894561232</td>
                  <td>
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;

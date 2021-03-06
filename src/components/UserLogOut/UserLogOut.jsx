import styles from './UserLogOut.module.css';
import { logOut } from '../../utilities/users-service';
import { Routes, Route, useNavigate } from 'react-router-dom';
import UserDashboard from '../../pages/UserDashboard/UserDashboard'

export default function UserLogOut({ user, setUser }) {

const navigate = useNavigate();
function handleLogOut() {
  logOut();
  setUser(null);
  // tell it where to navigate once you log out 
  // i want it to go to /
  // <Navigate to="/dashboard" element={<UserDashboard />} /> - THIS LINE IS WRONG DONT EVER
navigate('/dashboard')
}

return (
  <div className={styles.UserLogOut}>
    <div>{user.name}</div>
    <div className={styles.email}>{user.email}</div>
    <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
  </div>
);
}
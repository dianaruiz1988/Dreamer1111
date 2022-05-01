import { useState, useEffect, useRef } from 'react';
import * as diaryAPI from '../../utilities/diary-api';
import * as goalAPI from '../../utilities/goal-api';
import styles from './UserDashboard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import NavBar from '../../components/Header/NavBar';


export default function Dashboard({ user, setUser }) {
//   const [menuItems, setMenuItems] = useState([]);
//   const [activeCat, setActiveCat] = useState('');
//   const [cart, setCart] = useState(null);
//   const categoriesRef = useRef([]);
  const navigate = useNavigate();
     


  return (
    <main className={styles.Dashboard}>
        <NavBar />
      <aside>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
    </main>
  );
}
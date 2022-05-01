import { useState, useEffect, useRef } from 'react';
import * as diaryAPI from '../../utilities/diary-api';
import * as goalAPI from '../../utilities/goal-api';
import styles from './NewDiaryPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewDiaryPage({ user, setUser }) {
//   const [menuItems, setMenuItems] = useState([]);
//   const [activeCat, setActiveCat] = useState('');
//   const [cart, setCart] = useState(null);
//   const categoriesRef = useRef([]);
  const navigate = useNavigate();
     


  return (
    <main className={styles.NewDiaryPage}>
      <aside>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
    </main>
  );
}


//New Diary Page needs to show the FORM which will be another component that will take in the New Diary data.

// then per the model schema

// this data will then be sent to the backend via the controllers

//finally the controllers will 
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import UserDashboard from '../UserDashboard/UserDashboard';
import NewDiaryPage from '../NewDiaryPage/NewDiaryPage';
import DiaryHistoryPage from '../DiaryHistoryPage/DiaryHistoryPage';


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className={styles.App}>
      { user ?
        <>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/dashboard" element={<UserDashboard user={user} setUser={setUser} />} />
            <Route path="/diary" element={<NewDiaryPage user={user} setUser={setUser} />} />


            <Route path="/*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </>

        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

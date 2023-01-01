import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";

import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const user = useSelector((state) => state.authReducer.authData)

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <button className="togg_button" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '🔆'}
      </button>

      {/* <div className="App"> */}
      {/* <div className="blur" style={{ top: '-18%', right: '0' }}></div> */}
      {/* <div className="blur" style={{ top: '36%', left: '-8rem' }}></div> */}
      {/* 
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div className="blur" style={{ top: '-18%', left: '0%' }}></div>
      <div className="blur" style={{ top: '70%', right: '10%' }}></div>
      <div className="blur" style={{ top: '90%', left: '8%' }}></div> */}

      <div className="blur" style={{ top: '-18%', right: '20%' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8%' }}></div>
      <div className="blur" style={{ top: '-18%', left: '0%' }}></div>
      <div className="blur" style={{ top: '18%', right: '10%' }}></div>
      <div className="blur" style={{ top: '-10%', right: '10%' }}></div>
      <div className="blur" style={{ top: '18%', left: '10%' }}></div>

      < Routes>
        <Route path="/" element={user ? <Navigate to="home" /> :
          <Navigate to='auth' />} />

        <Route path="/home" element={user ? <Home /> :
          <Navigate to='../auth' />} />

        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />

        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
      </Routes>
    </div>
  );
}

export default App;
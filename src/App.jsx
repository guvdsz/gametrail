import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import Layout from "./Layouts/Layout";
import Home from "./pages/Home";
import LayoutAuthRequired from "./Layouts/LayoutAuthRequired"
import Login  from "./pages/Login";
import Profile from "./pages/Profile";
function App() {
  const [gameList, setGameList] = useLocalStorageState("gameList", {
    defaultValue: [],
  });
  const [isAuth, setIsAuth] = useLocalStorageState("isAuth", {
    defaultValue: false,
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout isAuth={isAuth} setIsAuth={setIsAuth}/>}>
          <Route element={<LayoutAuthRequired isAuth={isAuth}/>}>
            <Route path="profile" element={<Profile/>}/>
          </Route>
          <Route index element={<Home gameList={gameList} setGameList={setGameList} isAuth={isAuth}/>} />
        </Route>
        <Route path="login" element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

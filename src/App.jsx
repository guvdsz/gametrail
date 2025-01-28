import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import useLocalStorageState from "use-local-storage-state";
import Layout from "./Layouts/Layout";
import Home from "./pages/Home";
import AuthRequired from "./Layouts/AuthRequired";
import Login  from "./pages/Login";
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
          <Route element={<AuthRequired isAuth={isAuth}/>}>

          </Route>
          <Route index element={<Home gameList={gameList} setGameList={setGameList} isAuth={isAuth}/>} />
        </Route>
        <Route path="login" element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

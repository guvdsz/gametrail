import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import useLocalStorageState from "use-local-storage-state";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
function App() {
  const [gameList, setGameList] = useLocalStorageState("gameList", {
    defaultValue: [],
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home gameList={gameList} setGameList={setGameList}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";
import GameCard from "./components/GameCard";
function App() {
  return (
    <>
      <main className="bg-[#0F172A] w-full text-white flex flex-col items-center pb-8">
        <header className="text-center py-8">
          <h2 className="font-bold text-2xl">Your Games</h2>
          <p className="text-gray-400">Track your gaming journey</p>
        </header>
        <section className="w-full flex flex-col items-center gap-6">
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </section>
      </main>
    </>
  );
}

export default App;

import GameCard from "../components/GameCard";
import { Plus, Gamepad } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import AddGameModal from "../components/AddGameModal";
export default function Home({ gameList, setGameList, isAuth }) {
  const [toggleModal, setToggleModal] = useState(false);
  const navigate = useNavigate();
  const handleModal = () => {
    if (!isAuth) {
      navigate("login");
      return;
    }
    setToggleModal(true);
  };
  const gameCards =
    gameList &&
    isAuth &&
    gameList.map((game) => {
      return (
        <GameCard
          name={game.name}
          key={game.id}
          id={game.id}
          platform={game.platform}
          complete={game.complete}
          platinum={game.platinum}
          setGameList={setGameList}
          gameList={gameList}
        />
      );
    });
  return (
    <>
      {toggleModal && (
        <AddGameModal
          setToggleModal={setToggleModal}
          gameList={gameList}
          setGameList={setGameList}
        />
      )}
      <header className="text-center flex flex-col items-center gap-10">
        <div className="flex flex-col items-center justify-center">
          <Gamepad color="#AD46FF" size={35} className="mb-2.5" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            {" "}
            GameTrail
          </h1>
          <p className="text-gray-400">Track your gaming journey</p>
        </div>
        <button
          onClick={handleModal}
          className="bg-purple-700 hover:bg-purple-500 transition-colors py-2.5 px-5 rounded-md font-bold flex items-center justify-center gap-2.5 w-fit cursor-pointer"
        >
          <Plus size={20} color="#fff" /> Add Game
        </button>
      </header>
      <section className="w-full flex flex-col items-center gap-6">
        {!gameCards || gameList.length === 0 ? "No games to see..." : gameCards}
      </section>
    </>
  );
}

import GameCard from "../components/GameCard";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import AddGameModal from "../components/AddGameModal";

export default function Home({ gameList, setGameList, isAuth }) {
  const [toggleModal, setToggleModal] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const completeParam = searchParams.get("complete");
  const handleModal = () => {
    if (!isAuth) {
      navigate("login");
      return;
    }
    setToggleModal(true);
  };
  const displayedGameCards = completeParam
    ? gameList.filter((game) => game.complete === (completeParam === "true"))
    : gameList;
  const gameCards =
  displayedGameCards &&
    isAuth &&
    displayedGameCards.map((game) => {
      if (completeParam && game.complete) {
        return (
          <GameCard
            name={game.name}
            key={game.id}
            id={game.id}
            complete={game.complete}
            setGameList={setGameList}
          />
        );
      } else {
        return (
          <GameCard
            name={game.name}
            key={game.id}
            id={game.id}
            complete={game.complete}
            setGameList={setGameList}
          />
        );
      }
    });
  return (
    <div className="w-full pt-10 flex flex-col items-center gap-10">
      {toggleModal && (
        <AddGameModal
          setToggleModal={setToggleModal}
          gameList={gameList}
          setGameList={setGameList}
        />
      )}
      {!completeParam && <button
        onClick={handleModal}
        className="fixed top-5 right-20 hover:bg-purple-500 bg-purple-700 p-2.5 rounded-md cursor-pointer transition-colors h-10 w-10"
      >
        <Plus size={20} color="#fff" />
      </button>}
      <section className="w-full flex flex-col items-center gap-5">
        {!displayedGameCards || displayedGameCards.length === 0 ? "No games to see..." : gameCards}
      </section>
    </div>
  );
}

import GameCard from "../components/GameCard";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import AddGameModal from "../components/AddGameModal";

export default function Home({ gameList, setGameList, isAuth }) {
  const [toggleModal, setToggleModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const completeParam = searchParams.get("complete");
  const navigate = useNavigate();

  const handleModal = () => {
    if (!isAuth) {
      navigate("login");
      return;
    }
    setToggleModal(true);
  };

  if (completeParam === "true" && !isAuth) {
    navigate("login");
  }

  const displayedGameCards =
    completeParam && isAuth
      ? gameList.filter((game) => game.complete === (completeParam === "true"))
      : gameList.sort((a, b) => a.complete - b.complete);

  const gameCards =
    displayedGameCards &&
    isAuth &&
    displayedGameCards.map((game) => (
      <GameCard
        name={game.name}
        key={game.id}
        id={game.id}
        complete={game.complete}
        setGameList={setGameList}
      />
    ));

  return (
    <div className={`w-full ${!displayedGameCards || !isAuth || displayedGameCards.length === 0 ? "justify-center pt-0" : "pt-10"} flex flex-col items-center gap-10 h-full ${!displayedGameCards || !isAuth || displayedGameCards.length === 0 && "justify-center pt-0"}`}>
      {toggleModal && (
        <AddGameModal
          setToggleModal={setToggleModal}
          gameList={gameList}
          setGameList={setGameList}
        />
      )}
      {!completeParam && (
        <button
          onClick={handleModal}
          className="fixed top-5 right-20 hover:bg-purple-500 bg-purple-700 p-2.5 rounded-md cursor-pointer transition-colors h-10 w-10"
        >
          <Plus size={20} color="#fff" />
        </button>
      )}
      <section className="w-full flex flex-col items-center gap-5">
        {!displayedGameCards || !isAuth || displayedGameCards.length === 0
          ? <h2 className="text-xl font-bold mb-3 text-purple-300">No Games Yet...</h2>
          : gameCards}
      </section>
    </div>
  );
}

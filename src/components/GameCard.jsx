import { Trophy } from "lucide-react";
export default function GameCard({ name, id, complete, setGameList }) {
  const handleFill = () => {
    setGameList((prevList) => {
      return prevList.map((game) => {
        return game.id === id ? { ...game, complete: !game.complete } : game;
      });
    });
  };
  return (
    <div className="flex bg-slate-700 w-9/10 h-25 rounded-md py-6 px-9 items-center justify-between max-w-150 gap-10">
      <h3 className="font-bold text-lg truncate overflow-hidden">{name}</h3>
      <div className="flex gap-6 items-center justify-center">
        <button onClick={() => handleFill()}>
          <Trophy
            size={25}
            color={complete ? "#EAB308" : "#fff"}
            className="transition-colors cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}

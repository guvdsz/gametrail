import { Trophy, BookOpenCheck } from "lucide-react";
export default function GameCard({
  name,
  id,
  platform,
  complete,
  platinum,
  gamelist,
  setGameList,
}) {
  const handleFill = (type) => {
    setGameList((prevList) => {
      return prevList.map((game) => {
        if (game.id === id) {
          if (type === "complete") {
            return { ...game, complete: !game.complete };
          } else if (type === "platinum") {
            return { ...game, platinum: !game.platinum };
          }
        }
        return game;
      });
    });
  };
  return (
    <div className="flex bg-slate-700 w-5/6 h-25 rounded-md py-6 px-9 items-center justify-between max-w-150 gap-5">
      <h3 className="font-bold text-lg truncate overflow-hidden">{name}</h3>
      <div className="flex gap-6 items-center justify-center">
        <button onClick={() => handleFill("complete")}>
          <BookOpenCheck
            size={25}
            color={complete ? "#22C55E" : "#fff"}
            className="transition-colors cursor-pointer"
          />
        </button>
        <button onClick={() => handleFill("platinum")}>
          <Trophy
            size={25}
            color={platinum ? "#EAB308" : "#fff"}
            className="transition-colors cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}

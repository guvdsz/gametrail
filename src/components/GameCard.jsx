import { X, Check, Trophy } from "lucide-react";
export default function GameCard({ name, id, complete, setGameList }) {
  const handleFill = () => {
    setGameList((prevList) => {
      return prevList.map((game) => {
        return game.id === id ? { ...game, complete: !game.complete } : game;
      });
    });
  };
  const handleDelete = () => {
    setGameList((prevList) => {
      return prevList.filter((game) => game.id !== id);
    });
  };

  return (
    <div className="flex bg-[#12141C] w-9/10 h-25 rounded-lg p-7.5 items-center justify-between max-w-150 gap-5 border border-purple-500/25 hover:border-purple-500/50 transition-colors">
      <h3 className="font-bold text-lg truncate overflow-hidden text-gray-300">{name}</h3>
      <div className="flex gap-5 items-center justify-center">
        <button
          onClick={() => handleFill()}
          className={`h-10 w-10 rounded-full flex items-center justify-center bg-purple-600 p-0 hover:bg-purple-500 cursor-pointer transition-colors ${
            complete ? "bg-purple-600 hover:bg-purple-500" : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          <Trophy
            size={15}
            className={`${
              complete ? "text-white" : "text-white/70"
            } transition-colors cursor-pointer `}
          />
        </button>
        <button
          onClick={handleDelete}
          className="h-10 w-10 rounded-full flex items-center justify-center bg-red-500 p-0 hover:bg-red-400  cursor-pointer transition-colors"
        >
          <X size={15}/>
        </button>
      </div>
    </div>
  );
}

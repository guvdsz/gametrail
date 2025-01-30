import { Trash, Trophy } from "lucide-react";
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
    <div className="flex bg-[#12141C] w-9/10 h-25 rounded-lg py-7.5 px-9 items-center justify-between max-w-150 gap-5 border border-purple-500/25 hover:border-purple-500/50 transition-colors">
      <h3 className="font-bold text-lg truncate overflow-hidden text-gray-300">{name}</h3>
      <div className="flex gap-6 items-center justify-center">
        <button onClick={handleDelete}>
          <Trash size={25} className="hover:text-purple-400 transition-colors cursor-pointer"/>
        </button>
        <button onClick={() => handleFill()}>
          <Trophy
            size={25}
            className={`${
              complete ? `text-purple-600 hover:text-purple-400` : `text-white hover:text-purple-400`
            } transition-colors cursor-pointer`}
          />
        </button>
      </div>
    </div>
  );
}

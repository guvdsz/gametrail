import { Gamepad } from "lucide-react";
import { nanoid } from "nanoid";
export default function AddGameModal({ gameList, setGameList, setToggleModal }) {
  const handleAddGame = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nameValue = form.get("name-input")
    if (!nameValue) return
    const newGame = {
      name: form.get("name-input"),
      complete: false,
      id: nanoid(),
    };
    setGameList([newGame, ...gameList]);
    setToggleModal(false);
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000000af] z-1">
      <div className="bg-[#12141C] w-5/6 rounded-md shadow-lg p-7.5 flex flex-col items-center max-w-150 border border-purple-500/25">
        <Gamepad size={35} className="mb-7.5 text-purple-500" />
        <form
          className="text-black flex flex-col w-full gap-2.5"
          onSubmit={(e) => handleAddGame(e)}
          autoComplete="off"
        >
          <input
            type="text"
            placeholder="Name"
            id="name-input"
            name="name-input"
            className="placeholder-white p-2 border border-gray-300 rounded-md outline-none focus:border-purple-500 transition-colors text-white"
          />
          <button
            type="submit"
            className="mt-4 bg-purple-700 hover:bg-purple-500 text-white p-2 rounded-md transition-colors 
            flex justify-center font-semibold items-center cursor-pointer"
          >
            Add
          </button>
          <button
            className=" bg-[#fafafa] hover:bg-purple-200 text-black p-2 rounded-md transition-colors flex justify-center items-center border border-gray-300 font-semibold cursor-pointer"
            onClick={() => setToggleModal((prevToggleModal) => !prevToggleModal)}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

import { Plus, X, Gamepad } from "lucide-react";
export default function AddGameModal({
  gameList,
  setGameList,
  setToggleModal,
}) {
  const handleAddGame = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const newGame = {
      name: form.get("name-input"),
      platform: form.get("platform-input"),
    };
    setGameList([...gameList, newGame]);
    setToggleModal(false);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000083]">
      <div className="bg-white w-5/6 rounded-md shadow-lg p-5 flex flex-col items-center max-w-150">
        <Gamepad color="#AD46FF" size={35} className="mb-5" />
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
            className="placeholder-gray-500 p-2 border border-gray-300 rounded outline-none focus:border-purple-500 transition-colors"
          />
          <select
            id="platform-input"
            name="platform-input"
            className="placeholder-gray-500 p-2 border border-gray-300 rounded outline-none focus:border-purple-500 transition-colors"
          >
            <option value="pc">PC</option>
            <option value="pc">Switch</option>
            <option value="pc">Playstation</option>
            <option value="pc">XBOX</option>
          </select>
          <button
            type="submit"
            className="mt-4 bg-purple-700 hover:bg-purple-500 text-white p-2 rounded 
                
                 transition-colors flex justify-center font-semibold items-center cursor-pointer"
          >
            Add
          </button>
          <button
            className=" bg-white hover:bg-purple-200 text-black p-2 rounded transition-colors flex justify-center items-center border border-gray-300 font-semibold cursor-pointer"
            onClick={() =>
              setToggleModal((prevToggleModal) => !prevToggleModal)
            }
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

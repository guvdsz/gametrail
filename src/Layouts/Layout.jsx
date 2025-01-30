import { Menu, X, LogOut, LogIn, Gamepad } from "lucide-react";
import { useState } from "react";
import { Outlet, useNavigate, NavLink, useSearchParams } from "react-router-dom";

export default function Layout({ isAuth, setIsAuth }) {
  const [toggle, setToggle] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get("complete");
  const navigate = useNavigate();

  return (
    <main className="bg-[#0A0B0F] w-full text-white flex flex-col items-center py-15 relative gap-10">
      <div
        className={`bg-[#12141C]/95 backdrop-blur supports-[backdrop-filter]:bg-[#12141C]/80 w-40 h-dvh fixed left-0 top-0 transition-transform duration-300 border-r border-gray-600/25 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } flex flex-col items-center justify-between py-10 px-5`}
      >
        <nav className="flex flex-col items-center gap-5">
          <h1 className="flex flex-col items-center justify-center mb-4 text-lg">
            <Gamepad size={30} className="text-purple-500" />
            <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
              GameTrail
            </span>
          </h1>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive && param === null
                ? "bg-purple-700 hover:bg-purple-500 w-full py-2 px-4 text-center cursor-pointer rounded-md transition-colors"
                : "hover:bg-purple-700 w-full py-2 px-4 text-center cursor-pointer rounded-md transition-colors"
            }
            onClick={() => {
              setToggle(false);
            }}
          >
            Profile
          </NavLink>
          <NavLink
            to=".."
            className={({ isActive }) =>
              isActive && param === null
                ? "bg-purple-700 hover:bg-purple-500 w-full py-2 px-4 text-center cursor-pointer rounded-md transition-colors"
                : "hover:bg-purple-700 w-full py-2 px-4 text-center cursor-pointer rounded-md transition-colors"
            }
            onClick={() => {
              setToggle(false);
            }}
          >
            All
          </NavLink>
          <NavLink
            to="../?complete=true"
            onClick={() => {
              setToggle(false);
            }}
            className={
              param === "true"
                ? "bg-purple-700 hover:bg-purple-500 w-full py-2 px-4 text-center cursor-pointer rounded-md transition-colors"
                : "hover:bg-purple-700 w-full py-2 px-4 text-center cursor-pointer rounded-md transition-colors"
            }
          >
            Completed
          </NavLink>
        </nav>
        <button
          className={`${
            !isAuth ? "bg-[#00a63dbb] hover:bg-green-500" : "bg-[#fb2c369c] hover:bg-red-500"
          } w-full font-semibold py-3 px-4 text-center cursor-pointer rounded-md transition-colors flex justify-center gap-1 text-sm`}
          onClick={() => {
            if (isAuth) {
              setIsAuth((prev) => !prev);
            } else {
              navigate("login");
            }
            setToggle(false);
          }}
        >
          {isAuth ? <LogOut size={15} /> : <LogIn size={15} />}
        </button>
      </div>
      <button
        className="fixed top-5 right-5 hover:bg-purple-500 bg-purple-700 p-2.5 rounded-md cursor-pointer transition-colors h-10 flex items-center justify-center w-10"
        onClick={() => setToggle((prevToggle) => !prevToggle)}
      >
        {!toggle ? <Menu size={25} /> : <X size={25} />}
      </button>
      <Outlet />
    </main>
  );
}

import { Menu, X, LogOut, LogIn, Gamepad } from "lucide-react";
import { useState } from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
export default function Layout({ isAuth, setIsAuth }) {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handleNavClick = () => {
    setToggle(false);
  };
  return (
    <main className="bg-[#0A0B0F] w-full text-white flex flex-col items-center py-15 relative gap-10">
      <div
        className={`bg-[#12141C]/95 backdrop-blur supports-[backdrop-filter]:bg-[#12141C]/80 w-40 h-dvh fixed left-0 top-0 transition-transform duration-300 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } flex flex-col items-center justify-between py-10 px-5`}
      >
        <nav className="flex flex-col items-center gap-5">
          <NavLink
            to=".."
            className={({ isActive }) => isActive ? "bg-purple-700 hover:bg-purple-500 w-full py-2 px-4 text-center cursor-pointer rounded-md transition-colors" : "hover:bg-purple-700 w-full py-2 px-4 text-center cursor-pointer rounded-md transition-colors"}
            onClick={handleNavClick}
          >
            Home
          </NavLink>
          <NavLink
            to="profile"
            className={({ isActive }) => isActive ? "bg-purple-700 hover:bg-purple-500 w-full py-2 px-4 text-center cursor-pointer rounded-md transition-colors" : "hover:bg-purple-700 w-full py-2 px-4 text-center cursor-pointer rounded-md transition-colors"}
            onClick={handleNavClick}
          >
            Profile
          </NavLink>
          <NavLink to="completed" className={({ isActive }) => isActive ? "bg-purple-700 hover:bg-purple-500 w-full py-2 px-4 text-center cursor-pointer rounded-md transition-colors" : "hover:bg-purple-700 w-full py-2 px-4 text-center cursor-pointer rounded-md transition-colors"}>
            Completed
          </NavLink>
        </nav>
        <button
          className={`${
            !isAuth ? "bg-[#00a63dbb] hover:bg-green-500" : "bg-[#fb2c369c] hover:bg-red-500"
          } w-full font-semibold py-3 px-4 text-center cursor-pointer rounded-md transition-colors flex justify-center gap-1 text-sm`}
          onClick={isAuth ? () => setIsAuth((prev) => !prev) : () => navigate("login")}
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

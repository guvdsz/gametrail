import { Menu, X, LogOut, LogIn } from "lucide-react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
export default function Layout({ isAuth, setIsAuth }) {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate()
  return (
    <main className="bg-slate-900 w-full text-white flex flex-col items-center py-10 relative gap-10">
      <div
        className={`bg-[#1d293de7] w-40 h-dvh fixed left-0 top-0 transition-transform duration-300 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } flex flex-col items-center justify-between py-10 px-5`}
      >
        <nav className="flex flex-col items-center gap-5">
          <a className="hover:bg-purple-700 w-full py-2 px-4 text-center cursor-pointer rounded-md transition-colors">
            Profile
          </a>
          <a className="hover:bg-purple-700 w-full py-2 px-4 text-center cursor-pointer rounded-md transition-colors">
            Home
          </a>
          <a className="hover:bg-purple-700 w-full py-2.5 px-5 text-center cursor-pointer rounded-md transition-colors">
            Completed
          </a>
          <a className="hover:bg-purple-700 w-full py-2 px-4 text-center cursor-pointer rounded-md transition-colors">
            Platinums
          </a>
        </nav>
        <button
          className={`${
            !isAuth
              ? "bg-[#00a63dbb] hover:bg-green-500"
              : "bg-[#fb2c369c] hover:bg-red-500"
          } w-full font-semibold py-3 px-4 text-center cursor-pointer rounded-md transition-colors flex justify-center gap-1 text-sm`} onClick={isAuth ? () => setIsAuth((prev) => !prev) :() => navigate("login")}
        >
          {isAuth ? <LogOut size={15} /> : <LogIn size={15} />}
        </button>
      </div>
      <button
        className="fixed top-5 right-5 hover:bg-purple-500 bg-purple-700 p-2.5 rounded-md cursor-pointer transition-colors"
        onClick={() => setToggle((prevToggle) => !prevToggle)}
      >
        {!toggle ? <Menu size={25} /> : <X size={25} />}
      </button>
      <Outlet />
    </main>
  );
}

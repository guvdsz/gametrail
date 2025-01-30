import { Gamepad } from "lucide-react";
import { useNavigate } from "react-router";
export default function Login({ setIsAuth }) {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("..");
  };
  return (
    <main className="bg-[#0A0B0F] w-full text-white flex flex-col items-center py-10 relative gap-10">
      <div className="flex flex-col items-center justify-center">
        <Gamepad size={40} className="text-purple-500" />
        <h1 className="text-2xl bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent mb-1">
          GameTrail
        </h1>
        <p className="text-gray-400">Track your gaming journey</p>
      </div>
      <div className="bg-[#12141C] border border-purple-500/25 w-5/6 p-7.5 rounded-md max-w-150">
        <form className="flex flex-col gap-5" onSubmit={handleLogin} autoComplete="off">
          <label className="flex flex-col gap-2">
            <span className="text-slate-200 text-md">Email</span>
            <input
              type="email"
              name="email-input"
              id="email-input"
              className="rounded-md py-1.5 px-2 outline-none border border-purple-100/75 focus:border-purple-500 transition-colors"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-slate-200 text-md">Password</span>
            <input
              type="password"
              name="password-input"
              id="password-input"
              className=" rounded-md py-1.5 px-2 outline-none border border-purple-100/75 focus:border-purple-500 transition-colors"
            />
          </label>
          <button
            type="submit"
            className="mt-4 bg-purple-700 hover:bg-purple-500 text-white p-2 rounded-md transition-colors 
            flex justify-center font-semibold items-center cursor-pointer"
          >
            Sign In
          </button>
          <span className="text-slate-400 text-center mt-2.5">Type anynthing to sign in</span>
        </form>
      </div>
    </main>
  );
}

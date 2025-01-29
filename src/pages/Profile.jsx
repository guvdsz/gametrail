import { User } from "lucide-react";
import ProfileCard from "../components/ProfileCard";
export default function Profile() {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col justify-center w-25 h-25 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700 p-1">
          <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-purple-500" />
          </div>
        </div>
        <div className="mb-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white">User</h2>
          <p className="text-purple-200">Joined 2025</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-6">
        <ProfileCard />
      </div>
    </>
  );
}

import { User, Gamepad, Trophy } from "lucide-react";
import { useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
export default function Profile({totalGames, totalCompletedGames}) {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col justify-center w-20 h-20 rounded-full overflow-hidden bg-purple-700 p-1">
          <div className="w-full h-full bg-[#12141C] rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-purple-500" />
          </div>
        </div>
        <div className="mb-4 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white">User</h2>
          <p className="text-purple-200 text-sm">Joined 2025</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-5">
        <ProfileCard title="Total Games" icon={<Gamepad className="text-white" />} value={totalGames}/>
        <ProfileCard title="Completed Games" icon={<Trophy className="text-white" />} value={totalCompletedGames}/>
      </div>
    </div>
  );
}

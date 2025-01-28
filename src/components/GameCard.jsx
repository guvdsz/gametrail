import { Trophy, BookOpenCheck } from "lucide-react";
export default function GameCard({name}) {
  const filled = false
  return (
    <div className="flex bg-slate-700 w-5/6 h-25 rounded-md py-6 px-9 items-center justify-between max-w-150 gap-5">
      <h3 className="font-bold text-lg truncate overflow-hidden">{name}</h3>
      <div className="flex gap-6 items-center justify-center">
        <BookOpenCheck size={25} color={filled? "#22C55E" : "#fff"} />
        <Trophy size={25} color={filled? "#EAB308" : "#fff"}/>
      </div>
    </div>
  );
}

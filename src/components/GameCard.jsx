import { Trophy, Ellipsis, BookOpenCheck } from "lucide-react";
export default function GameCard() {
  return (
    <div className="flex bg-[#2D3B4F] w-5/6 h-25 rounded-md p-6 items-center justify-between">
      <h3 className="font-bold text-lg">Game Name</h3>
      <div className="flex gap-6 items-center justify-center">
        <BookOpenCheck width={25}/>
        <Trophy width={25}/>
      </div>
    </div>
  );
}

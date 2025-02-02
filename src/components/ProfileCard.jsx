export default function ProfileCard({ icon, title, value }) {
  return (
    <div className="flex bg-[#12141C] w-9/10 h-30 rounded-lg py-7.5 px-9 items-center max-w-150 gap-6 border-1 border-purple-500/25 hover:border-purple-500/50 transition-colors">
      <div className="p-3 rounded-xl bg-purple-700">{icon}</div>
      <div className="flex flex-col">
        <h2 className="text-gray-400 text-lg">{title}</h2>
        <span className="font-black text-white text-xl">{value}</span>
      </div>
    </div>
  );
}

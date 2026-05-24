import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search tutorials, cheats, resources..."
        className="flex-1 border border-cyber-cyan/30 bg-cyber-panel px-4 py-2 text-gray-100 placeholder-gray-500 outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan/50"
      />
      <button
        type="submit"
        className="border border-cyber-cyan bg-cyber-cyan/10 px-4 py-2 font-display text-sm uppercase tracking-wider text-cyber-cyan hover:bg-cyber-cyan/20"
      >
        Search
      </button>
    </form>
  );
}

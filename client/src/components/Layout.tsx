import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";

export function Layout() {
  return (
    <div className="min-h-screen cyber-grid-bg">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-4">
        <SearchBar />
      </div>
      <main className="mx-auto max-w-6xl px-4 pb-16">
        <Outlet />
      </main>
      <footer className="border-t border-cyber-cyan/10 py-8 text-center text-sm text-gray-500">
        Blender Cyber Hub — Learn Blender in the neon grid
      </footer>
    </div>
  );
}

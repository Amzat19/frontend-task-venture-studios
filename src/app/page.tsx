"use client";
import Header from "@/_components/Header";
import MainDashboard from "@/_components/MainDashboard";
import { useState } from "react";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <main className="">
      <Header onMenuClick={toggleSidebar} />
      <MainDashboard
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      {/* Optional overlay for mobile */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
        />
      )}
    </main>
  );
}

import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import UserProvider from "./store/UserProvider";
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="bg-custom-black">
      <UserProvider>
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Outlet />
        </div>
      </UserProvider>
    </div>
  );
};

export default App;

// src/App.jsx
import React from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header";
import DashboardMainContent from "./components/DashboardMainContent/DashboardMainContent";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="main-content">
         <DashboardMainContent />
        </div>
      </div>
    </div>
  );
}

export default App;


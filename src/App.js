import React from "react";
import "./App.css";
import Header from "./Header"
import Sidebar from "./Side_bar"
import Videos from "./Videos"



function App() {
  return (
    <div className="app">
      <div className="header">
          <Header/>
      </div>

      <div className="body">

      <div className="menu">
            <Sidebar/>
      </div>

      <div className="videos">
        <Videos/>
      </div>
      </div>
</div>
  );
}

export default App;

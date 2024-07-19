import React from "react";
import RoundedNavBar from "../Google/Roundednavbar";

function Home() {
  return (
    <div>     
      <div style={{ marginTop: "50px" }}>
        <center style={{ marginBottom: "10px" }}>
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/512/chrome.png"
            alt="Google Chrome Logo"
          />
        </center>

        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "bold", fontSize: "3.5rem" }}>The browser</h1>
          <h1 style={{ fontWeight: "bold", fontSize: "3.5rem" }}>
            built to be yours
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;

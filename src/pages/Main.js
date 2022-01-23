import React, { useEffect } from "react";
import Card from "../components/Card";

function Main() {
  useEffect(() => {
    document.title = "Frontend Mentor | NFT preview card component";
  }, []);
  return (
    <div id="main">
      <Card />
    </div>
  );
}

export default Main;

import React from "react";
import img from "../images/image-equilibrium.jpg";
import EthereumSvg from "../images/icon-ethereum.svg";
import IconClock from "../images/icon-clock.svg";
import avatar from "../images/image-avatar.png";

function Card() {
  return (
    <div id="card" data-testid="card">
      <div id="image" data-testid="image">
        <img src={img} alt="imagesss" />
      </div>
      <div id="desc" data-testid="desc">
        <h4>Equilibrium #3429</h4>
        <p>Our Equilibrium collection promotes balance and calm</p>
      </div>
      <div id="status">
        <div id="price">
          <img src={EthereumSvg} alt="eth" /> <span>0.041 ETH</span>
        </div>
        <div id="time">
          <img src={IconClock} alt="clock" /> <span>3 days left</span>
        </div>
      </div>
      <div id="author" data-testid="author">
        <img src={avatar} alt="avatar" />{" "}
        <span>
          Creation of{" "}
          <a href="#" id="redirect-account">
            Jules Wyvern
          </a>
        </span>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import { Link } from "react-router-dom";

//Wand Preview card
const WandCard = ({ wand }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4>{wand.core}Wand Core:</h4>
          <Link to={`/WandItem/${wand.slug}`}>
            <img width="200px" src={wand.imageUrl} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WandCard;

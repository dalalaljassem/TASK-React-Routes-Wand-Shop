import React from "react";
import { useParams } from "react-router-dom";
import wands from "../wands";

//here we got the wand details page
const WandItem = () => {
  const wandSlug = useParams().wandSlug;
  const wandsData = wands.find((wand) => wand.slug === wandSlug);

  return (
    <div>
      <div class="card">
        <div class="card-header">Wand Item</div>
        <div class="card-body">
          <h5 class="card-title">{wandsData.core}</h5>
          <img width="200px" src={wandsData.imageUrl} />
          <p class="card-text">
            <ul></ul>
            <li>Wood Type: {wandsData.wood} </li>
            <li>Wand Length: {wandsData.length} </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WandItem;

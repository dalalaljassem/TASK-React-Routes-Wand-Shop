import React from "react";
import WandCard from "./WandCard";

//here we list all of our wand objects
const WandList = ({ wands }) => {
  const wandListing = wands.map((wand) => <WandCard wand={wand} />);

  return <div>{wandListing}</div>;
};

export default WandList;

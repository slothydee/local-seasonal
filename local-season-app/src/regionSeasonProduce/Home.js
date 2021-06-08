import RegionSeason from "./RegionSeason";
import Produce from "./Produce";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Home(handleRegionSelection, handleSeasonSelection) {
  const [regionSelected, setRegionSelection] = useState();
  const [seasonSelected, setSeasonSelection] = useState();

  handleRegionSelection = (childRegionSelected) => {
    // if (childRegionSelected === regionSelected) return;
    setRegionSelection(childRegionSelected);
  };
  handleSeasonSelection = (childSeasonSelected) => {
    // if (childSeasonSelected === seasonSelected) return;
    setSeasonSelection(childSeasonSelected);
  };

  useEffect(() => {
    let color;
    switch (seasonSelected) {
      case "summer":
        color = "yellow";
        break;
      default:
        color = "black";
        break;
    }
    document.body.style.backgroundColor = color;
  });

  return (
    <div className="Home">
      <RegionSeason
        onRegionSelectionChange={handleRegionSelection}
        onSeasonSelectionChange={handleSeasonSelection}
      />
      <Produce region={regionSelected} season={seasonSelected} />
    </div>
  );
}

Home.propTypes = {
  handleRegionSelection: PropTypes.func,
  handleSeasonSelection: PropTypes.func,
};

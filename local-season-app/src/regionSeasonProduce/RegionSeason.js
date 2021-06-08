import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function RegionSeason({
  onRegionSelectionChange,
  onSeasonSelectionChange,
}) {
  const onClickRegionSelection = (event) => {
    onRegionSelectionChange(event.target.name);
    event.preventDefault();
  };

  const onClickSeasonSelection = (event) => {
    onSeasonSelectionChange(event.target.name);
    event.preventDefault();
  };
  // todo set color
  useEffect(() => {});

  const Regions = () => {
    return (
      <ButtonGroup>
        <button onClick={onClickRegionSelection} name="pnw">
          PNW
        </button>
        <button onClick={onClickRegionSelection} name="sw">
          SW
        </button>
        <button onClick={onClickRegionSelection} name="mw">
          MW
        </button>
        <button onClick={onClickRegionSelection} name="s">
          S
        </button>
        <button onClick={onClickRegionSelection} name="ne">
          NE
        </button>
      </ButtonGroup>
    );
  };

  const Seasons = () => {
    return (
      <ButtonGroup>
        <button onClick={onClickSeasonSelection} name="Spring">
          Spring
        </button>
        <button onClick={onClickSeasonSelection} name="Summer">
          Summer
        </button>
        <button onClick={onClickSeasonSelection} name="Fall">
          Fall
        </button>
        <button onClick={onClickSeasonSelection} name="Winter">
          Winter
        </button>
      </ButtonGroup>
    );
  };

  return (
    <>
      <header className="RegionSeason__Header">
        Select A Region
        <Regions />
      </header>
      <header className="RegionSeason__Header">
        Select A Season
        <Seasons />
      </header>
    </>
  );
}

RegionSeason.propTypes = {
  onRegionSelectionChange: PropTypes.func,
  onSeasonSelectionChange: PropTypes.func,
};

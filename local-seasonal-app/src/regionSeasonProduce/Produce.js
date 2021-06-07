import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import db from "../firebase/db";
const PRODUCE_COLLECTION = "/produce";

export default function Produce({ region, season }) {
  const [produceList, setProduceList] = useState();
  const [isProduceModalOpen, setProduceModalOpen] = useState(false);
  const [detailedProduce, setProduceDetailed] = useState();

  useEffect(() => {
    let mounted = true;
    const regionSeason = `${region}${season}`;
    if (!regionSeason) return;
    db.collection(PRODUCE_COLLECTION)
      .where(regionSeason, "==", true)
      .get()
      .then((data) => {
        if (mounted) {
          const fetched = data.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

          setProduceList(fetched);
        }
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    return () => (mounted = false);
  }, [region, season]);

  const handleModalOpen = (event) => {
    setProduceDetailed(event.target.alt);
    setProduceModalOpen(true);
  };

  const handleModalClose = () => {
    setProduceModalOpen(false);
  };

  const SingleProduce = () => {
    let modalDisplayProduce;
    if (produceList && detailedProduce) {
      modalDisplayProduce = produceList.find((obj) => {
        return obj.id === detailedProduce;
      });
    }
    const showHideClassName = isProduceModalOpen
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <header>
            <button type="button" onClick={handleModalClose}>
              Close
            </button>
          </header>
          {modalDisplayProduce ? modalDisplayProduce.produceName : "meow"}
        </section>
      </div>
    );
  };
  return (
    <>
      <header>
        {season && region
          ? `${season} produce in the ${region.toUpperCase()}`
          : null}
      </header>
      <div className="produce-container">
        {produceList
          ? produceList.map((item) => (
              <div className="produce-child" key={item.id}>
                <img
                  src={item.src}
                  alt={item.id}
                  onClick={handleModalOpen}
                ></img>
              </div>
            ))
          : null}
      </div>
      <div>
        <SingleProduce handleClose={handleModalClose}></SingleProduce>
      </div>
    </>
  );
}

Produce.propTypes = {
  region: PropTypes.string,
  season: PropTypes.string,
};

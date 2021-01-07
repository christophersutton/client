import React from "react";
import { connect } from "react-redux";
import { useModal } from "../../../utils/useModal";
import PlantModal from "./PlantModal";

const PlantPreview = (props) => {
  const { isShowing: isShowingPlant, toggle: togglePlant } = useModal();
  const {
    id,
    nickname,
    species,
    h2o_frequency,
    image,
    group,
    instructions,
    last_water,
    next_water,
  } = props.plant;

  return (
    <li className='plant-list-item'>
      <div className='plant-preview' onClick={togglePlant}>
        <h3>{nickname}</h3>
        <img
          src={
            image
              ? image
              : "https://mk0punsjokesui4twax7.kinstacdn.com/wp-content/uploads/2020/07/funny-plant-puns-950x500.jpg"
          }
          alt='plant preview'
        />
      </div>
      <PlantModal
        id={id}
        payload={props.plant}
        isShowing={isShowingPlant}
        hide={togglePlant}
      />
    </li>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, {})(PlantPreview);

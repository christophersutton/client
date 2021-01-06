import React from "react";

const Plant = (props) => {
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
      <div className='plant-preview'>{species}</div>
    </li>
  );
};

export default Plant;

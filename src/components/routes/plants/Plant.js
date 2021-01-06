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
      <div className='plant-preview'>
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
    </li>
  );
};

export default Plant;

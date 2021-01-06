import React from 'react'
export default function PlantCard(props) {

   const { plant } = props;

    return (
        <div className="plantCard">
            <img alt={plant.nickname} src={plant.plantImage}></img>
        </div>
    )
}

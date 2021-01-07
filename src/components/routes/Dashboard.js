import React, { useEffect, useState } from "react";
import getPlants from "../../store/actions/getPlants";
import { connect } from "react-redux";
import "../sass/Dashboard.scss";
// components
import AddPlant from "./plants/AddPlant";
import PlantPreview from "./plants/PlantPreview";

const Dashboard = (props) => {
  const { getPlants } = props;
  const { plants } = props.state.plantsReducer;
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    getPlants();
  }, [getPlants]);

  return (
    <section className='pg dash-pg'>
      <button
        onClick={() => {
          setEditing(true);
        }}
      >
        Add Plant
      </button>
      {editing ? <AddPlant setEditing={setEditing} /> : null}
      <ul className='plant-list'>
        {plants.map((plant, i) => (
          <PlantPreview plant={plant} key={i} />
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, { getPlants })(Dashboard);

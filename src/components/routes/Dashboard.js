import React, { useEffect, useState } from "react";
import getPlants from "../../store/actions/getPlants";
import { connect } from "react-redux";
import "../sass/Dashboard.scss";
// components
import Plant from "./plants/Plant";
import AddPlant from "./plants/AddPlant";

const Dashboard = (props) => {
  const [showing, setShowing] = useState(false);
  const { getPlants } = props;
  const { plants } = props.state.plantsReducer;

  useEffect(() => {
    getPlants();
  }, [getPlants]);

  const toggleShowing = (e) => setShowing(!showing);

  return (
    <section className='pg dash-pg'>
      <button onClick={toggleShowing}>Add Plant</button>
      {showing ? <AddPlant /> : null}
      <ul className='plant-list'>
        {plants.map((plant, i) => (
          <Plant plant={plant} key={i} />
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, { getPlants })(Dashboard);

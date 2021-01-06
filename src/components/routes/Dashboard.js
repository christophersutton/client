import React, { useEffect } from "react";
import getPlants from "../../store/actions/getPlants";
import { connect } from "react-redux";
// components
import Plant from "./plants/Plant";

const Dashboard = (props) => {
  const { getPlants } = props;

  const { plants } = props.state.plantsReducer;

  useEffect(() => {
    getPlants();
  }, [getPlants]);

  return (
    <section className='pg dash-pg'>
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

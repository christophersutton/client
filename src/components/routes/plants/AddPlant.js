import React from "react";
import getPlants from "../../../store/actions/getPlants";
import addPlant from "../../../store/actions/addPlant";
import { connect } from "react-redux";
import { FormBuilder } from '../../utils/FormBuilder'

const initialValues = {};

const AddPlant = (props) => {
  return (
    <form>
      <h2>Add Your New Plant</h2>
    </form>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, { addPlant, getPlants })(AddPlant);

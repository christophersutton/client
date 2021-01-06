import React, { useState } from "react";
import getPlants from "../../../store/actions/getPlants";
import addPlant from "../../../store/actions/addPlant";
import { connect } from "react-redux";

const initialValues = {
  nickname: "",
  species: "",
  h2o_frequency: 1,
  image: "",
  group: "uncategorized",
  instructions: "",
  last: "",
  next: "",
};

const AddPlant = (props) => {
  const [values, setValues] = useState(initialValues);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // new plant goes here
    const newPlant = {};
    props.addPlant(newPlant);
    setValues(initialValues);
  };

  const abortSubmit = (e) => {
    e.preventDefault();
    props.setEditing(false);
    setValues(initialValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Your New Plant</h2>
      <label>Article Link</label>
      <input
        type='text'
        name='nickname'
        placeholder='Willow Smith'
        value={values.nickname}
        onChange={handleChanges}
      />
      <button type='submit'>Save</button>
      <button onClick={abortSubmit}>Cancel</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, { addPlant, getPlants })(AddPlant);

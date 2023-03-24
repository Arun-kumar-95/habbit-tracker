// IMPORT FORM CSS
import "../form.css";

// IMPORT HE REACT AND USESTATE HOOK FROM REACT PACKAGE
import React, { useState } from "react";
// IMPORT THE NAVIGATE FROM REACT ROUTER DOM
import { useNavigate } from "react-router-dom";
// IMPORT THE ADD HABIT FROM FEATURES
import { addHabit } from "../Redux/Features";

// IMPORT THE DISPATCH FROM REACT REDUX
import { useDispatch } from "react-redux";
// IMPORT THE TOAST FROM REAT TOASTIFY
import { toast } from "react-toastify";

// DEFINING THE CREATE HABBIT FUNCTIONAL COMPONENT
const CreateHabbit = () => {
  // INITIALIZING THE STATE FOR CREATING THE NEW HABBIT
  const [habbit, setHabbit] = useState({});
  // call use dispatch hook a variable call dispatch
  const dispatch = useDispatch();
  // call use navigate hook from react-router-dom in a navigate varriable
  const navigate = useNavigate();

  // DEFINING THE FUNCTION FOR INPUT WHICH TRIGGERS WHEN THERE IS ANY CHANGE OCCURS INSIDE INPUT
  const handleChange = (e) => {
    // SETTING THE NAME OF THE INPUT
    const name = e.target.name;
    // GETTING THE VALUE OF THE INPUT
    const value = e.target.value;
    // ADDING TO THE TASK VIA SET TASK FUNCTION TO KEEP TRACK OF THE INPUT VALUES
    setHabbit((values) => ({ ...values, [name]: value }));
  };

  // function for add habit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(habbit);
    // CALL DISPATCH FUNCTION
    dispatch(addHabit(habbit.habbitText));

    // making the sethabbit to empty
    setHabbit({});
    // THROW SUCCESS MESSAGE
    toast("Habbit Created");
    // redirect TO HABBITS PAGE
    navigate("/habbits");
  };

  // DEFING THE UI FOR CREATE HABBIT COMPONENT
  return (
    <main>
    {/*  CREATING THE FOR THE FORM */}
      <form>
        <label htmlFor="habbitText">Habbit :</label>
        <input
          type="text"
          name="habbitText"
          id="habbit-text"
          placeholder="Create new habbit..."
          value={habbit.habbitText}
          autoComplete="off"
          required
          autoFocus="{true}"
          onChange={handleChange}
        />

        {/* CREATING THE CONTROLS FOR THE FORM ACTION*/}
        <button type="button"> Cancel</button>
        <button type="submit" onClick={handleSubmit}>
          Add Habbit
        </button>
      </form>
    </main>
  );
};

// MAKING THE DEFAULT EXPORTS
export default CreateHabbit;

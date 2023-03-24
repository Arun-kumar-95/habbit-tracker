// IMPORT REACT FROM REACT PACKAGE
import React from "react";

// IMPORT LINK AND USENAVIGATE FROM REACT ROUTER DOM
import { Link, useNavigate } from "react-router-dom";
// IMPORT USEDISPATCH FUNCTION FROM REACT REDUX
import { useDispatch } from "react-redux";
// IMPORT DELETE HABBIT FROM REDUX FEATURES
import { deleteHabit } from "../Redux/Features";

// IMPORT THE TOAST CONTAINER AND TOAST FROM REACT-TOASTIFY
import { ToastContainer, toast } from "react-toastify";

// DEFINING THE HABBIT FUNCTIONAL COMPONENT
const Habbit = ({ habbit }) => {

  // call use navigate hook from react-router-dom in a navigate varriable
  const navigate = useNavigate();

  // call use dispatch hook a variable call dispatch
  const dispatch = useDispatch();

  // function call after click delete button on habit list
  const handleDelete = () => {
    dispatch(deleteHabit(habbit.id));
    // THROW SUCCESS MESSAGE
    toast("Habbit Deleted");
  };

  // FUNCTIONAL TO HANDLE SETITEM ID INSIDE THE LOCALSTORAGE 
  const setId = () => {
    localStorage.setItem("id", habbit.id);
    // NAVIAGTE TO DETAILS PAGE
    navigate("/details");
  };

  // DEFINING THE UI FOR THE HABBIT COMPONENT
  return (
    <div className="habbit">
    {/* USING TOAST CONTAINER COMPONENT*/}
      <ToastContainer />
      <h2 style={{ textTransform: "capitalize" }}># {habbit.name}</h2>

      <Link to="/details" role="link" className="view-habbit" onClick={setId}>
        <img
          alt="view-icon"
          src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
        />
        View Detail
      </Link>
      <button className="btn btnDelete" onClick={handleDelete}>
        <img
          className="delete-icon"
          alt="delete icon"
          src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
        />
      </button>
    </div>
  );
};

// MAKING DEFAULT EXPORT
export default Habbit;

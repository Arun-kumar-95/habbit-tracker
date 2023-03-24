// import react from react
import React from "react";
// IMPORT USEDISPATCH AND USESELECTOR FROM REACT REDUX
import { useDispatch, useSelector } from "react-redux";
// IMPORTING THE FEATURES FROM FEATURES
import { habitDone, habitNone, habitUnDone } from "../Redux/Features";

// IMPORT THE TOASST AND TOAST CONTAINER FROM REACT TOASTIFY
import { ToastContainer, toast } from "react-toastify";
// IMPORT THE CSS
import "../Details.css";
// IMPORT THE DAY COMPONENT
import Day from "../Components/Day";

// DEFINGING THE DAY VIEW FUNCTIONAL COMPONENT
const DetailView = ({ day }) => {
  // call use dispatch hook a variable call dispatch
  const dispatch = useDispatch();

  // call use selector hook for getting state from reducer
  let habitsState = useSelector((state) => state.habits);

  // getting habit from habits state acording to local storage id and set it on habit
  let habbit = {};
  // LOOPING THROUGH ALL THE HABIT AND GET THE MATCHING HABBIT FROM THE ID STORED IN THE LOCALSTORAGE
  for (let i = 0; i < habitsState.length; i++) {
    if (habitsState[i].id === Number(localStorage.getItem("id"))) {
      // STORING THE HABBIT
      habbit = habitsState[i];
    }
  }

  // get today date
  const today = new Date();
  // get day from today date
  const todayDay = today.getDay();

  //GET THE CURRENT DATA BASED ON THE ID
  const currentData = habbit.weekLog[todayDay];
  // GET THE CURRENT DATE
  const todaysDate = `${currentData.yyyy}/${currentData.mm}/${currentData.dd}`;

  // function call after click done icon--------------
  const markToDone = () => {
    // call habit done action from reducer
    dispatch(habitDone(currentData.id));
    // THROW THE MESSAGE
    toast("Marked Done");
  };

  // function call after click undone icon------------
  const markToUnDone = () => {
    // call habit undone action from reducer
    dispatch(habitUnDone(currentData.id));
    // THROW THE MESSAGE
    toast("Marked UnDone");
  };

  // function call after click none icon--------------
  const markToNone = () => {
    // call habit none action from reducer
    dispatch(habitNone(currentData.id));
    // THROW THE MESSAGE
    toast("Marked None");
  };

  // DEFING THE UI FOR THE DETAIL VIEW COMPONENT
  return (
    <main>
      {/* USING THE TOAST CONTAINER COMPONENT*/}
      <ToastContainer />

      {/* DEFINING THE UI FOR THE DETAIL VIEW*/}

      <div className="detail-page-container">
        <div className="current-day-detail">
          <div className="details">
            <h2 style={{ textTransform: "capitalize" }}>{habbit.name}</h2>
            <p>
              {currentData.day} : {todaysDate}{" "}
            </p>
          </div>
          <div className="current-day-control">
            <p>Done</p>
            <button classname="btn btn-complete" onClick={markToDone}>
              <img
                alt="icon"
                src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png"
              />
            </button>
          </div>
          <div className="current-day-control">
            <p>UnDone</p>
            <button className="btn btn-not-complete" onClick={markToUnDone}>
              <img
                alt="icon"
                src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
              />
            </button>
          </div>
          <div className="current-day-control">
            <p>None</p>
            <button className="btn btn-default" onClick={markToNone}>
              <img
                alt="icon"
                src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png"
              />
            </button>
          </div>
        </div>
        {/* DEFING THE UI FOR THE WEEKILY REPORT */}
        <div className="weekly-report-container">
          <div className="title-container">
            <h2>Weekly Report</h2>
          </div>
          {/* LOOPING THROUGH ALL HABBITS  */}
          <div className="habbit-week-data">
            {habbit.weekLog.map((day, index) => (
              <Day dayData={day} key={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

// MAKING THE EXPORT DEFAULT
export default DetailView;

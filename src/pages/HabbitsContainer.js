// IMPORT THE USESELECTOR FROM REACT REDUX
import { useSelector } from "react-redux";
// IMPORT HABIT COMPONENT
import Habbit from "../Components/Habbit";
// IMPORT TOAST CONTAINNER 
import { ToastContainer } from "react-toastify";

// DEFINING THE HABBIT FUNCTIONAL CONTAINER
const HabbitContainer = () => {
  // call use selector hook for getting state from reducer
  let habbitsState = useSelector((state) => state["habits"]);
  // DEFINING THE UI FOR THE HABBIT CONTAINER

  return (
  
    <main>
    {/* MAKING USE OF TOAST CONTAINER COMPONENT */}
      <ToastContainer />

       {/* DEFINING THE UI FOR HABBIT COMPONENT */}
      <div className="habbit-container">
      {/* SHOW TEXT ALERT IF THE HABBIT LENGTH IS ZEO*/}
        {habbitsState.length === 0 ? (
          <div className="empty-habbit-msg">
            <p>*Add New Habbit</p>
          </div>
        ) : (
          <ul>
          {/* LOOPING THROUGH ALL THE HABBITS */}
            {habbitsState.map((habbit) => (
              <li>
                <Habbit habbit={habbit} key={habbit.id} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};
// MAKING THE EXPORT DEFAULT
export default HabbitContainer;

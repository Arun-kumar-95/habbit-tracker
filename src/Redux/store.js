// IMPORTING THE CONFIGUS TRE FUNCTION FROM REDUX TOOL KIT
import { configureStore } from "@reduxjs/toolkit";
// IMPORTING THE HABBIT REDUCER FORM THE FEATURES
import habitReducer from "./Features";

// CREATING THE STORE
const store = configureStore({
  // PASSIGN THE HABIT REUCER TO THE STORE
  reducer: {
    habits: habitReducer,
  },
});
// MAKING THE DEFAULT EXPORT
export default store;

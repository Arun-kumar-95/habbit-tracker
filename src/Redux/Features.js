// IMPORT YHE SLICE FUNCTION FROM REDUX TOOLKIT
import { createSlice } from "@reduxjs/toolkit";
// INITIALIZING THE ID TO 1
let id = 1;
// DEFING THE HABBIT SLICE
export const habitSlice = createSlice({
  name: "habits",
  initialState: [],
  // DEFING THE REDUCERS
  reducers: {
    addHabit: (state, action) => {
      const today = new Date();
      let day = today.getDate() - today.getDay();
      const month = today.getMonth();
      const year = today.getFullYear();
// INFITALIZING THE HABBIT OBJECT
      const habit = {
        id: id++,
        name: action.payload,
        weekLog: [
          {
            id: 0,
            day: "Sunday",
            dd: day,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 1,
            day: "Monday",
            dd: day + 1,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 2,
            day: "Tuesday",
            dd: day + 2,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 3,
            day: "Wednesday",
            dd: day + 3,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 4,
            day: "Thursday",
            dd: day + 4,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 5,
            day: "Friday",
            dd: day + 5,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 6,
            day: "Saturday",
            dd: day + 6,
            mm: month,
            yyyy: year,
            isDone: "",
          },
        ],
      };
      const tempHabits = [...state, habit];
      return tempHabits;
    },

    // DEFING THE DELETE HABBIT REDUCER FUNCTION
    deleteHabit: (state, action) => {
      const tempHabits = state.filter((habit) => habit.id !== action.payload);
      return tempHabits;
    },
    // DEFING THE HABBIT DONE FUNCTION
    habitDone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone = true;
        }
      }
      return tempHabits;
    },
    // DEFING THE HABBIT UNDONE FUNCTION
    habitUnDone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone = false;
        }
      }
      return tempHabits;
    },
    habitNone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone = "";
        }
      }
      return tempHabits;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addHabit, deleteHabit, habitDone, habitUnDone, habitNone } =
  habitSlice.actions;

  // MAKING THE DEFAULT EXPORTS
export default habitSlice.reducer;

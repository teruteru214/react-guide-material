import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    add(state, {type, payload}) {
      return state + payload;
    }
  }
})
const initialState = 0;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "counter/+":
      return state + payload;
    case "counter/-":
      return state - payload;
    default:
      return state;
  }
};

const add = (payload) => {
    return {
        type: "counter/+",
        payload
    }
}

const minus = (payload) => {
    return {
        type: "counter/-",
        payload
    }
}

export { reducer, add, minus }

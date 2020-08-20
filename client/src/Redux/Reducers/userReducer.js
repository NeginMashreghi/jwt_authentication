import { 
    SET_CURRENT_USER, 
} from "../types";
  
  const initialState = {
    isAuthenticated: false,
    currentUser: {},
  };

const isEmpty = require("is-empty");

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        currentUser: action.payload
      };
   
    default:
      return state;
  }
}
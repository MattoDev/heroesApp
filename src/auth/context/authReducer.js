import { types } from "../types/types";

// Los reducer son funciones puras que no llaman a recursos externos, no llaman un API externa, no llaman funcionalida externa, debe resolverse unicamente con el STATE  y la ACTION que recibe
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};

import { FETCH_USER_SUCCESS, DELETE_USER_SUCCESS } from "../types";

const initialState = {
  userList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        userList: action.payload,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;

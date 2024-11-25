import { FETCH_USER_SUCCESS } from "../types";

const initialState = {
    userList: [],
};

// action всегда состоит как минимум из двух вещей: 1. type 2.payload

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                userList: action.payload,
            };
        default:
            return state;
    };
};

export default userReducer;
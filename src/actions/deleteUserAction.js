import { deleteUserApi } from "../services/userAPI";
import { DELETE_USER_SUCCESS } from "../types";


    export const deleteUserAction = (id) => async(dispatch) => {
        await deleteUserApi(id).then(() => {
            dispatch({
                type: DELETE_USER_SUCCESS,
                payload: id,
            });
        });
    };


    
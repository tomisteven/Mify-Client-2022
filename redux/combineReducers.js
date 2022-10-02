import { combineReducers } from "redux";
import { cashReducer } from "./reducer";


const reducer = combineReducers({
    cash: cashReducer
})  

export default reducer;
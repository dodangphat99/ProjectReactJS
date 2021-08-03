import {combineReducers} from "redux";
import loginReducer from "./login.reducer";
import commonReducer from "./common.reducer";

export default combineReducers({
    loginReducer:loginReducer,
    commonReducer:commonReducer,
})
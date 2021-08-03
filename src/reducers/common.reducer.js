import { COMMON_ACTION } from "../constants";

const initialState = {
  theme: "light",
};

function commonReducer(state = initialState, action) {
  switch (action.type) {
    case COMMON_ACTION.CHANGE_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default:
      return state;
  }
}

export default commonReducer;

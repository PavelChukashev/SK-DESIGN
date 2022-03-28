// Actions
const SEND_REQUEST_START = "DESIGN/SEND_REQUEST_START";
const SEND_REQUEST_SUCCESS = "DESIGN/SEND_REQUEST_SUCCESS";

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SEND_REQUEST_START:
      return { ...state, values: action.payload, requestSend: true };
    case SEND_REQUEST_SUCCESS:
      return { ...state, requestSend: false };
    default:
      return state;
  }
}

// Action Creators
export const sendRequestStart = (values) => {
  return {
    type: SEND_REQUEST_START,
    payload: values,
  };
};

export const sendRequestSuccess = () => {
  return {
    type: SEND_REQUEST_SUCCESS,
  };
};

export const sendRequest = (values) => {
  return (dispatch) => {
    dispatch(sendRequestStart(values));
    setTimeout(() => {
      dispatch(sendRequestSuccess());
      console.log(values);
    }, 2000);
  };
};

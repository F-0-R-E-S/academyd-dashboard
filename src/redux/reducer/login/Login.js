import {SET_LOGIN} from '../../actionTypes/login';

const initialState = {

}

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        jwt: action.payload.content,
      }
    default:
      return state
  }
}






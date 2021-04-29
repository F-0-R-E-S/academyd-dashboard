import {SET_LOGIN} from '../../actionTypes/login';

export const setJwt = content => ({
  type: SET_LOGIN,
  payload: {
    content,
  },
})

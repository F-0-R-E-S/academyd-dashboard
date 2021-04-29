import {batch} from 'react-redux';
import storeLogin from '../../axios/login/post';
import {setJwt} from "../../action/login";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const logInThunk = LoginData => {
  return dispatch => {
    dispatch(
        storeLogin(
          LoginData,
        res => {
          batch(() => {
              dispatch(setJwt(res.data.access_token))
              localStorage.accessToken = res.data.access_token
              window.location.replace('/home');
              toast.success("Круто! Вы успешно автооризованы")
          });

        },
        error => {
            toast.error("Похоже ты ошиблися паролем дорогуша: " + error)
        },
      ),
    );
  };
};

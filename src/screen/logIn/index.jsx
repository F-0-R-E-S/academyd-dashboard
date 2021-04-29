import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import storeLogin from '../../redux/axios/login/post'
import { useHistory } from 'react-router-dom'
import {Login} from './index.styled.js'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {logInThunk} from "../../redux/thunk/login";


const LoginPage = () => {
    let history = useHistory()
    const jwt = useSelector(store => store.login.jwt)

    const useStyles = makeStyles((theme) => ({
        button: {
            margin: '10px 0',
        },
    }));

    const dispatch = useDispatch()
    const [log, setLog] = useState();
    const [pass, setPass] = useState();
    const classes = useStyles();

    const loginGo = () => {
        let LoginData = {
            email : log,
            password : pass,
        }
        dispatch(logInThunk(LoginData));
    }


    useEffect(() => {
        if(localStorage.accessToken){
            history.push('/home')
        }else {

        }
    }, [localStorage])


    return (
        <Login>
            <form>
                <div>
                    <TextField onChange={(event)=>setLog(event.target.value )}  id="Login" label="Login" />
                </div>
                <div>
                    <TextField  type="password" onChange={(event)=>setPass(event.target.value )} id="Password" label="Password" />
                </div>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => loginGo()}
                        className={classes.button}
                        endIcon={<LockOpenIcon/>}>
                        Send
                    </Button>
                </div>
            </form>
        </Login>
)
}

export default LoginPage;

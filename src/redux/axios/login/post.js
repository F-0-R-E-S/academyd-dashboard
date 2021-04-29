import customerInstance from './instance'

const storeLogin = (options, callbackSuccess, callbackError) => {


    return async dispatch => {

        customerInstance.post(
            'api/auth/login',
            options
        )
            .then((res) => {
                if (res.data) typeof callbackSuccess === 'function' && callbackSuccess(res)
            })
            .catch(error => {
                typeof callbackError === 'function' && callbackError(error)
            })
    }

}

export default storeLogin;

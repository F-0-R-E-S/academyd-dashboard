import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import Menu from "../../components/menu";


const TestPage = () => {
    let history = useHistory()



    useEffect(() => {
        if(localStorage.accessToken){

        }else {
            history.push('/')
        }
    }, [])

    return (
        <div className="container">
            <Menu/>
            <div>
                <p>Все тесты</p>
            </div>
        </div>
    )
}

export default TestPage;

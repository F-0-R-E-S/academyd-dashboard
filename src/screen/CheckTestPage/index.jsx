import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import Menu from "../../components/menu";


const ChekTestPage = () => {
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
                <p>Проверка тестов</p>
            </div>
        </div>
    )
}

export default ChekTestPage;

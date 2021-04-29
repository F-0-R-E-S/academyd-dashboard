import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import Menu from "../../components/menu";


const BlogPage = () => {
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
                <p>Блог</p>
            </div>
        </div>
    )
}

export default BlogPage;

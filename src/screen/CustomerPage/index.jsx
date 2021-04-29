import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import Menu from "../../components/menu";
import FormattedInputs from "../../components/elements/phoneInput";
import Button from "@material-ui/core/Button";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import {BlockGridItem, BlockGridItem100, BlockGridItem33, BlockGridItemData} from "./index.styled";
import SmsIcon from "@material-ui/icons/Sms";
import DenseTable from "../../components/elements/table";


const CastomerPage = () => {
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
                <BlockGridItem33>
                    <p>Добавить сотрудника</p>
                    <BlockGridItemData>
                        <FormattedInputs/>
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<SmsIcon/>}>
                            Отправить пароль
                        </Button>
                    </BlockGridItemData>
                </BlockGridItem33>
                <BlockGridItem100>
                    <p>Все сотрудники</p>
                    <DenseTable/>
                </BlockGridItem100>
            </div>

        </div>
    )
}

export default CastomerPage;

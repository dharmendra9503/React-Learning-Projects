import React from 'react';
import { Button } from '../index';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../features';

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })
    }

    return (
        <Button
            children="Logout"
            textColor=''
            bgColor=''
            className='duration-500 hover:bg-blue-100'
            onClick={logoutHandler}
        />
    )
}

export default LogoutBtn;
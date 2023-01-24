import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { getOneUsers, updateUsers } from '../../Redux/Actions/reducerAction';

const EditUserRedux = () => {

    const { state } = useLocation();
    const { id } = state || {};
    
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [DataUser, setDataUser] = useState({
        userId : '',
        username : '',
        password : ''
    })

    // console.log(DataUser)


    useEffect(() => {
        dispatch(getOneUsers(id))
        .then((res) => {
            setDataUser({
                ...DataUser,
                userId : res.userId,
                username : res.username,
                password : res.password
            })

            console.log(res)
        })

    })

    const eventHandler = data => event => {
        setDataUser({...DataUser, [data] : event.target.value});
    }

    const editData = (e) => {
        e.preventDefault();
        dispatch(updateUsers(DataUser.userId, DataUser))
        .then(() => {
            navigate('/user')
        })
        .catch(e => {
            console.log(e)
        })
    }

    return (
        <div>
            <form class="row g-3">
                <div class="col-12">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" value={DataUser.username} id="username" onChange={eventHandler('username')} />
                </div>
                <div class="col-12">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" value={DataUser.password} id="password" onChange={eventHandler('password')} />
                </div>
                <div class="text-center">
                    <button type="button" class="btn btn-outline-primary mx-1" onClick={editData}>Submit</button>
                    <button type="reset" class="btn btn-outline-secondary mx-1">Reset</button>
                </div>
            </form>
        </div>
    )
}

export default EditUserRedux

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { createUsers } from '../../Redux/Actions/reducerAction';

const AddUserRedux = () => {

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const [DataUser, setDataUser] = useState({
        username : '',
        password : ''
    })

    const eventHandler = data => event => {
        setDataUser({...DataUser, [data] : event.target.value});

        console.log(DataUser)
    }

    const addData = (e) => {
        e.preventDefault();
        dispatch(createUsers(DataUser))
        .then(() => {
            navigate('/userredux')
        })
        .catch(e => {
            alert(e)
        })
    }

    return (
        <div>
            <form class="row g-3">
                <div class="col-12">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" onChange={eventHandler('username')} />
                </div>
                <div class="col-12">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" onChange={eventHandler('password')} />
                </div>
                <div class="text-center">
                    <button type="button" class="btn btn-outline-primary mx-1" onClick={addData}>Submit</button>
                    <button type="reset" class="btn btn-outline-secondary mx-1">Reset</button>
                </div>
            </form>
        </div>
    )
}

export default AddUserRedux

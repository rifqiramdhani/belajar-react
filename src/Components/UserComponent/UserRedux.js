import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { deleteUsers, getAllUsers } from '../../Redux/Actions/reducerAction';

const UserRedux = () => {
    let navigate = useNavigate;

    let users = useSelector(state => state.userReducers.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    })

    const editdata = (id) => {
        navigate('/edit', { state: id})
    }

    const deletedata = (id) => {
        dispatch(deleteUsers(id))
    }

    return (
        <>
            <Link to="/adduser" className="btn btn-primary btn-sm mb-2"> Tambah </Link>
            <table className='table table-striped table-hover' id="datatable">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Aksi</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users && users.map((user, i) => {
                            return(
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{ user.userId }</td>
                                    <td>{ user.username }</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm mr-1" onClick={() => editdata(user.id)}>Edit</button>
                                        <button className="btn btn-danger btn-sm mr-1" onClick={() => deletedata(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </>
    )
}

export default UserRedux

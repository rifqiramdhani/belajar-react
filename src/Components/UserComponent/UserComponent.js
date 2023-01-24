import React, { useState } from 'react'
import apiUsers from '../../Api/apiUser'

const UserComponent = () => {

    let [Token, setToken] = useState(0)
    let [Data, setData] = useState([])

    const getData = async () => {
        const result = await apiUsers.getUser(localStorage.getItem('token').replace(/^["'](.+(?=["']$))["']$/, '$1'));
        
        console.log(result)

        if (typeof result.response != 'undefined'){
            if(result.response.status == 301){
                alert("Token salah")
            }
        }else{
            setData(result.data)
        }
    }

    // console.log(localStorage.getItem('token'))

    return (
        <div>

            <table className='table table-striped table-hover' id="datatable">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>ID</th>
                        <th>Username</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        Data.map((value, key) => {
                            return(
                                <tr>

                                    <td>{key+1}</td>
                                    <td>{value.userId}</td>
                                    <td>{value.username}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

            <div class="col-12">
                <label for="token" class="form-label">Token</label>
                <input type="text" class="form-control" id="token" onChange={(e) => setToken(e.target.value)} />
            </div>

            <div class="text-center">
                <button type="button" class="btn btn-outline-primary mx-1" onClick={getData}>Submit</button>
            </div>
        </div>
    )
}

export default UserComponent;
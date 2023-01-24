import React from 'react'

export default function ChildEmployee (props){
    return (
        <div>

            <table className='table table-striped table-hover' id="datatable">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>ID</th>
                        <th>Fullname</th>
                        <th>Salary</th>
                        <th>Department</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        props.data.map((value, key) => {
                            return (
                                <tr>
                                    <th>{key + 1}</th>
                                    <th>{value.emp_id}</th>
                                    <th>{value.emp_fullname}</th>
                                    <th>{value.emp_salary}</th>
                                    <th>{value.emp_department}</th>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}
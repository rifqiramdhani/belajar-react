import React, { useState } from 'react'
import ChildEmployee from './ChildEmployee'

const Employee = () => {

    let dataKaryawan = [
        {
            emp_id: 102,
            emp_fullname: "Lex",
            emp_salary: 17000,
            emp_department: "IT",
        },
        {
            emp_id: 103,
            emp_fullname: "Alexander",
            emp_salary: 9000,
            emp_department: "IT",
        },
        {
            emp_id: 104,
            emp_fullname: "Bruce",
            emp_salary: 6000,
            emp_department: "HR",
        },
        {
            emp_id: 105,
            emp_fullname: "Maudya",
            emp_salary: 19000,
            emp_department: "HR",
        },
        {
            emp_id: 106,
            emp_fullname: "Bob",
            emp_salary: 19000,
            emp_department: "FINANCE",
        },
        {
            emp_id: 107,
            emp_fullname: "Sarah",
            emp_salary: 20000,
            emp_department: "HR",
        },
        {
            emp_id: 108,
            emp_fullname: "Wawan",
            emp_salary: 15000,
            emp_department: "SALES",
        },
        {
            emp_id: 108,
            emp_fullname: "Wawan",
            emp_salary: 15000,
            emp_department: "SALES",
        },
        {
            emp_id: 109,
            emp_fullname: "Dudung",
            emp_salary: 25000,
            emp_department: "SALES",
        },
        {
            emp_id: 110,
            emp_fullname: "Iin",
            emp_salary: 125000,
            emp_department: "HR",
        },
        {
            emp_id: 111,
            emp_fullname: "Lex",
            emp_salary: 17000,
            emp_department: "IT",
        },
        {
            emp_id: 112,
            emp_fullname: "Alexander",
            emp_salary: 9000,
            emp_department: "IT",
        },
        {
            emp_id: 113,
            emp_fullname: "Bruce",
            emp_salary: 6000,
            emp_department: "HR",
        },
        {
            emp_id: 114,
            emp_fullname: "Maudya",
            emp_salary: 19000,
            emp_department: "HR",
        },
        {
            emp_id: 115,
            emp_fullname: "Bob",
            emp_salary: 19000,
            emp_department: "FINANCE",
        },
        {
            emp_id: 116,
            emp_fullname: "Sarah",
            emp_salary: 20000,
            emp_department: "HR",
        },
        {
            emp_id: 117,
            emp_fullname: "Wawan",
            emp_salary: 15000,
            emp_department: "SALES",
        },
        {
            emp_id: 118,
            emp_fullname: "Wawan",
            emp_salary: 15000,
            emp_department: "SALES",
        },
        {
            emp_id: 119,
            emp_fullname: "Dudung",
            emp_salary: 25000,
            emp_department: "SALES",
        },
        {
            emp_id: 120,
            emp_fullname: "Iin",
            emp_salary: 125000,
            emp_department: "HR",
        },
    ]


    const [data] = useState(dataKaryawan)

  return (
    <div>
        <ChildEmployee data={data}/>
    </div>
  )
}

export default Employee

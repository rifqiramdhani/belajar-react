import React, { useState } from 'react'
import ChildCalculatorProps from './ChildCalculatorProps'


export default function CalculatorProps() {

    let [Hasil, setHasil] = useState(0)

    const hitung = (x,y,operator) => {
        if(operator === "+"){
            setHasil(x + y)
        } else if (operator === "-"){
            setHasil(x - y)
        } else if (operator === "*") {
            setHasil(x * y)
        } else if (operator === "/") {
            setHasil(x / y)
        }
    }

    return (
        <div>
            <div className="col-md-4 mx-auto">
                <div className="form-group mb-3">
                    <input type="text" class="form-control" placeholder="Display" aria-label="Display" value={Hasil} />
                </div>
            </div>

            <ChildCalculatorProps fungsiHitung = {hitung} hasil={Hasil}/>
        </div>
    )
}
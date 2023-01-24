import React, { useState } from 'react'
import '../App.css'
export default function FunctionalTambah() {

    let [Count, setCount] = useState(0)
    let [Angka1, setAngka1] = useState(0)
    let [Angka2, setAngka2] = useState(0)

    const getInput1 = (event) => {
        setAngka1(Angka1 = parseInt(event.target.value))
    }

    const getInput2 = (event) => {
        setAngka2(Angka2 = parseInt(event.target.value))
    }

    const penjumlahan = () => {
        setCount(Count = Angka1+Angka2)
    }

    return (
        <div>

            <h1 class="text-center font-p" className='font-p'>Penjumlahan</h1>
            <h2 class="text-center">{Count}</h2>
            
            <div class='form-group'>
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Masukkan Angka 1" aria-label="Masukkan Angka 1" onChange={getInput1} />
                    </div>
                    +
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Masukkan Angka 1" aria-label="Masukkan Angka 1" onChange={getInput2} />
                    </div>
                </div>
                

                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="button" className="text-center btn btn-primary my-2 btn-block" onClick={penjumlahan}>Submit</button>
                </div>

            </div>

            <hr/>

        </div>
    )
}

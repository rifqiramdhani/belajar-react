import React, { useState } from 'react'


export default function ChildCalculatorProps(props) {

    let [Angka1, setAngka1] = useState(0)
    let [Angka2, setAngka2] = useState(0)
    let [Button1, setButton1] = useState(" text-center btn btn-outline-success my-2 btn-block d-none")
    let [Button2, setButton2] = useState(" text-center btn btn-outline-success my-2 btn-block d-none")
    let [Button3, setButton3] = useState(" text-center btn btn-outline-success my-2 btn-block d-none")
    let [Button4, setButton4] = useState(" text-center btn btn-outline-success my-2 btn-block d-none")

    

    const getInput1 = (event) => {
        setAngka1(Angka1 = parseInt(event.target.value))
    }

    const getInput2 = (event) => {
        setAngka2(Angka2 = parseInt(event.target.value))
    }

    const handleValue = (e) => {
        const checked = e.target.checked;
        const checkedValue = e.target.value;

        if(checked) {
            if(checkedValue == "+"){
                setButton1("text-center btn btn-outline-success my-2 btn-block d-block")
            } else if (checkedValue == "-"){
                setButton2("text-center btn btn-outline-success my-2 btn-block d-block")
            } else if (checkedValue == "*") {
                setButton3("text-center btn btn-outline-success my-2 btn-block d-block")
            } else if (checkedValue == "/") {
                setButton4("text-center btn btn-outline-success my-2 btn-block d-block")
            }
        }else{
            if (checkedValue == "+") {
                setButton1("text-center btn btn-outline-success my-2 btn-block d-none")
            } else if (checkedValue == "-") {
                setButton2("text-center btn btn-outline-success my-2 btn-block d-none")
            } else if (checkedValue == "*") {
                setButton3("text-center btn btn-outline-success my-2 btn-block d-none")
            } else if (checkedValue == "/") {
                setButton4("text-center btn btn-outline-success my-2 btn-block d-none")
            }
        }

    }

    return (
        <div>
            <div className='col-md-12'>
                <div class='form-group mb-3'>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Masukkan Angka 1" aria-label="Masukkan Angka 1" onChange={getInput1} />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Masukkan Angka 1" aria-label="Masukkan Angka 1" onChange={getInput2} />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group mb-3'>
                            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" value="+" onChange={handleValue}/>
                                <label class="btn btn-outline-primary" for="btncheck1">Tambah</label>

                                <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" value="-" onChange={handleValue}/>
                                <label class="btn btn-outline-primary" for="btncheck2">Kurang</label>

                                <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" value="*" onChange={handleValue}/>
                                <label class="btn btn-outline-primary" for="btncheck3">Kali</label>

                                <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off" value="/" onChange={handleValue}/>
                                <label class="btn btn-outline-primary" for="btncheck4">Bagi</label>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div class="d-grid gap-2 col-12 mx-auto">
                            <button type="button" className={Button1} onClick={() => props.fungsiHitung(Angka1, Angka2, "+")}>+</button>
                        </div>
                        <div class="d-grid gap-2 col-12 mx-auto">
                            <button type="button" className={Button2} onClick={() => props.fungsiHitung(Angka1, Angka2, "-")}>-</button>
                        </div>
                        <div class="d-grid gap-2 col-12 mx-auto">
                            <button type="button" className={Button3} onClick={() => props.fungsiHitung(Angka1, Angka2, "*")}>*</button>
                        </div>
                        <div class="d-grid gap-2 col-12 mx-auto">
                            <button type="button" className={Button4} onClick={() => props.fungsiHitung(Angka1, Angka2, "/")}>/</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
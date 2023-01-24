import React, { useState } from 'react'

const KirimNamaChild = (props) => {

    return (
        <div>
            <h1>{props.data.firstName}</h1>
            <h1>{props.data.lastName}</h1>

        </div>
    );
}

export default KirimNamaChild

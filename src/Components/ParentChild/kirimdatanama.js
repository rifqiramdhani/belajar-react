import React, { useState } from 'react'
import KirimNamaChild from './kirimdatanamachild';

const KirimNama = (props) =>{
    const[data, setFirstName] = useState({
        firstName : "Rifqi",
        lastName : "Ramdhani"
    });
   

    return(
        <div>
            <KirimNamaChild data={data} />
        </div>
    );
}

export default KirimNama

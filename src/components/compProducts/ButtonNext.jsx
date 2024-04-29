import React from 'react';

function ButtonNext({setForm}) {
    return (
        <div>
            <button className='btnNext' onClick={() => setForm(false)}>Next</button>

        </div>
    );
}

export default ButtonNext;
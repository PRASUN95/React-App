import React from 'react'

function DynamicSelect({ ListData,identifier,Class }) {
    const options = ListData.map((element) => 
        <option
            key = {element}
            value = {element}
        >
            {element}
        </option>
    )
    return (
            <select id={identifier} className={Class}><option>Select</option>{options}</select>
    )
}

export default DynamicSelect

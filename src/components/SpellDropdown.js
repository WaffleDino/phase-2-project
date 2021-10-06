import React from 'react'
import Select from 'react-select'







const SpellDropdown = ({options, onChange, label}) => {
    return(
        <div>
            <h1>{label}</h1>
            <div className="spell-dropdown"><Select options={options} onChange={onChange} /></div>
        </div>
    )
}

export default SpellDropdown
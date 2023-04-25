import React from 'react';

function Selection ({onWordSelect}) {

function handleChange (event) {
    onWordSelect(event.target.value);
}

    return(
        <select onChange={handleChange}>
            <option value='english'>english</option>
            <option value='spenish'>spenish</option>
        </select>
    );
}

export default Selection;
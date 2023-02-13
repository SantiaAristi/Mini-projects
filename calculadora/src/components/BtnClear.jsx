import React from "react";
import '../stylesheets/BtnClear.css'

const ClearButton = ({ button, manejarClear }) => (
    <div className='clear-button' onClick={ manejarClear }>
        {button}
    </div>
);

export default ClearButton;


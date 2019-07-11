import React from 'react';
import Button from 'react-bootstrap/Button'
import '../Styles/button.css'

export default props =>{
    return(
        <Button variant="primary" className="Button">
            {props.title}
        </Button>
    )
}
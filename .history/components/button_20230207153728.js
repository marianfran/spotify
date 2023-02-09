import React from 'react'

function Button(props) {
    return (
        <a href={props.link}>
            <button name={props.name}>{props.name}</button>
        </a>
    )
}

export default Button
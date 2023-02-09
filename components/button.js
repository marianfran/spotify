import React from 'react'
import styles from '../styles/button.module.css'

function Button(props) {
    return (
        <a href={props.link}>
            <button name={props.name} className={styles.button}>{props.name}</button>
        </a>
    )
}

export default Button
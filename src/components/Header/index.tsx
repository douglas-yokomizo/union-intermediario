import { useState } from 'react'
import styles from './header.module.scss'

const Header = () => {

  const aoDigitado = (evento) => {        
    let valor = evento.target.value;
    console.log(evento.target.value);
}

  return (
    <div className={styles.header}>
      <h1>Users List</h1>
      
      <input type="text" onChange={aoDigitado} placeholder="Search user..." />

      <div className={styles.divider}></div>
    </div>
  )
}

export default Header

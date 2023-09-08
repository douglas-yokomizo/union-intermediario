import { useState } from 'react'
import styles from './header.module.scss'
/*
  1- o usuário irá colocar um valor no input
  2- esse valor deverá ser armanezado em uma variável
  3- comparar o valor dessa variável com o que já está na lista
  4- renderizar só o que está no campo
*/

const Header = () => {
  const [user, setUser] = useState('')


  return (
    <div className={styles.header}>
      <h1>Users List</h1>
      <input value={user} onChange={e => setUser(e.target.value)} type="search" placeholder="Search user..." />
      <div className={styles.divider}></div>

    </div>
  )
}

export default Header

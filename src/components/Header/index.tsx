import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>User List</h1>
      <input type="text" placeholder="Search user..." />
      <div className={styles.divider}></div>
    </div>
  )
}

export default Header

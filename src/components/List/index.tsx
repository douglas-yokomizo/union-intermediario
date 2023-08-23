import style from './List.module.scss'

const List = () => {
  return (
    <div>
      <table>
        <thead className={style.header}>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Title</th>
            <th>Date</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>gd54d5vdfbvtb</td>
            <td>Jennie</td>
            <td>Nichols</td>
            <td>Miss</td>
            <td>10/02/2023</td>
            <td>30</td>
            <td><button>View profile</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default List

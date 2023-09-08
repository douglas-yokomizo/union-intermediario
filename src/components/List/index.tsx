import { useQuery } from "react-query";
import style from './List.module.scss'
import { api } from "../../services/usersApi";

const List = () => {
  const { data, isLoading, isError } = useQuery('user-list', api.getAllUsers)

  return (
    <>
      {isLoading && <h3 style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>Carregando lista</h3>}
      {isError && console.log("algo deu errado")}
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
          {data?.results.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.login.uuid.slice(0, 7)}</td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.name.title}</td>
                <td>{user.dob.date.slice(0, 10)}</td>
                <td>{user.dob.age}</td>
                <td>
                  <button className={style.button}>View details</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
}

export default List

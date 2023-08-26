import { useState, useEffect } from "react";
import usersApi from '../../services/usersApi'
import style from './List.module.scss'

const List = () => {

  const [listaNomes, setListaNomes] = useState()

  useEffect(() => {
    usersApi
      .get("?results=100")
      .then((response) => setListaNomes(response.data)
      )
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  if (!listaNomes) return null;


  return (

    <>
      <table>

        <thead className={style.header}>
          <tr>
            <th>ID</th>
            <th> First Name</th>
            <th>Last Name</th>
            <th>Title</th>
            <th>Date</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {listaNomes.results.map((item, index) => {
            return (
              <tr>
                <td>{item.id.name}</td>
                <td>{item.name.first}</td>
                <td>{item.name.last}</td>
                <td>{item.name.title}</td>
                <td>{item.dob.date}</td>
                <td>{item.dob.age}</td>
                <td>View details</td>
              </tr>
            );

          })}

        </tbody>
      </table>
    </>
  )
}

export default List

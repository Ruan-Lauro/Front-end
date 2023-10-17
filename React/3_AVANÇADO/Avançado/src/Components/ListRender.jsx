import React from 'react'
import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Ruan", "Láis", "Rian", "Flávio"]);
    const [users, setUsers] = useState([
        {id: 1, name: "Ruan", age: 19},
        {id: 2, name: "Laís", age: 19},
        {id: 3, name: "Rian", age: 20},
        {id: 4, name: "Flávio", age: 22}
    ])
        const deleteRandom = () => {

            const randomNumber = Math.floor(Math.random()*5)

            setUsers((prevUsers) =>
                prevUsers.filter((user) => randomNumber !== user.id) 
            );
        }
  return (
    <div>
        {/*Render sem key */}
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
        {/*Render com key */}
        <ul>
            {users.map((user) =>(
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={(deleteRandom)}>Deletar aleatoriamente</button>
    </div>
  )
}

export default ListRender
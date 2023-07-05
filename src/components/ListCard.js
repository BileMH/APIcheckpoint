import React, { useEffect, useState } from 'react'

import UserCards from './UserCard/UserCard'
import axios from 'axios'

const ListCard = () => {
    const[users,setUsers]=useState([])
    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .catch((err=> console.log(err)))

    },[])


    
  return (
    <div>
      {users.map((el)=>(<UserCards user={el} key={el.id}/>))}
    </div>
  )
}

export default ListCard

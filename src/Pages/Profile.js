import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Profile = () => {
  const {id} = useParams();
  const[user,setUser] = useState({});
  useEffect(()=> {
    axios
    .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
    .then((res)=>setUser(res.data[0]))
    .catch((err)=>console.log(err));
    



  },[id]


  );
  
  return (
    <div>
    <Card style={{ width: '18rem', background:'#bdc3c7' }}>
		<Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzAFp0zb3cTljbXKwEf7jdWQeU2RLWkyzBg&usqp=CAU"/>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
        <Card.Text>
         {user.email}
        </Card.Text>
        <Button variant="primary">
          <Link to={"/"} style={{ color:'black'}} >go back</Link>
        </Button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default Profile

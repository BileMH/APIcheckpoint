import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const UserCard = ({user}) => {
  return (
    <div>
    <Card style={{ width: '18rem', background:'#bdc3c7', margin:'20px', padding: '15px 30px 50px 70px' }}>
		<Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzAFp0zb3cTljbXKwEf7jdWQeU2RLWkyzBg&usqp=CAU"/>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
        <Card.Text>
         {user.email}
        </Card.Text>
		<Button variant="primary">
			<Link to={`/profile/${user.id}`}  style={{color:'black'}}> Go to user profile</Link> </Button>
      </Card.Body>
    </Card>
</div>

  )
}

export default UserCard

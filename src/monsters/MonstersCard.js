import React from "react";
import { Card, Container } from "react-bootstrap";

const MonstersCard = (props) => {
  const { address, company, email, id, name, phone, username, website } = props;
  return (
    <Container className="cards-container">
      <Card style={{ width: "20rem",textAlign:"center",borderRadius:"20px" }}>
        <Card.Img variant="top   alt={`monster ${name}`}   "src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Title>{name}</Card.Title>
          <Card.Text>({username})</Card.Text>
          <Card.Text>{address.city}</Card.Text>
          <Card.Text>{company.name}</Card.Text>
          <Card.Text>{email}</Card.Text>
          <Card.Text>{phone}</Card.Text>
          <Card.Subtitle>{website}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MonstersCard;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MonstersCard from "./MonstersCard";
import "./monsters.scss"
const Monsters = () => {
  const [data, setData] = useState([]);
  const [searchField, setSearchField] = useState("");

  const getMonsters = async () => {
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = resp.data;
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMonsters();
  }, []);



  return (
    <Container >
      <input className="inp"
        type="search"
        placeholder="Search Monsters"
        onChange={(e) => {setSearchField(e.target.value.toLocaleLowerCase()); }} />
      <Row className="mt-5 g-5">
        {data.filter((item) => item.name
              .toLocaleLowerCase()
              .includes(searchField.toLocaleLowerCase())
          )
          .map((monster) => (
            <Col key={monster.id} sm={6} md={4} lg={3} xl={4}>
              <MonstersCard {...monster} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Monsters;

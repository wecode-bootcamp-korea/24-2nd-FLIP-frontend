import React from 'react';
import { useState, useEffect } from 'react';
import CardList from './CardList';
import styled from 'styled-components';

function Card() {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    fetch('http://10.58.7.68:8000/products/list/1')
      .then(res => res.json())
      .then(res => setCard(res.MESSAGE));
  }, []);

  return (
    <Container>
      {cards.map((card, idx) => {
        return <CardList key={idx} card={card} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
`;

export default Card;

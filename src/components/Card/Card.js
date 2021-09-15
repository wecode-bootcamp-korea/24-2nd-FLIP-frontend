import React from 'react';
import { useState, useEffect } from 'react';
import CardList from './CardList';
import styled from 'styled-components';

function Card() {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    fetch('http://10.58.1.56:8000/products/list/1')
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
  width: 100%;
`;

export default Card;

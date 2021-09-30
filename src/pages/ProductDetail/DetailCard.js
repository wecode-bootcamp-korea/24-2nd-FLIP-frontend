import React from 'react';
import { useState, useEffect } from 'react';
import DetailCardContent from './DetailCardContent';
import styled from 'styled-components';

function DetailCard() {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    fetch('http://10.58.1.56:8000/products/list/1')
      .then(res => res.json())
      .then(res => setCard(res.MESSAGE.slice(0, 4)));
  }, []);
  // console.log(cards);

  return (
    <Container>
      {cards.map((card, idx) => {
        return <DetailCardContent key={idx} card={card} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  /* display: flex;
  flex-wrap: wrap;
  width: 800px; */
`;

export default DetailCard;

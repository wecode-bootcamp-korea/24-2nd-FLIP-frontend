import React from 'react';
import { useState, useEffect } from 'react';
import DetailCardContent from './DetailCardContent';
import styled from 'styled-components';
import { API } from '../../config';

function DetailCard() {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    fetch(`${API}/products/list/1`)
      .then(res => res.json())
      .then(res => setCard(res.MESSAGE.slice(0, 4)));
  }, []);

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

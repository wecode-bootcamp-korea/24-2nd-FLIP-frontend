import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainCardList from './MainCardList';
import { API } from '../../../config';

function MainCard() {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    fetch(`${API}/products/list/1`)
      .then(res => res.json())
      .then(res => setCard(res.MESSAGE));
  }, []);

  return (
    <Container>
      {cards.map((card, idx) => {
        return <MainCardList key={idx} card={card} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
`;

export default MainCard;

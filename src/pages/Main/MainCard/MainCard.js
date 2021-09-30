import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import MainCardList from './MainCardList';
import { API } from '../../../config';

function MainCard({ moveToProduct }) {
  const [cards, setCard] = useState([]);
  let history = useHistory();

  useEffect(() => {
    fetch(`${API}/products/list/1`)
      .then(res => res.json())
      .then(res => setCard(res.MESSAGE));
  }, []);

  const moveToDetail = id => {
    history.push(`/product/${id}`);
  };

  return (
    <Container>
      {cards.map((card, idx) => {
        return (
          <MainCardList
            key={idx}
            card={card}
            moveToProduct={moveToProduct}
            moveToDetail={moveToDetail}
            id={card.product_id}
          />
        );
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

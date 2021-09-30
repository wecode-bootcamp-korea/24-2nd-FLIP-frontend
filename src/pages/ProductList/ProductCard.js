import React from 'react';
import { useState, useEffect } from 'react';
import ProductCardList from './ProductCardList';
import styled from 'styled-components';

function ProductCard({ sort }) {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.1.56:8000/products/list/1?order=${sort}`)
      .then(res => res.json())
      .then(res => {
        console.log(res.MESSAGE);
        setCard(res.MESSAGE);
      });
  }, [sort]);

  return (
    <Container>
      {cards.map((card, idx) => {
        return <ProductCardList key={idx} card={card} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
`;

export default ProductCard;

import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import ProductCardList from './ProductCardList';
import styled from 'styled-components';

function ProductCard({ sort, product, card }) {
  const params = useParams();
  const history = useHistory();
  console.log(product);

  const moveToDetail = id => {
    history.push(`/product/${id}`);
  };

  return (
    <Container>
      {product &&
        product.map((card, idx) => {
          return (
            <ProductCardList
              moveToDetail={moveToDetail}
              key={idx}
              card={card}
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

export default ProductCard;
